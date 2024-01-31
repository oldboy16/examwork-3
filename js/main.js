//1

function generateArray(n) {
    let array = [1, 1];
    
    for (let i = 2; i < n; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    return array;
  }
  let n = 4;
  let result = generateArray(n);
  console.log(result);


//2
function fn(k){
    let erre = [1,1]
    for(let i = 2; i<k; i++){
        erre[i] = erre[i-1] + erre[i-2]
    }
    return erre
}
let k = 6
let natija = fn(k)
console.log(natija);

//3

function fnAdd(num){
    let arre = [1,1]
    for(let i = 2; i<num; i++){
        arre[i] = arre[i-1] + arre[i-2]
    }
    return arre
}
let num = 5
let d = fnAdd(num)
console.log(d);