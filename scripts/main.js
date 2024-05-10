/* Maximo Mayo 3/28/2024 */

function calc()
{
    /* Getting var for function */
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;

    /*Var to return answer*/
    var calculate;

    /*Determine operator; execute command*/
    if(op == "add")
    {
        calculate = a + b;
    }
    else if(op == "min")
    {
       calculate = a - b; 
    }
    else if(op == "div")
    {
       calculate = a / b; 
    }
    else if(op == "mul")
    {
       calculate = a * b; 
    }
    else if(op == "mod")
    {
       calculate = a % b; 
    }

    /* Send result back to the HTML to the result id */
    document.querySelector("#result").innerHTML = calculate;
}