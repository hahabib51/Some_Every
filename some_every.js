const mySome = function some(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return true;
      }
    }
    return false;
  }

const myEvery = function every(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === false){
        return false;
      }
    }
    return true;
  }



let num = [1,2,2,3,3,3,4,4,4,4];
function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0;
    });
}


 let num = [31132101320123201320];
function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
    });
}


let num = [1,3,5,7,9];
function hasOnlyOddNumbers(arr) {
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}


let num = [1,2,3,4,5];
function hasNoDuplicates(arr) {
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}


let certainKey = [ { first: "Elie", last: "Schoppik" },
{ first: "Tim", last: "Garcia", isCatOwner: true },
{ first: "Matt", last: "Lane" },
{ first: "Colt", last: "Steele", isCatOwner: true }
];
function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val
    })
}

let certainValue = [
    { title: "Instructor", first: "Elie", last: "Schoppik" },
    { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
    { title: "Instructor", first: "Matt", last: "Lane" },
    { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
  ];
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return val[key] === searchValue;
    })
}
