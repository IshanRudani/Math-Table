/*JavaScript - Function to Display Table of an entered Number.*/

function printTable(){
    
    var num;
    num=Number(document.getElementById('inputNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('numPrint');
        pTag.innerHTML += num + " X " + i + " = " + (num*i) + "<br/>";

    }
}

function clearBox()
{
    document.getElementById('numPrint').innerHTML = "";
}

for(var i=1; i<=10; i++){
    var a = console.log(i);
}
