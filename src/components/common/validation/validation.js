export const required = (value) => {
    if(value) return undefined 
    else return "error"
}

export const maxLengthCreating = (maxLength) => (value) => {
    if( value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}




