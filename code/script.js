const jsEye = document.getElementById("js-eye");
const balanceAmount = document.querySelector('.balance-amount');
const amount = document.querySelector('.amount');
const amountkobo = document.querySelector('.amount-kobo');
const addActions = document.querySelector('.add-actions')
const addMoney = document.querySelector('.add-money');

jsEye.addEventListener('click', () => {

    if(amount.innerHTML === "****" && amountkobo.innerHTML === ""){
        amount.textContent = "N869,435";
        amountkobo.textContent = ".40"
    } else if(amount.innerHTML === "N869,435" && amountkobo.innerHTML === ".40"){
        amount.textContent = "****"
        amountkobo.textContent = ""
        amount.style.fontSize = '33px'
    }

})
const landingPage = document.querySelector('.landing-page');
addActions.addEventListener('click', () => {
    if(addMoney.classList.contains('none')){
        addMoney.classList.remove('none');
        landingPage.classList.add('landing-none')
    }
})
const headingArrow = document.getElementById('heading-arrow')
headingArrow.addEventListener('click', () => {
    addMoney.classList.add('none');
    landingPage.classList.remove('landing-none')
})
