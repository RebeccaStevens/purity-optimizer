import dedent from 'dedent';

import { optimize } from '@optimizer';

describe('basic', () => {
  it('replaces pure function', () => {
    const code = dedent`
      function add1(n) {
        return n + 1;
      }

      export const foo = add1(2);
    `;

    const optimized = dedent`
      export const foo = 3;
    `;

    expect(optimize(code)).toEqual(optimized);
  });
});
