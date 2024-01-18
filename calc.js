
function limparCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}

function calcTotal() {
  var itemTotal = 0;
  var discountPercentage = parseFloat(document.getElementById("discount").value) || 0;
  var items = document.getElementsByTagName("input");

  for (var i = 0; i < items.length; i++) {
    if (items[i].type === "checkbox" && items[i].checked) {
      itemTotal += parseFloat(items[i].value);
    }
  }

  var discountAmount = (itemTotal * discountPercentage) / 100;
  itemTotal -= discountAmount;

  document.getElementById("total").innerHTML = "Total:  $" + itemTotal.toFixed(2)/1000 + "k";
}

document.addEventListener("DOMContentLoaded", function () {
  var calcButton = document.getElementById("calcButton");

  if (calcButton) {
    calcButton.addEventListener("click", calcTotal, false);
  }

  var limparCheckboxesButton = document.getElementById("limparCheckboxes");
  if (limparCheckboxesButton) {
    limparCheckboxesButton.addEventListener("click", limparCheckboxes, false);
  }
});

