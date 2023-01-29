/*let arr1 = ['1','3','5','7']

let arr2 = ['2','4','6','8','10']


function result(a,b) {
    let result = []

for (let i = 0; i < b.length; i++) {

    if (i >= a.length ||) {
        a[i] = 'missing value'
    }
        result.push(a[i],b[i])


}
    return result
}

//result(arr1,arr2)
console.log('Hello!' + result(arr1,arr2)
)



function isUnique(string) {


    for (let i = 0; i < string.length; i++){


        if (string.lastIndexOf(string[i]) !== i ) {
            return false
        }
    }
    return true


return new Set(string).size === string.length

}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false*/
/*
function myDisplayer(test) {
    console.log('test = ' + test) 
}
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();*/
/*
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango",];
let index = fruits.indexOf("Apple",9);

console.log(index)*/
/*
function unique(testString) {

    
    return Array.from(new Set(testString)).join('')
}

console.log(unique('abcdeabcde'))*/
/*
let arr1 = ['1','3','5','7','9','11']
let arr2 = ['2','4','6','8','10']

function addArray(arr1, arr2) {

    const result = []
    let j = arr1.length > arr2.length ? arr1.length : arr2.length

    for (let i = 0; i < j; i++) {

        if (arr1[i] === undefined ){
            arr1[i] = 'Missing value'
        }
        if (arr2[i] === undefined){
            arr2[i] = 'Missing value'
        }
        result.push(arr1[i],arr2[i])
    }   

    return result

}

console.log(addArray(arr1, arr2))*/

/*
let arr = [[1],2,[[[3]]]]

function fixArray(arr){
    const result = []

    for (let i = 0; i<arr.length; i++){

        if (Array.isArray(arr[i])){
            const recurcedCall = fixArray(arr[i])

            for (let j=0;j<recurcedCall.length;j++){
                result.push(recurcedCall[j])
            }




        } else {
            result.push(arr[i])

        }

    }
    return result
}


console.log(fixArray(arr))*/
/*
function removeDupes(str) {

    return (Array.from(new Set(str))).join('')
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'*/

/*
function highestFrequency(array) {
    const map = {}
    let maxFreq = 0
    let maxFreqStr = array[0]
  
    for (let i = 0; i < array.length; i++) {
      const current = array[i]
      console.log('---map[current] = ' + map)
  
      if (map[current]) {
        map[current]++
      } else {
        map[current] = 1
      }
  
      if (map[current] > maxFreq) {
        maxFreq = map[current]
        maxFreqStr = current
      }
    }
  
    return maxFreqStr
  }

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c

console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
*/
/*
const array1 = [1,1,1,1]

let array2 = array1.map(x => x+2)

console.log(array2)*/
/*
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();

  async function f2() {
    var y = await 20;
    console.log(y); // 20
  }
  f2();


  async function f3() {
    try {
      var z = await Promise.reject(30);
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();


*/
let b = test()

console.log('1')

function test() {
    console.log('3')
    return console.log('2')
}
console.log('4')

setTimeout(test,2000)

