const number = document.getElementById('numValue')
const button = document.getElementById('color-change')

let numCount = 0

function addNum()  {
    button.addEventListener('click', () => {
        numCount++
    })

    number.textContent = numCount
};