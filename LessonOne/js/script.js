let num = '33721';
fo r(var i=1,acc=num[0]; i< num.length;i++){
  console.log(acc*=num[i]) 
}
console.log(acc=acc**3) 
console.log(acc.toString().substr(0,2)) 