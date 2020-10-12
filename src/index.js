import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './Counter';

// declare a mutable variable called `count` and initialize it to 0
let count = 0;

// get the element that has [id="count"]
const countSpan = document.getElementById('count');


// get the element that has [id="increment"]
const incrementButton = document.getElementById('increment');

// get the element that has [id="decrement"]
const decrementButton = document.getElementById('decrement');


const updateCount = () => {
  countSpan.innerHTML = count;
}

// when the button is clicked, invoke a function that increments count
incrementButton.onclick = () => {
  count++
  // you'll need to do something else to update the count display
  updateCount();
}


decrementButton.onclick = () => {
  count--
  updateCount();

}


// updates the inner text immediately
countSpan.innerText = 42;


// React App

const reactAppDiv = document.getElementById('reactapp');

ReactDOM.render = document.getElementById('react-app') 


