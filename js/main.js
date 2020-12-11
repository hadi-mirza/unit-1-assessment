let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let input1 = document.getElementById("input1")
let span1 = document.getElementById("span1")

let count = 0


btn1.addEventListener("click", add)
btn2.addEventListener("click", subtract)
btn3.addEventListener("click", reset)

function add() {
    count += input1.valueAsNumber
    span1.innerHTML = count
    if (count < 0) {
        span1.style.color = 'red'
    } else {
        span1.style.color = "black"
    }
}

function subtract() {
    count -= input1.valueAsNumber
    span1.innerHTML = count
    if (count < 0) {
        span1.style.color = "red"
    } else {
        span1.style.color = "black"
    }
}

function reset() {
    count = 0
    span1.innerHTML = count
    input1.valueAsNumber = 1
    span1.style.color = "black"
}