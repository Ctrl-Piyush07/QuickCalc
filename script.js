const input=document.getElementById('input');
let exp='';

function handleClick(el){
    console.log(el.innerText);
    exp=`${input.value}${el.innerText}`;
    input.value=exp;
}
function calculate(){
    if(exp===''){
        input.value='';
        return;
    }
    // Handle "X% of Y" (e.g., 3% of 10 -> (3/100)*10)
    let transformedExp = exp.replace(/(\d+\.?\d*)\s*%(\s*\d+\.?\d*)/g, '($1/100)*$2');
    // Transform percentages (e.g., 50% -> (50/100), 50.5% -> (50.5/100))
    transformedExp=transformedExp.replace(/((\d+\.?\d*|\.\d+))%/g, '($1/100)');
    console.log(transformedExp);
  
    // if(el.innerText=='+'||el.innerText=='-'||el.innerText=='*'||el.innerText=='/'||el.innerText=='%'){
    //     return;
    // }

    try{
    const value=eval(transformedExp);
    if(!isFinite(value)){
        input.value='Cannot Divide by Zero';
    }else{
        input.value=value;
        exp=value.toString();
    }
    }catch(error){
        if(error.name==='SyntaxError'){
            input.value='Invalid Expression';
        }else{
        input.value='Error';
    }
    console.log(error);
}
}

function deleteValue(){
    exp=exp.slice(0,-1);
    input.value=exp;
}

function reset(){
    input.value='';
    exp='';
}