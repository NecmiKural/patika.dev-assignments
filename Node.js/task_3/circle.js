function circleArea(r) {
    let result = Math.PI * r * r;

    console.log(`Area of circle: ${result}`)
    return result
}

function circleCircumference(r) {
    let circumference = 2 * Math.PI * r
    console.log(`Circumference of circle: ${circumference}`)
    return circumference
}

module.exports = {
    circleArea,
    circleCircumference
}