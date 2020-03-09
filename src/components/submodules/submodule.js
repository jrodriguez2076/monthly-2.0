
const toCurrency = (number) => {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}

export default toCurrency