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