$(document).ready(function(){
  $('.sidenav').sidenav();

//=======[ EXTERIOR VARIABLES]=======//
  let receipt = document.getElementById("receipt")
  let subtotal = document.getElementById("subtotal")
  let tax = document.getElementById("tax")
  let total = document.getElementById("total")
  let prevSubtotal
  let prevTax
  let prevTotal
  //==================================//

//=========[ ORDER Burger ]=========//
  $('#order-burger').click(function () {
    let newRow = document.createElement("tr")
    let newBurger = document.createElement("td")
    let newBurgerPrice = document.createElement("td")
    newRow.appendChild(newBurger)
    newRow.appendChild(newBurgerPrice)
    newBurgerPrice.innerText = "$8.99"
    newBurger.innerText = "Royale with Cheese"
    receipt.appendChild(newRow)
    M.toast({html: 'Royale with Cheese added to cart!'})

    prevSubtotal = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    subtotal.innerText = "$" + Number(prevSubtotal + 8.99).toFixed(2)

    prevTax = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    tax.innerText = "$" + Number(prevTax*0.0765).toFixed(2)

    prevTotal = (Number(subtotal.innerText.slice(1, subtotal.innerText.length-1)) + Number(tax.innerText.slice(1, tax.innerText.length-1))).toFixed(2)
    total.innerText = "$" + prevTotal
  })
//==================================//

//=========[ ORDER Ribs ]=========//
  $('#order-ribs').click(function () {
    let newRow = document.createElement("tr")
    let newRibs = document.createElement("td")
    let newRibsPrice = document.createElement("td")
    newRow.appendChild(newRibs)
    newRow.appendChild(newRibsPrice)
    newRibsPrice.innerText = "$14.99"
    newRibs.innerText = "Smoked Swine"
    receipt.appendChild(newRow)
    M.toast({html: 'Smoked Swine added to cart!'})

    prevSubtotal = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    subtotal.innerText = "$" + Number(prevSubtotal + 14.99).toFixed(2)

    prevTax = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    tax.innerText = "$" + Number(prevTax*0.0765).toFixed(2)

    prevTotal = (Number(subtotal.innerText.slice(1, subtotal.innerText.length-1)) + Number(tax.innerText.slice(1, tax.innerText.length-1))).toFixed(2)
    total.innerText = "$" + prevTotal
  })
//==================================//

//=========[ ORDER Pizza ]=========//
  $('#order-pizza').click(function () {
    let newRow = document.createElement("tr")
    let newPizza = document.createElement("td")
    let newPizzaPrice = document.createElement("td")
    newRow.appendChild(newPizza)
    newRow.appendChild(newPizzaPrice)
    newPizzaPrice.innerText = "$11.99"
    newPizza.innerText = "Arugula Pie"
    receipt.appendChild(newRow)
    M.toast({html: 'Arugula Pie added to cart!'})

    prevSubtotal = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    subtotal.innerText = "$" + Number(prevSubtotal + 11.99).toFixed(2)

    prevTax = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    tax.innerText = "$" + Number(prevTax*0.0765).toFixed(2)

    prevTotal = (Number(subtotal.innerText.slice(1, subtotal.innerText.length-1)) + Number(tax.innerText.slice(1, tax.innerText.length-1))).toFixed(2)
    total.innerText = "$" + prevTotal
  })
//==================================//

//=========[ ORDER Ice Cream ]=========//
  $('#order-icecream').click(function () {
    let newRow = document.createElement("tr")
    let newIceCream = document.createElement("td")
    let newIceCreamPrice = document.createElement("td")
    newRow.appendChild(newIceCream)
    newRow.appendChild(newIceCreamPrice)
    newIceCreamPrice.innerText = "$7.99"
    newIceCream.innerText = "Ice Cream Biscuit"
    receipt.appendChild(newRow)
    M.toast({html: 'Ice Cream Biscuit added to cart!'})

    prevSubtotal = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    subtotal.innerText = "$" + Number(prevSubtotal + 7.99).toFixed(2)

    prevTax = Number(subtotal.innerText.slice(1, subtotal.innerText.length-1))
    tax.innerText = "$" + Number(prevTax*0.0765).toFixed(2)

    prevTotal = (Number(subtotal.innerText.slice(1, subtotal.innerText.length-1)) + Number(tax.innerText.slice(1, tax.innerText.length-1))).toFixed(2)
    total.innerText = "$" + prevTotal
  })
//==================================//

//=========[ SUBMIT BUTTON ]========//
  let name = document.getElementById("icon_prefix")
  let phone = document.getElementById("icon_telephone")
  let address = document.getElementById("icon_business")
  $("#submit").click(function () {
    if (!name.value) {
    M.toast({html: 'Please enter your full name!'})
    }
    if (!phone.value) {
    M.toast({html: 'Please enter your phone number!'})
    }
    if (!address.value) {
    M.toast({html: 'Please enter your address!'})
    }
    if (!total.innerText) {
    M.toast({html: 'Oops!  You have not selected any food.'})
    }
    if (name.value && phone.value && address.value && total.innerText) {
      M.toast({html: 'Thank you, ' + name.value + '!  Your order has been placed!'})
    }
  })
//==================================//

}); //======================[ END DOCUMENT READY ]
