function program(){
let passInput = document.getElementById("pass");
var password ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var doc1 = document.getElementById("check1");

if(doc1.checked == false){
    password = password.replace(/[0-9]/g,"");

}else{
    password = password;
}
var ArrayPassword = Array.from(password);
var Genrate = "";
range = ()=> {return document.getElementById("range").value};
len = range();
for(var i=0;i<=len;i++){
    NumberRandom = Math.floor(Math.random() * password.length);
    Genrate += password.substring(NumberRandom , NumberRandom +1)

}
passInput.value = Genrate;

}
var Execute = ()=> document.getElementById("value").innerHTML = document.getElementById("range").value;
btn = document.getElementById("btn").addEventListener("click",function(){
     program()
});



