console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//defining the basket array
let basket = [];
//addItem function
function addItem(item, basket){
    basket.push('shoes');
   console.log(true); return true;
}
addItem('shoes',basket);

console.log(basket);

//listItems function
function listItems(){
  for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
  }
}
listItems();

//empty function
function empty(){
basket.length = 0;
}
empty();
console.log(basket);


