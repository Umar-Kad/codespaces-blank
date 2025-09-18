let Number = document.getElementById('numValue')
let button = document.getElementById('color-change')

let numCount = 0

function addNum() {
    button.addEventListener('click'); {
        numCount += 1
    }

    Number.textContent = numCount
}