// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
function UniqueString() {
  // let obj = {}
  // for(let i=0;i<strings.length;i++){
  //  if( obj[strings[i]]==undefined){
  //   obj[strings[i]] = 1
  //  }else{
  //   obj[strings[i]]++
  //  }
  // }
  // return obj
  
  let ans = strings.reduce((a,el,i)=>{
     if(a[el]==undefined){
      a[el]=1
     }else{
      a[el]++
     }
     return a
  },{})

  return ans
}
console.log(UniqueString(strings));

// qn :2

function ProductOfMultipleOfThreeOrFive() {}
// console.log(ProductOfMultipleOfThreeOrFive(numbers1));

// filter method Qn:1\

function palindromesString() {}
// console.log(palindromesString(words))

// filter method Qn:2

function findImage() {}
// console.log(findImage(filePaths))

// map method Qn:1

function swapStrings() {}
// console.log(swapStrings(strings1));

// foreach method Qn:1
function countWords() {}
// countWords(sentences)

// combination method Qn:1
function sumOfSquaresOfOddNumbers() {}
// console.log(sumOfSquaresOfOddNumbers(numbers));

// combination method Qn:2
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
function massageArray() {}
// console.log(massageArray(exampleInputArray));


// Implementation methods ps Qn:6

function ImplementationPS6() {}
// console.log(ImplementationPS6(students));

// Implementation methods ps Qn:7

function ImplementationPS7() {}
// console.log(ImplementationPS7(allStudentsMarksData));


// Implementation methods ps Qn:9

function ImplementationPS9(voters) {}
// console.log(ImplementationPS9(voters));

// Implementation methods ps Qn:10
function ImplementationPS10(data) {}
// console.log(ImplementationPS10(data));

// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
