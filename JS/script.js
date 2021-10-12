// 1 exercise + +
function countTrue(a) {
    let z = 0;
    let len = a.length;
    for (let i = 0; i < len; i++) {
        if (a[i] === true){
            z++;
        }
    }
    return z;
}
// 1.1 exercise + +
function countFalse(a) {
    let z = 0;
    for (let i of a) {
        if(i === false){
            z++;
        }
    }
    return z;
}
// 2 exercise + *
function jazzify() {
    
    let z = [];
    if (a != 0){
        for (let i of a){
        z.push(i+="7");
    }
    return z;
    }else{
        return "Your arr is empty";
    }
    
}
// 3 exercise + +
function sortDescending(x) {
    let intToArr = num =>Number(num);
    let intArr = Array.from(String(x), intToArr);
    let arrInt=intArr.sort().reverse();
    const res = Number(arrInt.join(''));
    return res;
}
// 4 exercise + +
function sortByLength() {
    let x = ['Leonardo', 'Michelangelo', 'Raphael', 'Donatello'];
    for (let z of x){
        for(let i = 0; i < x.length - 1; i++) {
            if(x[i].length > x[i+1].length) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
    }
    }
    return x;
}
// 5 exercise + +
function minMax(x) {
    for(let j=0;j<x.length;j++) {
        for(let i = 0; i < x.length; i++) {
            if(x[i]>x[i+1]) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
        }
    }
    let res = ([x[0], x[x.length - 1]]);
    return res;
}
// 6 exercise + +
function findLargestNums() {
    let x = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    let res = [];

    for (let i of x) {
        let max = i[0];
        for (let a of i) {
            if (a > max) {
                max = a;
            }
        }
        res.push(max);
    }
    return res;
}
// 7 exercise + +
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get add() {
        return this.a + this.b;
    }
    get multiply() {
        return this.a * this.b;
    }
    get divide() {
        return this.a / this.b;
    }
    get subtract() {
        return this.a - this.b;
    }
}
// 8 exercise + +
function keysAndValues(data){
    let keys = Object.keys(data),
        values = keys.map(function (key) {
            return data[key];
        });
    return [keys, values];
}
// 9 exercise + +
class AscDesNone {
    constructor(x) {
        this.x = x;
    }
    get asc(){
        let xCopy = this.x.sort();
    return xCopy;
    }
    get des(){
        let xCopy = this.x.sort().reverse();
    return xCopy;
    }
    get none() {
        return this.x;
    }
}
// 10 exercise + +
function sortIt(x) {
    return x = x.sort();
}
// 11 exercise + +
function hasHiddenFee(x, sumCheck){
    let totalSum = 0;
    let y = /\d+/g;
    for (let i of x) {
        let z = parseInt(i.match(y)[0], 10);
        totalSum+=z;
        console.log(totalSum);
    }
    if (parseInt(sumCheck.match(y)[0], 10) > totalSum) {
        return true;
    }
    return false;
}
// 12 exercise * +
function trace(x){
    let y = [];
    let sum = 0;
    let arr = [];
    for (let j=0; j<x.length; j++) {
        y = x[j];
        arr.push(y[j]);
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//13 exercise + +
function removeSpecialCharacters(x) {
    let y = /[^.,!,@,#,$,%,^,&,\,*,(,)]/g;
    let res = x.match(y).join("");
    return res;
}
//14 exercise + +
function mathExpr(x) {
    let y = /^-*\d+ *[+,\-,*,\/,%]{1} *-*\d+$/g;
    let res = x.match(y)?.length === 1;
    return res;
}
//15 exercise ++
function pentagonal(n) {
    let res = (5 * Math.pow(n, 2) - 5 * n + 2)/2;
    return res;
}
//16 exercise+ +
class TempConversion{
    constructor(z){
        this.z = z;
    }
    get tempConversion() {
        let kel = this.z + 273.15;
        let fah = this.z * 9/5 + 32;
        return [fah, kel ];
    }
}
//17 exercise + +
function missingLetter(str) {
    let i, j = 0, m = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;
}