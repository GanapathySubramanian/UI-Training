var num=400;
var x=0;
let sum=0;
while(num>0){
   x=num%10;
   num=Math.floor(num/10);
   sum+=fact(x)
   
}

let result=0;
if(sum%9==0){
    result=9;
}else{

    result=Math.floor(sum%9);
}

console.log(result)
function fact(num){
    let ans=1
    for(let i=1;i<=num;i++){
        ans=ans*i
    }
    return ans;
}