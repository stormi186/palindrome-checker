var checkButton = document.getElementById("check");

function isPalindrome(str) {
  var firstString = str.replace(/\W/g, '').toLowerCase();
  firstString = firstString.replace(/_/g, '');
  var strArray = firstString.split("");
  var secondString = (strArray.reverse()).join("").toLowerCase();
  if (firstString===secondString) 
    return true;
  else 
    return false;
}

checkButton.addEventListener("click", function() {
  var palindrome = document.getElementById("text").value;
  
  if(isPalindrome(palindrome))
    alert("Det er palindrom");
  else
    alert("Det er ikke palindrom");
});

