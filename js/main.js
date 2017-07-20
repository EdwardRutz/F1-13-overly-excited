console.log("main.js");

/*** VARIABLES ***/
let wordUp = "";
let text1 = "";

/*** FUNCTIONS & ARRAYS ***/

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

	console.log("how many words in the sentence array?", sentence.length);

//The addExcitement function accepting array
function addExcitement (theWordArray) {
	for (let i = 0; i < theWordArray.length; i++){
	wordUp += " " + theWordArray[i];
	 if ((i+1) % 3 === 0) {wordUp = wordUp + "!"} // Adds "!" to every third word.

	console.log(wordUp);
	document.write(`<br>`, wordUp);

	}


//Output to index.html
	document.write("<br/>The sentence to increment is: ", sentence);
	document.write("<br/>The number of words in the sentence are: ", sentence.length);
}	

//Invoke the function and pass in the array
addExcitement(sentence);




