export function add(x: number, y: number) {
  return x + y;
}

describe('Initial Test', () => {
  test('Add test', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
