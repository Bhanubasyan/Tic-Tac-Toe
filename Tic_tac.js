let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
box.addEventListener("click",()=>{
    
    if(turn0){
    box.innerText = "O";
    
    turn0 = false;
    }
    else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();

});
});

const resetGame =()=>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}
const enableBox=()=>{
    
    for(let box of boxes){
    box.disabled=false;
    box.innerText = "";
    
    }
   
}
const showWinner = (winner) =>{
    msg.innerText = 'Winner is '+winner;
    msgContainer.classList.remove("hide");

    for(let box of boxes)
        {
            box.disabled = true;
        }

}

const checkWinner =()=>{
for(let pattern of winPattern)
{
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
            showWinner(pos1Val);
        }
    }
}
};

resetBtn.addEventListener('click',resetGame);