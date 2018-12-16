var greeting1 = "What is the temperature?";
var tempFahr = prompt(greeting1, "temperature in degrees");

var greeting2 = "What type of event are you attending?";
var eventType = prompt(greeting2, "casual, semi-formal, or formal");





if (eventType==="casual") {
    var result2 = "something comfy";
}
if (eventType==="semi-formal") {
    var result2 = "a polo";
}
if (eventType==="formal") {
    var result2 = ("a suit");
}




if (tempFahr<54) {
    var result1 = "a coat";
}
else if ((tempFahr>54) && (tempFahr<70)) {
    var result1 = "a jacket";
}
else if (tempFahr>70) {
    var result1 = "no jacket";
}

var result = ("Since it is " + tempFahr  + " degrees and you are going to a " + eventType + " event, you should wear " + result2 + " and " + result1 + ".");



// alert("Since it is " + greeting1  + " degrees and you are going to a " + greeting2 + " event, you should wear " + result2 + " and " + result1 + ".");
