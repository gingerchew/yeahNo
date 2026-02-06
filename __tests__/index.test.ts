import { expect, it } from 'vitest';
import { noYeah, yeahNo, noYeahNo, yeahNoYeah } from '..';
import { foundNotNullish, foundNullish } from '../messages';

it('should return the value if not nullish', () => {
    const nullishValue = null;
    const notNullishValue = 1;

    expect(noYeah(notNullishValue)).toBe(1);
    expect(yeahNoYeah(notNullishValue)).toBe(1);
    /* @ts-expect-error */
    expect(() => noYeah(nullishValue)).toThrow(foundNullish)
    /* @ts-expect-error */
    expect(() => yeahNoYeah(nullishValue)).toThrow(foundNullish);
});

it('should return the value if nullish', () => {
    const nullishValue = null;
    const notNullishValue = 1;

    expect(yeahNo(nullishValue)).toBe(null)
    expect(noYeahNo(nullishValue)).toBe(null);
    /* @ts-expect-error */
    expect(() => yeahNo(notNullishValue)).toThrow(foundNotNullish);
    /* @ts-expect-error */
    expect(() => noYeahNo(notNullishValue)).toThrow(foundNotNullish);
})