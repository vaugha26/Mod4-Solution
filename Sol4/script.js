

(function () {
  
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  console.log(names);

  var eachName = "";
for (var i = 0; i < names.length; i++) {

    firstLetter = names[i].charAt(0);
    var toUpperCase = firstLetter.toUpperCase();
    var toLowerCase = firstLetter.toLowerCase();
    eachName = "";

  if (toLowerCase =="j" || toUpperCase == "J") {
     byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
     
  }

}

})();