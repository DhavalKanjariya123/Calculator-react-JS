
function add(){
    let a=parseInt(prompt("Enter a number"));
    let b=parseInt(prompt("Enter a number"));
    let c=a+b;
    console.log(c);
    alert("Addition of number is:"+c)
    
}

function sub(){
    let a=parseInt(prompt("Enter a number"));
    let b=parseInt(prompt("Enter a number"));
    let c=a-b;
    alert("Substraction of number is:"+c)
}
function mul(){
    let a=parseInt(prompt("Enter a number"));
    let b=parseInt(prompt("Enter a number"));
    let c=a*b;
    alert("Multipication of number is:"+c)
}

export default add;
export {sub, mul};