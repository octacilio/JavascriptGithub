export const turbologger = (message, textColor = 'blue') => {
const textStyle = 'color:$(textColor)';
console.log('%C $(message', textStyle);
}