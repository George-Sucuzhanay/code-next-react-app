// get the element that has [id="count"]
const countSpan = document.getElementById('count');

// updates the inner text immediately
countSpan.innerText = 42;


// declare a mutable variable called `count` and initialize it to 0
let count = 0;

// get the element that has [id="increment"]
const incrementButton = document.getElementById('increment');

// when the button is clicked, invoke a function that increments count
incrementButton.onclick = () => {
  count++
  // you'll need to do something else to update the count display
}