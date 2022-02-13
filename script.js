
IIFE function
let somthing =20 ;
(function(){
   somthing =10 ;
   console.log('hello IIFE function ');
   console.log(`the value of somthing in iife function ${somthing}`);
  return somthing  ;

})();


console.log(`the value of somthing outside iife function ${somthing}`);

ES-6 String method

let myName='yasin arfat';

console.log(myName.startsWith('y'))
console.log(myName.endsWith('arfat'))
console.log(myName.includes('y'))
if(myName.includes('y')){
  console.log(' the y is included in',myName)

}
myName.repeat(5)

desuturing data form obj

let somthing={
  name : 'arfat',
  age : 18,
  gander: "male"
}
let {name,age,gander}=somthing
console.warn(`hello ${name}`)
console.warn(`your age is ${age}`)
console.warn(`your gander is  ${gander}`)

let somthing=['arfat','khan ', 'valo',{
  name:'arfat'
}]

for(const item of somthing){
  console.warn(`item ${item}`);
}

using .map() method 

let somthing=[19,29,20,20,387,390.1009]

somthing.map((item)=>{
console.log(`the number is ${item}`)
})
 
somthing.findIndex(number => number ===29)
 
const findLipYear= ()=>{
  let tottalYear = {
    funcName :'find year',
    year :20,
    somFunc: ()=>{
      console.log(ttottalYear.year)
    }
  }
  
}
let func= findLipYear()
func.somFunc()

let mainFunc= ()=>{
  console.log('this is outer function ')

  let inner =()=>{
    console.log('this is inner function ')
  }
  inner()
}
 mainFunc() 

USING REST PERAMETER
let someFunc = (a,b,...c)=>{


 console.log(` ${a} ${b} ${c} `) ;
}

someFunc(10,198,19,732,128,'qWSDGI')

using default preamiter 

let someFunc =( a,c=10)=>{
   console.log(`the sum is ${a+c}`)
}

someFunc(12)

class Person{
  constructor(name,age,gander){
   this.name = name
   this.age = age 
   this.gander = gander 
  }
  whoami(){
    console.log(`your name is ${this.name} your age is ${this.age} and your gander ${this.gander}`)

  } 
} 
// new Person('arfat','17','male').whoami()

class Teacher extends Person {
  constructor(name,age,gander,whoami){
    super(name,age,gander)
  }
 
}

new Teacher('arfat',17,'male').whoami()