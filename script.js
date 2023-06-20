const getHistory =() =>{
    let d = document.getElementById("history-value")
    return d.innerText;
}
getHistory()

const getResult =() =>{
    let va2 = document.getElementById("result-value")
    return va2.innerText;
}
const updateHistory =(num) =>{
    document.getElementById("history-value").innerText = num
}
const updateResult =(n) =>{
    if(n=="")
    {
        document.getElementById("result-value").innerText=n
    }
    else
    {
        document.getElementById("result-value")
        .innerText = getFormattedNumber(n)
    }
    
}
const getFormattedNumber = (n) =>{
    if(n == "-")
    return "";
    let p = Number(n);
    let value = p.toLocaleString("en");
    return value;
}
updateHistory("")
updateResult("")
 
const reverseNumberFormat =(num) =>{
    return Number(num.replace(/,/g,''));
}



let operator = document.getElementsByClassName("operator");
for(let i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id == 'clear')
        {
            updateHistory("");
            updateResult("");
        }
        else if(this.id == 'backspace')
        {
            let curr = reverseNumberFormat(getResult()).toString();
            if(curr)
            {
                curr = curr.substring(0,curr.length-1)
                updateResult(curr)
            }
        }
        else
        {
            let outp = getResult();
            let hist = getHistory();
            if(outp == "" && hist!="")
            {
                if(isNaN(hist[hist.length-1]))
                {
                    hist = hist.substring(0,hist.length-1);
                }
            }
            if(outp != "")
            {
                if(outp =="")
                outp = "";
                else
                outp = reverseNumberFormat(outp);
                
                hist = hist + outp;
                if(this.id == '=')
                {
                    let result = eval(hist);
                    updateResult(result);
                    updateHistory("");
                }
                else{
                    hist = hist + this.id;
                    updateHistory(hist);
                    updateResult("");
                }
            } 
        }
    })
}

let number = document.getElementsByClassName("number");
for(let i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){
        if(reverseNumberFormat(getResult()) !=NaN)
        {
            let temp = reverseNumberFormat(getResult());
            temp = temp + this.id;
            updateResult(temp);

        }
    

    })
}

