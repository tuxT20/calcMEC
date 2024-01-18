
function calcTotal() {
  var itemTotal = 0;
 var discountPercentage = parseFloat(document.getElementById("discount").value) || 0; // 
  var items = document.getElementsByTagName("input");


  for (var i = 0; i < 43; i++) {
    if (items[i].checked) {
      itemTotal += items[i].value * 1/1000;
    }
   
      var discountAmount = (itemTotal * discountPercentage) / 100;
      itemTotal -= discountAmount;
    
    document.getElementById("total").innerHTML =
      "Total:  $" + itemTotal + "k";
  }
}

var calcButton = document.getElementById("calcButton"); 
if (calcButton.addEventListener) {
  calcButton.addEventListener("click", calcTotal, false); 
} else if (calcButton.attachEvent) {
  calcButton.attachEvent("onclick", calcTotal);
}
