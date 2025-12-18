// const ageCalc = function (birthYear) {
//   return 2025 - birthYear;
// }
// const birthYear = [1981,2008,2010,2013]
//
// for (let i = 0; i < birthYear.length; i++) {
//   console.log(ageCalc(birthYear[i]));
// }
//
// const namesMonths = ["january", "february", "March", "April", "May", "June", "July", "August"];
// const sliceNameMonths=namesMonths.slice(3,namesMonths.length);
// console.log(sliceNameMonths)
// console.log(namesMonths.pop())
// console.log(namesMonths)
///////////////////
//Challange
///////////////
const bill = [50,100,80,320,300]
const calcTip = function(bill){
  if(bill < 300 && bill >= 50){
    return bill*0.15;
  }
  else{
  return bill*0.2
  }
}
const tip = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
const billAddTips =[bill[0] + tip[0],bill[1]+tip[2],bill[2]+tip[2]];
console.log(`Your final Monthly bills are: ${billAddTips}`);