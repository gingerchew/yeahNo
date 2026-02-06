import { foundNotNullish, foundNullish } from "./messages";

type nullish = null|undefined;

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
export const yeahNo = (value: nullish) => isNullish(value, true);
/**
 * Determines if a value is nullish, throws if true
 * @param value 
 * @returns value
 * @throws NullishError
 */
export const noYeah = (value: any) => isNullish(value);
/**
 * Determines if a value is not nullish, throws if true
 * @param value
 * @returns value
 * @throws NullishError
 */
export const noYeahNo = (value:nullish) => isNullish(value, true);
/**
 * Determines if a value is nullish, throws if true
 * @param value 
 * @returns value
 * @throws NullishError
 */
export const yeahNoYeah = (value:any) => isNullish(value);