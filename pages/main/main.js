const time = document.getElementById('time'),
	  date = document.getElementById('date');
 const courses = document.getElementById('headerCourse');
 const usdbuy = document.querySelector('.usdBuy');
 const eurbuy = document.querySelector('.eurBuy');
 const rubbuy = document.querySelector('.rubBuy');
 const plnbuy = document.querySelector('.plnBuy');
 const usdsell = document.querySelector('.usdSell');
 const eursell = document.querySelector('.eurSell');
 const rubsell = document.querySelector('.rubSell');
 const plnsell = document.querySelector('.plnSell');

 let kolDay = 0;
   

function showTime() {
  let today = new Date(),
   hour = today.getHours(),
   min = today.getMinutes(),
   sec = today.getSeconds();
  


   // Output Time
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

   setTimeout(showTime, 1000);
 }

function addZero(n) {
  return(parseInt(n, 10) < 10 ? '0' : '') + n;
 }

function showDate() {
  let arr2 = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  let todayDate = new Date (),
  datef = todayDate.getDate(),
  mouth = todayDate.getMonth();
  mouth = arr2[mouth];
  year = todayDate.getFullYear();
  date.innerHTML = `${datef}<span> </span>${mouth}<span> </span>${year}`;
  courses.innerHTML = `Курсы валют: ${datef}<span> </span>${mouth}<span> </span>${year}`;
}

function getDate() {
  const dayTime = 24 * 60 * 60 * 1000;
  kolDay++;
  let arr2 = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  var currentDate = new Date(new Date().getTime() + kolDay * dayTime );
var datef = currentDate.getDate();
var mouth = currentDate.getMonth();
var year = currentDate.getFullYear();
mouth =arr2[mouth];
date.innerHTML = `${datef}<span> </span>${mouth}<span> </span>${year}`;
  courses.innerHTML = `Курсы валют: ${datef}<span> </span>${mouth}<span> </span>${year}`;
   // получить случайное число от (min-0.5) до (max+0.5)
   const min = 1;
   const max = 2;
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand =  Math.round(rand);
   if(rand === 1){
  usdbuy.textContent = (Number(usdbuy.textContent) + Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } else {
  usdbuy.textContent = (Number(usdbuy.textContent) - Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } 
   if(rand === 1){
  eurbuy.textContent = (Number(eurbuy.textContent) + Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } else {
  eurbuy.textContent = (Number(eurbuy.textContent) - Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } 
   if(rand === 1){
  rubbuy.textContent = (Number(rubbuy.textContent) + Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } else {
  rubbuy.textContent = (Number(rubbuy.textContent) - Number(0.01  + Math.random() * ( 0.05 - 0.01))).toFixed(2);
   } 
   if(rand === 1){
  plnbuy.textContent = (Number(plnbuy.textContent) + Number(0.1  + Math.random() * ( 0.5 - 0.1))).toFixed(2);
   } else {
  plnbuy.textContent = (Number(plnbuy.textContent) - Number(0.1  + Math.random() * ( 0.5 - 0.1))).toFixed(2);
   } 
  usdsell.textContent = (Number(usdbuy.textContent) + (Number(usdbuy.textContent) * 0.05)).toFixed(2);
  eursell.textContent = (Number(eurbuy.textContent) + (Number(eurbuy.textContent) * 0.05)).toFixed(2);
  rubsell.textContent = (Number(rubbuy.textContent) + (Number(rubbuy.textContent) * 0.05)).toFixed(2);
  plnsell.textContent = (Number(plnbuy.textContent) + (Number(plnbuy.textContent) * 0.03)).toFixed(2);

  

} 
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', getDate);

function getCourse(){
  usdbuy.textContent = (2.7  + Math.random() * ( 2.9 - 2.7)).toFixed(2);
  eurbuy.textContent = (3.05 + Math.random() * ( 3.2 - 3.05)).toFixed(2);
  rubbuy.textContent = (2.95 + Math.random() * ( 3.05 - 2.95)).toFixed(2);
  plnbuy.textContent = (14.5 + Math.random() * ( 15.5 - 14.5)).toFixed(2);
  usdsell.textContent = (Number(usdbuy.textContent) + (Number(usdbuy.textContent) * 0.05)).toFixed(2);
  eursell.textContent = (Number(eurbuy.textContent) + (Number(eurbuy.textContent) * 0.05)).toFixed(2);
  rubsell.textContent = (Number(rubbuy.textContent) + (Number(rubbuy.textContent) * 0.05)).toFixed(2);
  plnsell.textContent = (Number(plnbuy.textContent) + (Number(plnbuy.textContent) * 0.05)).toFixed(2);
 }


function moneyConverter(valNum){

var card = document.getElementById("viborVal1").value;
var card2 = document.getElementById("viborVal2").value;
console.log(card);
console.log(card2);
  if(card === "BYN" && card2 === "USD"){
    document.getElementById("inpVal2").innerHTML = (valNum/Number(usdbuy.textContent)).toFixed(2);
  } 
  if(card === "BYN" && card2 === "EUR"){
    document.getElementById("inpVal2").innerHTML = (valNum/Number(eurbuy.textContent)).toFixed(2);
  } 
  if(card === "BYN" && card2 === "RUB"){
    document.getElementById("inpVal2").innerHTML = (valNum/Number(rubbuy.textContent)*100).toFixed(2);
  } 
  if(card === "BYN" && card2 === "PLN"){
    document.getElementById("inpVal2").innerHTML = (valNum/Number(plnbuy.textContent)*10).toFixed(2);
  } 
  if(card === "BYN" && card2 === "BYN"){
    document.getElementById("inpVal2").innerHTML = "Невыполнимая операция";
  } 

   if(card === "USD" && card2 === "BYN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(usdbuy.textContent)).toFixed(2);
  } 
  if(card === "USD" && card2 === "EUR"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(usdbuy.textContent)/Number(eurbuy.textContent)).toFixed(2);
  } 
  if(card === "USD" && card2 === "RUB"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(usdbuy.textContent)/Number(rubbuy.textContent)*100).toFixed(2);
  } 
  if(card === "USD" && card2 === "PLN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(usdbuy.textContent)/Number(plnbuy.textContent)*10).toFixed(2);
  } 
  if(card === "USD" && card2 === "USD"){
    document.getElementById("inpVal2").innerHTML = "Невыполнимая операция";
  } 

   if(card === "EUR" && card2 === "USD"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(eurbuy.textContent)/Number(usdbuy.textContent)).toFixed(2);
  } 
  if(card === "EUR" && card2 === "BYN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(eurbuy.textContent)).toFixed(2);
  } 
  if(card === "EUR" && card2 === "RUB"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(eurbuy.textContent)/Number(rubbuy.textContent)*100).toFixed(2);
  } 
  if(card === "EUR" && card2 === "PLN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(eurbuy.textContent)/Number(plnbuy.textContent)*10).toFixed(2);
  } 
  if(card === "EUR" && card2 === "EUR"){
    document.getElementById("inpVal2").innerHTML = "Невыполнимая операция";
  } 

   if(card === "RUB" && card2 === "USD"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(rubbuy.textContent)/100/Number(usdbuy.textContent)).toFixed(2);
  } 
  if(card === "RUB" && card2 === "EUR"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(rubbuy.textContent)/100/Number(eurbuy.textContent)).toFixed(2);
  } 
  if(card === "RUB" && card2 === "BYN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(rubbuy.textContent)/100).toFixed(2);
  } 
  if(card === "RUB" && card2 === "PLN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(rubbuy.textContent)/100/Number(plnbuy.textContent)*10).toFixed(2);
  } 
  if(card === "RUB" && card2 === "RUB"){
    document.getElementById("inpVal2").innerHTML = "Невыполнимая операция";
  } 

   if(card === "PLN" && card2 === "USD"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(plnbuy.textContent)/10/Number(usdbuy.textContent)).toFixed(2);
  } 
  if(card === "PLN" && card2 === "EUR"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(plnbuy.textContent)/10/Number(eurbuy.textContent)).toFixed(2);
  } 
  if(card === "PLN" && card2 === "RUB"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(plnbuy.textContent)/10/Number(rubbuy.textContent)*100).toFixed(2);
  } 
  if(card === "PLN" && card2 === "BYN"){
    document.getElementById("inpVal2").innerHTML = (valNum*Number(plnbuy.textContent)/10).toFixed(2);
  } 
  if(card === "PLN" && card2 === "PLN"){
    document.getElementById("inpVal2").innerHTML = "Невыполнимая операция";
  } 

}


 getCourse();
 showDate();
 showTime();