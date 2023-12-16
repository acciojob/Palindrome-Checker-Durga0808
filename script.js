// complete the given function

function palindrome(str){
let check=str.toLowerCase();
	var start=0;var end=check.length-1;
	while(start<end){
		if(check.charAt(start)!==check.charAt(end)){
			return false;
		}else{
			start++;
			end--;
		}
	}
	return true;
	
}
module.exports = palindrome
