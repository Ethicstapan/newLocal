let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContain = document.querySelector(".msgContain");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new");
let turn0 = true;

const wPattern = [
     [0,1,2],
	 [0,4,8],
	 [0,3,6],
	 [1,4,7],
	 [2,5,8],
	 [2,4,6],
	 [3,4,5],
	 [6,7,8]
   ];
   
box.forEach((box)=>{
	box.addEventListener("click",()=>{
		console.log("Clicked Here!");
		if(turn0){
			box.innerText = "O";
			turn0 = false;
		}else{
			box.innerText = "X";
			turn0 = true;
		}
		box.disabled = true;
		checkwin();
	})
});

const resetbtn=() =>{
	turn0 = true;
	boxEnabled();
	msgContain.classList.add("hide");
}

const boxDisabled = () =>{
	for(boxes of box){
		boxes.disabled = true;
	}
}

const boxEnabled = () =>{
	for(boxes of box){
		boxes.disabled = false;
		boxes.innerText = "";
	}
}

const showWinner= (winner) =>{
	msg.innerText = `Congrats winner is ${winner}`;
	msgContain.classList.remove("hide");
	boxDisabled();
};

const checkwin = () =>{
	for(let pattern of wPattern){
		let pos0 = box[pattern[0]].innerText;
		let pos1 = box[pattern[1]].innerText; 
		let pos2 = box[pattern[2]].innerText;
		
		if(pos0 != "" && pos1 != "" && pos2 != ""){
			if(pos0 === pos1 && pos1 === pos2){
				console.log("win",pos0);
				showWinner(pos0);
			}
		}
	}
}

newbtn.addEventListener("click",resetbtn);
resetBtn.addEventListener("click",resetbtn);
