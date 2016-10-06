//Variable declarations.
var alphabet = [];

//Fill alphabet array with the alphabet.
for(i=0; i<26; i++){
	alphabet[i] = String.fromCharCode(65 + i);
}

//Function to print out stacking alphabet letters to console
function stackLetters(theAlphabetArray){

	//Function variable declarations
	var alphabetString;
	var i;
	var counter;

	alphabetString = theAlphabetArray[0];
	
	for(i=1; i<(theAlphabetArray.length + 1); i++){
			counter = (i % 3);
			
			if(counter == 0){
				alphabetString += " ";
			} 
			
			console.log(alphabetString);
			alphabetString += theAlphabetArray[i];
	}
}

//Run stacking function
stackLetters(alphabet);