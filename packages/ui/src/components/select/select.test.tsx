import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Select, type SelectOption } from './select';
import { checkA11y } from '../../test-utils/axe';

const cities: SelectOption[] = [
  { label: '서울', value: 'seoul' },
  { label: '부산', value: 'busan' },
  { label: '대구', value: 'daegu' },
  { label: '인천', value: 'incheon' },
  { label: '광주', value: 'gwangju' },
];

describe('Select — single mode', () => {
  it('renders trigger with placeholder when no value', () => {
    render(<Select options={cities} placeholder="도시" aria-label="도시" />);
    expect(screen.getByRole('combobox', { name: '도시' })).toHaveTextContent('도시');
  });

  it('opens popover and selects an option', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select options={cities} placeholder="도시" aria-label="도시" onValueChange={onChange} />,
    );
    await user.click(screen.getByRole('combobox'));
    const option = await screen.findByText('부산');
    await user.click(option);
    expect(onChange).toHaveBeenLastCalledWith('busan');
  });

  it('shows selected label after picking', () => {
    render(<Select options={cities} defaultValue="daegu" aria-label="도시" placeholder="도시" />);
    expect(screen.getByRole('combobox')).toHaveTextContent('대구');
  });
});

describe('Select — multiple mode', () => {
  it('toggles items, retains popover open', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select
        mode="multiple"
        options={cities}
        aria-label="도시"
        placeholder="도시"
        onValueChange={onChange}
      />,
    );
    await user.click(screen.getByRole('combobox'));
    await user.click(await screen.findByText('서울'));
    expect(onChange).toHaveBeenLastCalledWith(['seoul']);
    await user.click(await screen.findByText('부산'));
    expect(onChange).toHaveBeenLastCalledWith(['seoul', 'busan']);
  });

  it('respects maxSelected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select
        mode="multiple"
        options={cities}
        maxSelected={2}
        aria-label="도시"
        placeholder="도시"
        onValueChange={onChange}
      />,
    );
    await user.click(screen.getByRole('combobox'));
    await user.click(await screen.findByText('서울'));
    await user.click(await screen.findByText('부산'));
    await user.click(await screen.findByText('대구'));
    // 대구는 maxSelected=2 초과로 무시
    expect(onChange).toHaveBeenLastCalledWith(['seoul', 'busan']);
  });

  it('showSelectedCount displays count instead of chips', () => {
    render(
      <Select
        mode="multiple"
        options={cities}
        defaultValue={['seoul', 'busan']}
        showSelectedCount
        aria-label="도시"
        placeholder="도시"
      />,
    );
    expect(screen.getByRole('combobox')).toHaveTextContent('2개 선택');
  });
});

describe('Select — searchable mode', () => {
  it('filters options as user types', async () => {
    const user = userEvent.setup();
    render(<Select options={cities} searchable aria-label="도시" placeholder="도시" />);
    await user.click(screen.getByRole('combobox'));
    const input = await screen.findByPlaceholderText('검색…');
    await user.type(input, '인');
    expect(screen.getByText('인천')).toBeVisible();
  });

  it('shows emptyText when no match', async () => {
    const user = userEvent.setup();
    render(
      <Select
        options={cities}
        searchable
        emptyText="검색 결과 없음"
        aria-label="도시"
        placeholder="도시"
      />,
    );
    await user.click(screen.getByRole('combobox'));
    const input = await screen.findByPlaceholderText('검색…');
    await user.type(input, 'zzzz');
    expect(screen.getByText('검색 결과 없음')).toBeInTheDocument();
  });
});

describe('Select — keyboard navigation', () => {
  it('navigates options with arrow keys and selects with Enter (non-searchable)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select options={cities} aria-label="도시" placeholder="도시" onValueChange={onChange} />,
    );
    // Trigger 클릭으로 popover 열기
    await user.click(screen.getByRole('combobox'));
    // popover가 열리고 첫 항목이 active 상태가 될 때까지 대기
    await screen.findByText('서울');
    // ↓ 한 번 → 두 번째 항목(부산) active
    await user.keyboard('{ArrowDown}');
    // Enter로 active 항목 선택
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenLastCalledWith('busan');
  });

  it('navigates with arrow keys in searchable mode after typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <Select
        options={cities}
        searchable
        aria-label="도시"
        placeholder="도시"
        onValueChange={onChange}
      />,
    );
    await user.click(screen.getByRole('combobox'));
    const input = await screen.findByPlaceholderText('검색…');
    // 검색어 입력 → 매칭 항목으로 좁힘
    await user.type(input, '인');
    expect(screen.getByText('인천')).toBeVisible();
    // Enter로 active(=첫 매칭) 선택
    await user.keyboard('{Enter}');
    expect(onChange).toHaveBeenLastCalledWith('incheon');
  });
});

describe('Select — a11y', () => {
  it('passes axe a11y scan (closed)', async () => {
    const { container } = render(<Select options={cities} aria-label="도시" placeholder="도시" />);
    const results = await checkA11y(container);
    expect(results.violations).toEqual([]);
  });
});
