const cars=["bmw","volvo","saab","ford","fiat","audi"];
let text="";
for (let i = 0; i < cars.length; i++ ){
text+=cars[i] + "<br>";
}
document.getElementById("demo").innerHTML=text;