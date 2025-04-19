const stripWhitespace = (value: string | number): number => {
    if (typeof value === 'string' && /\s/.test(value)) {
        return Number(value.replace(/\s/g, ''));
    }
    return Number(value);
};

export default stripWhitespace