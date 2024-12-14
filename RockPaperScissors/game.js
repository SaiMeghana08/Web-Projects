const ch=document.querySelectorAll(".choice");
let computer=()=>{
    let options=["rock","paper","scissors"];
   let index= Math.floor(Math.random()*3); 
   console.log(options[index]);
   return options[index];

};
let usernum=0;
let compnum=0;
let ans=document.querySelector("#msg");
let showWinner=(userwin,user,comp)=>{
    if(userwin)
        {
            usernum++;
            document.querySelector("#user-score").innerText=usernum;
           ans.innerText=`User Won! Your ${user} beats ${comp}`;
           ans.style.backgroundColor="green";  
        }
        else{
            compnum++;
            document.querySelector("#comp-score").innerText=compnum;
           ans.innerText=`Comp Won! ${comp} beats  your ${user} `;
            ans.style.backgroundColor="red";
           }   
        

};

let playgame=(user)=>{
    let comp=computer();
    if(user===comp)
    {
        ans.innerText="Draw, Try Again!";
        ans.style.backgroundColor="rgb(6,6,53)";

    }
    else 
    {
        let userwin=true;
        if(user==='rock'){
            userwin=(comp==='paper'?false:true);

    }
    else if(user==='paper')
    {
         userwin=(comp==='scissors'?false:true);
    }
    else{
        userwin=(comp==='rock'?false:true);
    }
    showWinner(userwin,user,comp);
}

};


ch.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user=choice.getAttribute("id");
        playgame(user);
    });
});