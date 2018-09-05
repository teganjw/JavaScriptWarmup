function isOldEnoughToVote(age) {
    if(age>=18){
        return true;
    }
    return false;
}

//"getProperty" returns the value of the property at the given key
function getProperty(obj, key) {
    return obj.key
}

//"addProperty" sets a new property on the given object with a value of true
function addProperty(obj, key) {
    obj[key] = true;
    return obj;
}

//"removeProperty" removes the given key from the given object.
function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}

function isEven(num) {
    if(num%2==0){
        return true;
    }
    return false;
}

function isOdd(num) {
    if(num%2==0){
        return false;
    }
    return true;
}

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    var array = str.split(" ");
    if(str.length == 0){
        return [];
    }
    return array;
}

function extend(obj1, obj2) {
    for (var key in obj2) {
        if (obj1[key]) {
            obj1[key];
        } else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] == "string"){
            delete obj[key];
        }
    }
}

function getIndexOf(char, str) {
    for(var i=0; i<str.length; i++){
        if(str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var newArr = [];
    for(var i=0; i<array.length; i++){
        if(array[i] == keeper){
            newArr.push(keeper);
        }
    }
    return newArr;
}

function getLargestElementAtProperty(obj, key) {
    var greatest = 0;
    if(Array.isArray(obj[key])){
        for ( var prop in obj[key] ) {
            if ( obj[key][prop] > greatest ) {
                greatest = obj[key][prop];
            }
        }
    }
    if(greatest>0){
        return greatest;
    }
    return undefined;
}

function calculateBillTotal(preTaxAndTipAmount) {
    var amount = preTaxAndTipAmount;
    var tip = preTaxAndTipAmount*.15
    var tax = preTaxAndTipAmount*.095
    amount+=(tip+tax);
    return amount;
}

function sumDigits(num) {
    var n = num.toString();
    var sum=0;
    var starting=0;
    if(n[0]=="-"){
        sum-= Number(n[1]);
        starting=2;
    }
    for(var i=starting; i<n.length; i++){
        sum+= Number(n[i]);
    }
    return sum;
}

function listAllValues(obj) {
    var array = [];
    for(var key in obj){
        array.push(obj[key]);
    }
    return array;
}

function detectOutlierValue(string){
    string = string.split(' ').map(Number)
    var even = string.filter(e => e%2 === 0);
    var odd = string.filter(e => e%2 !== 0);
    if(even.length > odd.length){
        return string.indexOf(odd[0])+1;
    } else {
        return string.indexOf(even[0])+1;
    }
}

function search(array, value) {

    var maxIndex = array.length - 1;
    var minIndex = 0;

    for (var i = 0; i < array.length; i++){
        var guess = Math.floor((maxIndex + minIndex)/2);

        if(array[guess] === value){
            return guess;

        }else if(array[guess] > value){
            maxIndex = guess;

        }else if(array[guess] < value){
            minIndex = guess;

        }
    }

    return null;

}



