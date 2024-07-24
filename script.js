const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    //console.log(counter);
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount=+counter.getAttribute('data-target');
        console.log(targetCount);
        //thses are strings basically 4000 vgrh strings hain
    //+ likhne se string se number mein convert hogya
    const startingCount=Number(counter.innerHTML);
    const incr=targetCount/100;

    if(startingCount<targetCount){
        counter.innerHTML=`${Math.round(startingCount+incr)}`;
        setTimeout(updateCounter,10)
    }else{
        counter.innerhtml=targetCount;
    }
    }
    
    
    updateCounter();
})


//there re three ways to convert string into number

//using unary plus operator:
//var n=+str;

//number constructor;
//var n=Nmber(str);

//parseFloat function;
//var n=parseFloat(str);