var n=5;

var val=[9,9,9,1,2];

var sum=3;

var index="none";
for(let i=0;i<n-1;i++){
       if(val[i]+val[i+1]==sum){
            index=i+1;
       }
}

console.log(index);