const calculatePerimiter = (width, height) => {
    return width + width + height + height
}
console.log(calculatePerimiter(2,1));

const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(area);

}

calculateArea(2)

const calculateCircumference = (radius) => {
    return 2 * Math.PI * radius
}
console.log(calculateCircumference(5))