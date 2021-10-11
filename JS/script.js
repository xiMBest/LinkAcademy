// 1 exercise +
function countTrue() {

    let z = 0;
    const a = [true, false, true, false, false, false, true, true];
    let len = a.length;

    for (let i = 0; i < len; i++) {
        if (a[i] === true){
            z++;
        }
    }
    alert(z);
}
// 1.1 exercise +
function countFalse() {
    let z = 0;
    const a = [true, false, true, false, false, false, true, true, false];

    for (let i of a) {
        if(i === false){
            z++;
        }
    }
    alert(z);
}
// 2 exercise +
function jazzify() {
    let a = ["G", "b", "C", "Dm"];
    let z = [];
    if (a != 0){
        for (let i of a){
        z.push(i+="7");
    }
    alert(z);
    }else{
        alert("Your arr is empty");
    }
    
}
// 3 exercise +
function sortDescending() {
    let x = "129420546";
    if (x>0) {
        let arr = Array.from(x);
    for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]<arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    alert(arr);
    }
    else {
        alert("Error your number negative")
    }
    
}
// 4 exercise +
function sortByLength() {
    let x = ["Leonardo", "Michelangelo", "Raphael", "Donatello"]; 
    for (let z of x){
        for(let i = 0; i < x.length - 1; i++) {
            if(x[i].length > x[i+1].length) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
    }
    }
    alert(x);
}
// 5 exercise +
function minMax() {
    let x = [12, 4, 6, 2, 51];
    for(let j=0;j<x.length;j++) {
        for(let i = 0; i < x.length; i++) {
            if(x[i]>x[i+1]) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
        }
    }
    alert("min = " + x[0] + ", Max = " + x[x.length - 1]);
}
// 6 exercise +
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
    alert(res);
}
// 7 exercise +
const calculator = {
    x: 5,
    y: 10,
    z: 0,
    add: function() {
        alert(this.z = this.x + this.y);
    },
    multiply: function() {
        alert(this.z = this.x * this.y);
    },
    devide: function() {
        alert(this.z = this.x / this.y);
    },
    subtruct: function() {
        alert(this.z = this.x - this.y);
    }
}
// 8 exercise +
function keysAndValues() {
    let x = { a: 2, c: 1, b: 3 };
    let resKeys = [];
    let resValues = [];
    for (let i in x) {
        resKeys.push(i);
    }
    for(let j=0;j<resKeys.length;j++) {
        for(let i = 0; i < resKeys.length; i++) {
            if(resKeys[i]>resKeys[i+1]) {
                let temp = resKeys[i];
                resKeys[i] = resKeys[i+1];
                resKeys[i+1] = temp;
            }
        }
    }
    for (let i of resKeys) {
        resValues.push(x[i]);
    }
    alert(resKeys + " " + resValues);
}
// 9 exercise +
const ascDesNone = {
    x: x = [3, 4, 6, 1, 5, 7],
    
    asc: function (){
        let xCopy = [];
        for (let i of x) {
            xCopy.push(i);
        }
        for(let j=0;j<xCopy.length;j++) {
        for(let i = 0; i < xCopy.length; i++) {
            if(xCopy[i]>xCopy[i+1]) {
                let temp = xCopy[i];
                xCopy[i] = xCopy[i+1];
                xCopy[i+1] = temp;
            }
        }
        
    }
    alert(xCopy);
    },
    des: function () {
        let xCopy = [];
        for (let i of x) {
            xCopy.push(i);
        }
        for(let j=0;j<xCopy.length;j++) {
        for(let i = 0; i < xCopy.length; i++) {
            if(xCopy[i]<xCopy[i+1]) {
                let temp = xCopy[i];
                xCopy[i] = xCopy[i+1];
                xCopy[i+1] = temp;
            }
        }
    }
    alert(xCopy);
    },
    none: function () {
        alert(x);
    }
}
// 10 exercise +
function sortIt() {
    let x = [[3], 4, [2], [5], 1, 6];
    for(let j=0;j<x.length;j++) {
        for(let i = 0; i < x.length; i++) {
            if(x[i]>x[i+1]) {
                let temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
            }
        }
}
alert(x);
console.log(x);
}
// 11 exercise *
function hasHiddenFee(){
    let x = ["$2", "$4", "$1", "$8"];
    let sumCheck = "$17";
    let totalSum = 0;
    let y = /\d+/g;
    for (let i of x) {
        let z = parseInt(i.match(y)[0], 10);
        totalSum+=z;
    }
    
    if (parseInt(sumCheck.match(y)[0], 10) > totalSum) {
        alert(true);
        return;
    }
    alert(false);
}

// 12 exercise *
function trace(){
    let x = [[7, 6, 3],[2, 3, 4],[3, 4, 5]];
    let y = [];
    let j = 0;
    let arr = [];
    let res = 0;
    let reducer = (0, 1);
    for (let j=0; j<x.length; j++) {
        y = x[j];
        arr.push(y[j]);
    }
    alert(arr.reduce());
}

//13 exercise +
function removeSpecialCharacters() {
    let x = "%fd76$fd(-)6GvKlO.";
    let y = /[^.,!,@,#,$,%,^,&,\,*,(,)]/g;
    let res = x.match(y).join("");
    alert(res);
}
//14 exercise
function mathExpr(x) {
    let y = /^\d+ *[+,\-,*,\/]{1} *\d+$/g;
    let res = x.match(y)?.length === 1;
    return res;
}

//15 exercise
function pentagonal(n) {
    let res = (5 * Math.pow(n, 2) - 5 * n + 2)/2;
    return res;
}

//16 exercise
const tempConversion = {
    z: z = [1],
    kel: function (z) {
        res = z + 273,15;
        alert(z+ " cel = " + res + " kelvin" )
    },
    fah: function(z) {
        res = z * 9/5 + 32
        alert(z+ " cel = " + res + " Fahrenheit")
    }
}