const roundingToInteger = (value: number | string): number  => {
    const num = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(num)) {
        console.warn('roundingToInteger invalid number:', value);
        return 0;
    }

    return Math.round(num);
}

export default roundingToInteger