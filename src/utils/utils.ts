const numericRegEx = /^\d+$/;
const alphabeticRegEx = /^[a-z]+$/i;
const alphaNumericRegEx = /[\p{L}\p{N}]/giu;

export const updateInputValues = (
    count: number | undefined,
    defaulValues?: string[],
    defaultString?: string | undefined,
    stringType?: "numeric" | "alphanumeric" | "alphabetic"
): string[] => {
    const defaultArray = Array.from<string>({ length: count ? count : 0 }).fill("");

    if (defaultString) {
        const arra = defaultString.trim().replaceAll(" ", "").split("");
        if (stringType === "numeric" && numericRegEx.test(defaultString)) {
            arra.forEach((item, index) => (index in defaultArray ? (defaultArray[index] = item) : null));
        } else if (stringType === "alphabetic" && alphabeticRegEx.test(defaultString)) {
            arra.forEach((item, index) => (index in defaultArray ? (defaultArray[index] = item) : null));
        } else if (stringType === "alphanumeric" && alphaNumericRegEx.test(defaultString)) {
            arra.forEach((item, index) => (index in defaultArray ? (defaultArray[index] = item) : null));
        } else {
            return defaultArray;
        }
    }
    if (defaulValues) {
        defaulValues.forEach((item, index) => (defaultArray[index] = item));
        return defaultArray;
    }
    return defaultArray;
};
