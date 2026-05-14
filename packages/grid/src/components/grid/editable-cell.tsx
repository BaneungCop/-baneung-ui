import * as React from 'react';

import { cn } from '../../lib/cn';

import type { GridColumn } from './types';

interface EditableCellProps<TRow> {
  /** 컬럼 정의 — editor 종류·options 결정. */
  column: GridColumn<TRow>;
  /** 현재 표시 값. */
  value: unknown;
  /** 비편집 시 표시되는 노드. */
  display: React.ReactNode;
  /** 정렬 — input의 text-align에도 적용. */
  align?: 'left' | 'center' | 'right';
  /** 편집 commit 콜백. 새 string 값을 받는다 (caller가 type 변환 책임). */
  onCommit: (next: string) => void;
}

/**
 * 더블클릭 → editor 전환, Enter/blur로 commit, Escape로 cancel.
 *
 * # editor 종류 (`column.editor`)
 * - 'text' (기본): `<input type="text">`
 * - 'number': `<input type="number">`
 * - 'date': `<input type="date">` — 브라우저 네이티브 달력 popup
 * - 'dropdown': `<select>` with `column.options`
 *
 * # 키보드/포커스
 * - 더블클릭으로 진입
 * - Enter: commit (Select는 change 즉시 commit)
 * - Escape: cancel
 * - blur: commit
 * - 자동 포커스 + 텍스트류는 전체 선택
 *
 * # 한글 IME
 * - composition 중 Enter는 commit이 아니라 한글 조합 확정 — isComposing 가드.
 */
export function EditableCell<TRow>({
  column,
  value,
  display,
  align,
  onCommit,
}: EditableCellProps<TRow>) {
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement | HTMLSelectElement | null>(null);

  const editor = column.editor ?? 'text';

  React.useEffect(() => {
    if (editing) {
      // 초기 값을 draft로 복사 — date editor는 YYYY-MM-DD 형식으로 정규화 필요.
      if (editor === 'date') {
        setDraft(toDateInputValue(value));
      } else {
        setDraft(value === null || value === undefined ? '' : String(value));
      }
    }
  }, [editing, value, editor]);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // 텍스트류는 전체 선택해서 즉시 덮어쓰기 가능
      if (
        inputRef.current instanceof HTMLInputElement &&
        (editor === 'text' || editor === 'number')
      ) {
        inputRef.current.select();
      }
    }
  }, [editing, editor]);

  const enter = () => setEditing(true);
  const cancel = () => setEditing(false);
  const commit = (nextValue?: string) => {
    setEditing(false);
    onCommit(nextValue ?? draft);
  };

  if (!editing) {
    return (
      <div
        onDoubleClick={enter}
        className={cn(
          'min-h-[1.5rem] cursor-text',
          align === 'right' && 'text-right',
          align === 'center' && 'text-center',
          (!align || align === 'left') && 'text-left',
        )}
        title="더블클릭하여 편집"
      >
        {display}
      </div>
    );
  }

  const commonInputClass = cn(
    // 셀 가장자리까지 꽉 차도록 absolute inset-0. 부모 td는 relative 가정.
    'absolute inset-0 z-10 box-border w-full border-0 bg-canvas px-3 py-2 text-foreground outline-none',
    align === 'right' && 'text-right',
    align === 'center' && 'text-center',
  );

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !(e.nativeEvent as KeyboardEvent).isComposing) {
      e.preventDefault();
      commit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancel();
    }
  };

  // 부모 td 높이 유지용 invisible placeholder + editor 오버레이
  return (
    <>
      <span aria-hidden="true" className="invisible block min-h-[1.5rem]">
        {display ?? ' '}
      </span>
      {editor === 'dropdown' ? (
        <select
          ref={(el) => {
            inputRef.current = el;
          }}
          value={draft}
          onChange={(e) => commit(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              cancel();
            }
          }}
          className={commonInputClass}
          aria-label="셀 편집 (드롭다운)"
        >
          {(column.options ?? []).map((opt) => (
            <option key={String(opt.value)} value={String(opt.value)}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          ref={(el) => {
            inputRef.current = el;
          }}
          type={editor === 'number' ? 'number' : editor === 'date' ? 'date' : 'text'}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={keyDownHandler}
          onBlur={() => commit()}
          className={commonInputClass}
          aria-label="셀 편집"
        />
      )}
    </>
  );
}

/**
 * 임의 값을 `<input type="date">`가 받는 YYYY-MM-DD 형식으로 정규화.
 * - Date 객체: ISO 날짜 부분
 * - YYYY-MM-DD 문자열: 그대로
 * - YYYY/MM/DD 문자열: '-'로 치환
 * - 그 외: 빈 문자열 (재선택 유도)
 */
function toDateInputValue(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === 'string') {
    if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
    if (/^\d{4}\/\d{2}\/\d{2}/.test(value)) return value.slice(0, 10).replace(/\//g, '-');
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  }
  return '';
}
