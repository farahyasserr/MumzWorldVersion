export const formatPrice = (value: number | undefined): string => {

    if (value === undefined) {
        return ''
    }
    else {
        // Round the value to the specified number of decimal places
        const roundedValue = value.toFixed(2);

        // Separate the integer part from the decimal part
        const parts = roundedValue.split('.');
        const integerPart = parts[0];

        // Add commas to separate thousands in the integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Combine the integer part with the formatted decimal part
        let formattedValue = formattedInteger;

        return formattedValue;
    }

}