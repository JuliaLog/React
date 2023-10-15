
export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.maxLength > maxLength) return `Max length in ${maxLength} simbols`;
    return undefined;
}

