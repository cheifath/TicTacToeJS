let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector(".res-button");
let valueIsO="true";

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
    });
});
