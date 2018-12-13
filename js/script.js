var tempFahr = "What is the temperature?";
var greeting1 = prompt(tempFahr, "temperature in degrees");

var eventType = "What type of event are you attending?";
var greeting2 = prompt(eventType, "casual, semi-formal, or formal");

 




if (greeting2==="casual") {
    var result2 = "something comfy";
}
if (greeting2==="semi-formal") {
    var result2 = "a polo";
}
if (greeting2==="formal") {
    var result2 = ("a suit");
}




if (greeting1<54) {
    var result1 = "a coat";
}
else if ((greeting1>54) && (greeting1<70)) {
    var result1 = "a jacket";
}
else if (greeting1>70) {
    var result1 = "no jacket";
}


console.log("Since it is " + greeting1  + " degrees and you are going to a " + greeting2 + " event, you should wear " + result2 + " and " + result1 + ".");


// alert("Since it is " + greeting1  + " degrees and you are going to a " + greeting2 + " event, you should wear " + result2 + " and " + result1 + ".");
