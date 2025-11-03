const username = document.getElementsByTagName(`input`)[0]
const password = document.getElementsByTagName(`input`)[1]
const enterBtn = document.getElementById(`enter`)
const enterBtnTxt = document.getElementById(`btnText`)
enterBtn.disabled = true

username.addEventListener(`change` , function(){
    console.log(`test`)
    if(username.value && password.value){
        enterBtnTxt.style.color = `rgb(74, 214, 74)`
        enterBtn.disabled = false
    }
})
password.addEventListener(`change` , function(){
    console.log(`test`)
    if(username.value && password.value){
        enterBtnTxt.style.color = `rgb(74, 214, 74)`
        enterBtn.disabled = false
    }
})

const spouts = document.getElementsByClassName(`spouts`)
const cofBtm = document.getElementsByClassName(`cupBottom`)[0]
const cofMid = document.getElementsByClassName(`cupMiddle`)[0]
const cofTop = document.getElementsByClassName(`cupTop`)[0]
function enter(){
    spouts[0].classList.add(`pourSpouts`)
    spouts[1].classList.add(`pourSpouts`)
    cofBtm.classList.add(`bottomFill`)
    cofMid.classList.add(`middleFill`)
    cofTop.classList.add(`topFill`)
    setTimeout(() => {
        window.open(`signedIn.html`, `_blank`)
    }, 10000);
    
}