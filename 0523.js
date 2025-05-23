/* const myMap = new Map();
myMap.set('name','Alice');
myMap.set(1,'numberKey');
myMap.set(true, 'boolkey');

console.log(myMap.get('name')); // Alice 
console.log(myMap.get(1)); //numberKey
console.log(myMap.size);  //3



const mySet =new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('apple');

console.log(mySet.has('apple')); //true
console.log(mySet.size);  //2

 */


/* const add =(a,b)=>a+b;
console.log(add(2,3)); //5

const arr = [1,2,3];
const doubled = arr.map(x=> x*2);
console.log(doubled); // [2,4,6]

document.getElementById('btn').addEventListener('click',() => {
  alert('Clicked!'); 
});
 */



/* console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('에러 발생:', error)); */



/*   const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('성공!');
    },1000);
  });
  promise.then(result=> console.log(result));
 */

  /* const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      reject('에러발생!');
    },1000);
  });
  promise.catch(error=> console.log(error)); */


/*   function fetchData(){
    return new Promise(resolve => {
      setTimeout(() => resolve(10), 1000);
    });
  }

  fetchData()
    .then(data => data +5)
    .then(result => console.log(result)); */
/* 
    // 예시4 - promise.all
    const p1= new Promise(resolve=> setTimeout(() => resolve('1번 완료') , 1000));
    const p2= new Promise(resolve=> setTimeout(() => resolve('2번 완료') , 1500));
    const p3= new Promise(resolve=> setTimeout(() => resolve('3번 완료') , 500));

    Promise.all([p1,p2,p3])
      .then(results=>{
        console.log(results);
      })
      .catch(err=> console.log('에러발생:', err)); */


/* function delay(){
  return new Promise(resolve => setTimeout(()=>resolve('완료!'),10000));
}

async function start() {
  const result = await delay();
  console.log(result);
}

start(); */

/* function fail(){
  return new Promise((_, reject)=> setTimeout(()=>reject('에러1'),5000));
}

async function execute(){
  try{
    await fail();
  }catch(err) {
    console.log(err);
  }
}

execute(); */

/* function fetchUser(){
  return new Promise(resolve => setTimeout(()=> resolve('유저'),1000));
}

function fetchPosts(){
  return new Promise(resolve =>  setTimeout(()=> resolve('게시물'),1000));
}

async function loadPage(){
  const user = await fetchUser();
  const posts = await fetchPosts();
  console.log(user, posts);
} */

//콜백함수
/* function greet(name){
  console.log(`hello, ${name}`); 
}

function processUserInput(callback){
  const name = 'Alice';
  callback(name);
}
processUserInput(greet); */

//////////////////////////////////////
/* function calculate(a, b, opertation){
  return opertation(a,b);
}

function add(x,y){
  return x+y;
}

function subtract(x,y){
  return x-y;
}

console.log(calculate(5,3,add));
console.log(calculate(5,3,subtract)); */

/* var newArr = [10, 20, 30].map(function(currentValue, index){
  console.log(currentValue, index);
  return currentValue +5;
});

var wrongArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5; // undefined + 5 → NaN
});
console.log(newArr);
console.log(wrongArr); */

//클래스
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

const p1 = new Person("Alice", 30);
const p2 = new Person("Bob", 25);

p1.sayHello(); // "Hi, I am Alice, 30 years old."
p2.sayHello(); // "Hi, I am Bob, 25 years old." */


class Animal {
constructor(name) {
  this.name = name;
}

speak() {
  console.log(`${this.name} makes a sound.`);
}
}

class Dog extends Animal {
speak() {
  console.log(`${this.name} barks.`);
}
}

const dog = new Dog("Coco");
dog.speak(); // Coco barks.