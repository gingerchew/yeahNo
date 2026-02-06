import { foundNotNullish, foundNullish } from "./messages";

type Nullish = null|undefined;
type NotNullish<T> = T extends null|undefined ? never : T;

export class NullishError extends Error {
    constructor(expectToBeNull:boolean) {
        super();
        this.message = expectToBeNull ? foundNotNullish : foundNullish;
    }
}

/**
 * 
 * @param value 
 * @param expectToBeNull 
 * @returns value
 * @throws NullishError
 */
const isNullish = (value: any, expectToBeNull = false) => {
    const isNullishValue = [null, undefined].includes(value);
    if ((!expectToBeNull && isNullishValue) || (expectToBeNull && !isNullishValue)) {
        throw new NullishError(expectToBeNull);
    }
    return value;
}

/**
 * Determines if a value is not nullish, throws if true
 * @param value 
 * @returns value
 * @throws NullishError
 */
export const yeahNo = (value: Nullish) => isNullish(value, true);

/**
 * Determines if a value is nullish, throws if true
 * @param value 
 * @returns value
 * @throws NullishError
 */
export const noYeah = <T extends any>(value: NotNullish<T>) => isNullish(value);

/**
 * Determines if a value is not nullish, throws if true
 * @param value
 * @returns value
 * @throws NullishError
 */
export const noYeahNo = (value:Nullish) => isNullish(value, true);

/**
 * Determines if a value is nullish, throws if true
 * @param value 
 * @returns value
 * @throws NullishError
 */
export const yeahNoYeah = <T extends any>(value: NotNullish<T>) => isNullish(value);