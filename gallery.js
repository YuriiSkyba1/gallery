;(function gallery(){
	let leftArrow = document.getElementById("leftArrow")
	let rightArrow = document.getElementById("rightArrow")
	let initImgNumber = 1;
	let maxImgNumber = 6;
	leftArrow.addEventListener("click",moveBackward);
	rightArrow.addEventListener("click",moveForward);
	function moveBackward(){
		let image = document.getElementById("image");
		initImgNumber--;
		if(initImgNumber==0){initImgNumber = maxImgNumber};
		image.setAttribute("src","img/" + initImgNumber + ".jpg");
	};
	function moveForward(){
	let image = document.getElementById("image");
		initImgNumber++;
		if(initImgNumber>maxImgNumber){initImgNumber=1};
		image.setAttribute("src","img/" + initImgNumber + ".jpg");
	};
})();