const initialPrice=document.querySelector('#initial-price');
const stocksQuantity=document.querySelector('#stocks-qty');
const currentPrice=document.querySelector('#current-price');
const inputButton=document.querySelector('#input-button');
const outputMessage=document.querySelector('#output-box');

function calculateProfitAndLoss(initial,quantity,current) {
    if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%.`);
    }
    else if(current>initial){
var profit=(current-initial)*quantity;
var profitPercentage=(profit/initial)*100;
showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%.`);

    }
    else {
showOutput('Calm Down You are at No Profit No Loss situation.');
    }


}
function showOutput(message) {
outputMessage.style.color='green';
    outputMessage.innerText=message;
}


function submitHandler() {
    var ini=initialPrice.value;
    var qty=stocksQuantity.value;
    var cur=currentPrice.value;
    if(ini&&qty&&cur){
    calculateProfitAndLoss(ini,qty,cur);
    }
    else {
        showOutput('Please enter all the fields.');
    }
}

inputButton.addEventListener('click', submitHandler)