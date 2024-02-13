
export const convertNumberToReal = (number: number) => {
    return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export const calcNewPrice = (quantify: number | undefined, price: number | undefined) => {
    if (!quantify) {
        return
    }
    if (!price) {
        return
    }
    return convertNumberToReal(quantify * price)
}

