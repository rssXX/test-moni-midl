
const formatNumberWithSpaces = (value: number | string): string => {
    try {
        const num = typeof value === 'string' ? parseFloat(value) : value;

        if (isNaN(num)) {
            console.warn('formatNumberWithSpaces: invalid number', value);
            return String(value);
        }

        return num.toLocaleString('ru-RU', {
            maximumFractionDigits: 20,
            useGrouping: true
        }).replace(/,/g, ' ');
    } catch (e) {
        console.error('formatNumberWithSpaces error:', e);
        return String(value);
    }
}

export default formatNumberWithSpaces