/* let allows of it to be reassigned in contrast to const 

let foo = 'foo';
foo = 'bar';

booleans 
const isLoaded = undefined;
console.log(!!isLoaded);


Number 
const number = 3;
console.log(number);

const sym = Symbol.for('asdfa');
console.log(sym);

const largeNumber = BigInt(123232323232);

const foo =  'foo';

console.log(typeof foo);


Objects - container with keys/ keys that are strings 

const o = {
  whats: {
    my: {
      secret: 'asfasdf'
    }
  }

};
console.log(o);

const o = {
  whats: {
    my: {
      secret: 'asfasdf'
    }
  }

};
console.log(o);
*/

const o = {
  hello: 'world'
};
const n = {...o};

o.hello = 'goodbye';

console.log(n);
console.log(o);

/* Arrays */

const arr = [1, 'two', {three: 'three'}];
const arrCopy = [...arr];
arr[0] = "asdfasdfasdfasdf"
console.log(arr);

console.log(arr[0]);


/* Functions are the building blocks of programming. Functions are considered like objects similar to first class ppl. :-) */

function add (a,b) {

}

const add = (a,b) => {
  console.log(this);
  const sum = a + b;
  return sum;
}
add();

const identity  = (str) => str;
const scream = (fn,str) => {
  console.log(fn(sttr)).toUpperCase();

}
scream(identity), 'asdf';