//add values of selected to check boxes and display totals
function calcTotal() {
  var itemTotal = 0;
 var discountPercentage = parseFloat(document.getElementById("discount").value) || 0; // Obtém o valor do desconto em porcentagem, padrão é 0 se não fornecido
  var items = document.getElementsByTagName("input");
  //js variable items for all HTML elements w the input tag

  for (var i = 0; i < 43; i++) {
    if (items[i].checked) {
      //if the item is checked
      itemTotal += items[i].value * 1/1000; //then item total is updated to the previous total + value of checked item. Mutplied by 1 so that JS knows that it is a num
    }
   
  // Calcula o desconto em dólares com base na porcentagem
      var discountAmount = (itemTotal * discountPercentage) / 100;

      // Subtrai o desconto do total
      itemTotal -= discountAmount;
    
    document.getElementById("total").innerHTML =
      "Total:  $" + itemTotal + "k";
    //inner HTML fills in the space between the opening and closing <p> tags with the total
  }
}

//backwards compatibility for event listener submit button
var calcButton = document.getElementById("calcButton"); //sButton HTML element is assign JS value of submitButton
if (calcButton.addEventListener) {
  //now you can add event listener
  calcButton.addEventListener("click", calcTotal, false); //event is click, action is calctotal, false for bwc
} else if (calcButton.attachEvent) {
  calcButton.attachEvent("onclick", calcTotal);
}
