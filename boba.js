let number = document.getElementById('numValue')
let button = document.getElementById('color-change')
let thumbimage = document.getElementById('thumb')
let thumbtext = document.getElementById('thumbWord')


let numCount = 0


button.addEventListener("click", () => {
    numCount += 1;
    number.textContent = numCount;
    if(numCount == 10) {
        document.body.style.backgroundColor = 'red'
        thumbimage.style.display = "block"
        thumbtext.style.display = "block"
};
});


