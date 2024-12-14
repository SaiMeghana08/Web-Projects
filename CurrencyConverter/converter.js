const URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

let dropdown=document.querySelectorAll("#select");
let button=document.querySelector("#btn");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector("#msg");
for(let select of dropdown){
    for(code in countryList)
    {
        let newopt=document.createElement("option");
        newopt.innerText=code;
        newopt.value=code;
        if(select.name==="from" && code==="USD")
        {
            newopt.selected="selected";
        }
        else if(select.name==="to" && code==="INR")
            {
                newopt.selected="selected";
            }
        select.append(newopt);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
   
}
let ExchangeUpdate=async ()=>{
    let input=document.querySelector("#in");
    let amtval=input.value;
    if(amtval<1 || amtval===" ")
    {
        amtval=1;
        input.value=1;
    }
    // console.log(fromCurr.value.toLowerCase());
    // const base_url=`${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    const from=fromCurr.value.toLowerCase();
    let link=await fetch(url);
    let res=await link.json();
    let to=toCurr.value.toLowerCase();
    console.log(res[from][to]);   
     let ans=res[from][to];
     let result=amtval*ans;
     msg.innerText=`${amtval} ${fromCurr.value}= ${result} ${toCurr.value}`;



}
let updateFlag=(element)=>{
    let eleval=element.value;
    let countryCode=countryList[eleval];
    let img = element.parentElement.querySelector("img");
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src=newsrc;

}

button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    ExchangeUpdate();
});
window.addEventListener("load",()=>{
    ExchangeUpdate();
});

