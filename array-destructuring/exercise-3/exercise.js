let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
]

function reciptForOrder(array){
  console.log(`Quantity  Item  Total`)
  let total = 0
  array.forEach((item)=>{
    let {itemName, quantity, unitPrice} = item
    console.log(itemName, quantity, (unitPrice*quantity).toFixed(2))
    total = total + (unitPrice*quantity)
  })
  console.log(`Total: ${total}`)
}

reciptForOrder(order)
