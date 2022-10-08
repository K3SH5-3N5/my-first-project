var count = 0;
var integerZero = 0;
var stringZero = '0';
//object
var dog = {
    name: "Shiba",
    paws: 4,
    eyes: 2
}

function showMyHTMLDocument() {
    //const htmlDocument = document;
    //console.log(htmlDocument);
    document.body.getElementsByTagName('div')[0].innerHTML = "HTML is Shown";
}


function showMyDog() {
    //alert(`My Dog's name is ${dog.name}`);
    var message = `My Dog's name is ${dog.name}`;
    document.getElementById('dog-name').innerHTML = message;
}

function sayHello() {
    alert('Hello its my first jabascript codey');
}

function addCount() {
    count++;
    //alert(count);
    var message = `Add count ${count}`;
    document.getElementsByClassName('count')[0].innerHTML = message;
}


var stringVariable = 'It\'s cute';
var stringVariable = "It\'s \"cute\"";
var stringVariable = `It's "cute"`;

//== is true
//=== is false
function isZeroEqual() {
    const isZero = integerZero === stringZero;
    alert(`Integer Zero is equals to String Zero: ${isZero}`);
} 