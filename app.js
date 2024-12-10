let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".res-button");
let endgame=document.querySelector("#endgame");
let valueIsO="true";
//positon of winners
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

//box manipulation
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{

        //if the previous box was O or the valIsO is ture
        if(valueIsO==="true"){
        
            //the content is set to X
            box.textContent="X";
            //updating the valis0 to false
            valueIsO="false";
        }

        //if the previous box was X or the valIsO is false
        else if(valueIsO==="false"){

            //the content is set to O
            box.textContent="O";
            //updating the valIs0 to true
            valueIsO="true";
        }
        //after clicking a box the button is disabled
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner=()=>{
    for(pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos0val=boxes[pattern[0]].textContent;
        let pos1val=boxes[pattern[1]].textContent;
        let pos2val=boxes[pattern[2]].textContent;
        if(pos0val!="" && pos1val!="" && pos2val!=""){
            if(pos0val===pos1val && pos1val===pos2val){
                console.log(" Winner : ",pos0val);
                gameStopper();
            }
        }
    }
}


//reset button
resetbutton.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        
        //setting all the values to null
        box.textContent="";
        //enabling the disabled button
        box.disabled = false;
        //setting valueIsO to true to start the game always from player X
        valueIsO="true";
    });
});

let gameStopper=()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}
