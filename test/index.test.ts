import l from '../src';

it('wraps a val', () => {
  expect(l([1]).val()).toEqual([1]);
});

it('filters', () => {
  expect(l([1, 2, 3]).where((x) => x % 2 === 0).val()).toEqual([2]);
});

it('selects', () => {
  expect(l([1, 2, 3]).select((x) => x * 2).val()).toEqual([2, 4, 6]);
});