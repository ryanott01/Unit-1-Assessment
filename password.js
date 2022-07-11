  
var password = `Testtesttest`;




var passArr = password.split('');
//Cap check
console.log(passArr)
for (let i = 0; i < passArr.length; i++){
   if (passArr[i] === passArr[i].toUpperCase()){
    Uppercase = true; i = 100}
else {Uppercase = false};
}

//length check
if (passArr.length >= 10){
    passlength = true}
    else {passlength = false};




if (Uppercase && passlength){
    console.log("This Password Works")
}
else {console.log("this Password does not work")

};

