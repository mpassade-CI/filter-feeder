/******************
 * YOUR CODE HERE *
 ******************/
const isOdd = function(num){
  return num%2===1
}
const onlyOdds = function(nums){
  return nums.filter(isOdd)
}
const isEven = function(num){
  return num%2===0
}
const onlyEvens = function(nums){
  return nums.filter(isEven)
}
const isShort = function(str){
  return str.length<7
}
const shortNamesOnly = function(names){
  return names.filter(isShort)
}
const isDName = function(str){
  return str.startsWith('D')
}
const dNames = function(names){
  return names.filter(isDName)
}
const containsLowercase = function(str){
  return str.toUpperCase()!==str
}
const removeTrolls = function(arr){
  return arr.filter(containsLowercase)
}
const isTriStateArea = function(str){
  return str.endsWith('NY')||str.endsWith('NJ')||str.endsWith('CT')
}
const triStateAreaOnly = function(arr){
  return arr.filter(isTriStateArea)
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
