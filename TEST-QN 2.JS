var word="Angella";
var splitword=[];
checker();
function checker(){
	for (var i = 0; i < word.length; i++) {
		splitword[splitword.length]=word.charAt(i);
	}
	console.log(splitword);
	for (var i =0; i < splitword.length; i++) {
		for (var r = 0; r < splitword.length; r++) {
			
			if(splitword[i]==splitword[r] && i!=r){
				console.log("Non isogram");
				r=splitword.length;i=splitword.length;
			}
			else {
				if(i==(splitword.length-1)){
					console.log("Isogram");
				}
			}
		}
	}
}