import * as React from 'react';

import { cn } from '../../lib/cn';

interface SelectionCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** indeterminate(부분 선택) 상태 — 헤더 체크박스에서 사용. */
  indeterminate?: boolean;
  label: string;
}

/**
 * Grid 행 선택용 네이티브 체크박스 — `<input type="checkbox">`를 토큰 색으로 스타일링.
 * indeterminate는 React에서 setter로만 설정되므로 ref+effect로 처리.
 */
export const SelectionCheckbox = React.forwardRef<HTMLInputElement, SelectionCheckboxProps>(
  function SelectionCheckbox({ indeterminate, label, className, ...props }, ref) {
    const localRef = React.useRef<HTMLInputElement>(null);

    // 외부 ref + 내부 ref 둘 다 유지
    React.useImperativeHandle(ref, () => localRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (localRef.current) {
        localRef.current.indeterminate = indeterminate === true;
      }
    }, [indeterminate]);

    return (
      <input
        ref={localRef}
        type="checkbox"
        aria-label={label}
        className={cn(
          'h-4 w-4 cursor-pointer accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
          className,
        )}
        {...props}
      />
    );
  },
);
