// const cars=["bmw","volvo","saab","ford","fiat","audi"];
// let text="";
// for (let i = 0; i < cars.length; i++ ){
// text+=cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML=text;


const arr=[ 15,53,22,198,10,28,16,70,33,951 ];
const odds = arr.filter( number => {
    return number % 2!==0;
});
document.write(odds);


// function display(x,func){
//     var message=func(x);
//     document.write(message);
// }
// function welcomeMessage(salary){
//     if(salary<500)
//     return "დაბალი ხელფასი";
//     else if(salary<=1000)
//     return "საშუალო ხელფასი";
//     else(salary>1000)
//     return "მაღალი ხელფასი"
// }

// display(1500,welcomeMessage)
