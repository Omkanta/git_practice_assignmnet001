
    let number=15
    let flag="No";
    let factors=0;
    for(let i=1;i<=number;i++){
        if(number%i===0){
            factors++;
        }
    }
    if(factors==2){
        flag="Yes";
    }
    console.log(flag);