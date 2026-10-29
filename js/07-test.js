"use strict"
/*

!!null;
!!"";
!!1;

B — false, false, true.
 */
console.log("1.1")
if (10){
    console.log("TRUE")
}

// false
//false 0 -0 0n "" null undefined NaN

// true
// [] {} "false"...

// !  true->false false->true

/*
[..."Lydia"];

A — ["L", "y", "d", "i", "a"].
 */

console.log("1.2")

const numbers=[1,2,3,4];
console.log([...numbers])//[1,2,3,4]
console.log([..."Lydia"]);//["L", "y", "d", "i", "a"]
console.log(..."12345");//["1", "2", "3", "4", "5"]
console.log([...["Anna","Vasya"]]);//["Anna","Vasya"]
console.log(...["Anna","Vasya"]);//Anna Vasya

/*
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise])
    .then(res => console.log(res));

    B — "two".
 */

// pending, fulfilled,rejected

//rase передает дальше только победителя гонки.
// не важно успех или отказ.
// в нашем случае раньше успех 2 промиса

/*
let person = { name: "Lydia" };

const members = [person];

person = null;

console.log(members);

D: [{name: "Lydia"}]
 */
console.log("1.5");

let a=10;
let b=a;
a = 20;
console.log(b);//10

let person = { name: "Lydia" };

const members=[person];

//   person ---->   {name: "Lydia"} <---- members[0]

person = null;

console.log(members); // [{name: "Lydia"}]

members[0].name="Anna";
console.log(members); //[{name: "Anna"}]

members[0]["name"]="Petya";
console.log(members); //[{name: "Petya"}]

const fildName="name";
members[0][fildName]="Vasya";
console.log(members); //[{name: "Vasya"}]

/*
const person = {
    name: "Lydia",
    age: 21
};

for (const item in person) {
    console.log(item);
}


B — "name", "age".
 */

console.log("1.5");

const person1 = {
    name: "Lydia",
    age: 21
};

for (const item in person1) {
    console.log(item);}// name age


for (const item in person1) {
    console.log(item,person1[item]);
}// name: Lydia age: 21

/*
console.log(3 + 4 + "5");
B — "75"
 */
console.log(""+3 + 4 + "5");//345


const a1 = {};
const b1 = { key: "b" };
const c1 = { key: "c" };

a1[b1] = 123;
a1[c1] = 456;

console.log(a1[b1]);
/*
B — 456.
 */
//
// a1["[object Object]"]=123;
// a["[object Object]"]=456;
// const c1 = { key: "c" };
// console.log(a1[c1]);








