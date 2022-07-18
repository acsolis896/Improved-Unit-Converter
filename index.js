/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unitInput = []


let inputText = document.getElementById("input-text")
let convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    unitInput.push(inputText.value)
    // console.log(unitInput)
    // console.log(conversion(unitInput, "meters", "feet", 10, 20))
    const lengthMeter = unitInput*3.281
    const lengthFeet = unitInput/3.281
    const volumeLiter = unitInput*0.264
    const volumeGallon = unitInput/0.264
    const massKilo = unitInput*2.204
    const massPound = unitInput/2.204
    

    lengthEl.innerHTML = conversion(unitInput, "meters", "feet", lengthMeter, lengthFeet)
    volumeEl.innerHTML = conversion(unitInput, "liters", "gallons", volumeLiter, volumeGallon)
    massEl.innerHTML = conversion(unitInput, "kilos", "pounds", massKilo, massPound)
    
    inputText.value = ""
    unitInput.pop()
})

function conversion(inputValue, unit1, unit2, result1, result2) {
    let baseString = `${inputValue} ${unit1} = ${result1.toFixed(3)} ${unit2} | ${inputValue} ${unit2} = ${result2.toFixed(3)} ${unit1}`
    return baseString
}

