
export const convertNumberToReal = (number: number) => {
    return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

