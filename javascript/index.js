function shrink(){
	document.querySelector('#hidden').style.display = "flex";
	document.querySelector('#a').style.zoom = ".7";
	document.querySelector('#a').style.marginTop = "25vh";
	document.querySelector('#a').style.height = "100vh";
	document.querySelector('#init').style.background = "rgb(128,168,168)";
	document.querySelector('#init').style.height = "100vh";
}
function closeShrink(){
	document.querySelector('#hidden').style.display = "none";
	document.querySelector('#a').style.zoom = "1";
	document.querySelector('#a').style.height = "80vh";
	document.querySelector('#a').style.marginTop = "0";
	document.querySelector('#works').style.display = "none";
	document.querySelector('#init').style.background = "none";
	document.querySelector('#init').style.height = "80vh";
}


function shrink2(){
	document.querySelector('#hidden').style.display = "flex";
	document.querySelector('#a').style.zoom = ".7";
	document.querySelector('#a').style.marginTop = "25vh";
	document.querySelector('#a').style.height = "100vh";
	document.querySelector('#init').style.height = "100vh";
	document.querySelector('#works').style.display = "flex";
	document.querySelector('#sw1').style.display = "none";
	document.querySelector('#init').style.background = "rgb(128,168,168)";
	document.querySelector('#sw2').style.display = "flex";
}
function openaction(){
	document.querySelector('#action').style.display = "flex";
}
function closeaction(){
	document.querySelector('#action').style.display = "none";
}

function openaction2(){
	document.querySelector('#action2').style.display = "flex";
	document.querySelector('#aarep').style.display = "none";
}
function closeaction2(){
	document.querySelector('#action2').style.display = "none";
	document.querySelector('#aarep').style.display = "flex";
}

// function fixshrink(){
// 	document.querySelector('#hidden').style.display = "flex";
// 	document.querySelector('#a').style.zoom = ".7";
// 	document.querySelector('#a').style.marginTop = "25vh";
// 	document.querySelector('#a').style.height = "100vh";
// 	document.querySelector('#init').style.height = "100vh";
// 	document.querySelector('#works').style.display = "flex";
// 	document.querySelector('#sw1').style.display = "none";
// 	document.querySelector('#init').style.background = "rgb(128,168,168)";
// 	document.querySelector('#sw2').style.display = "flex";
// 	document.locate()
// 	location.href = 'index.html';
// }

// function fixshrink(){
// 	if(document.querySelector('#fixicon').click){
// 		document.querySelector('#hidden').style.display = "flex";
// 		document.querySelector('#a').style.zoom = ".7";
// 		document.querySelector('#a').style.marginTop = "25vh";
// 		document.querySelector('#a').style.height = "100vh";
// 		document.querySelector('#init').style.height = "100vh";
// 		document.querySelector('#works').style.display = "flex";
// 		document.querySelector('#sw1').style.display = "none";
// 		document.querySelector('#init').style.background = "rgb(128,168,168)";
// 		document.querySelector('#sw2').style.display = "flex";
// 	}
// }


// window.onscroll = () =>{
// 	if(window.scrollY >= 200){
// 		document.querySelector('#aa').style.position = "fixed";
// 		document.querySelector('#aa').style.width = "100%";
// 		document.querySelector('#aa').style.top = "0%";
// 		document.querySelector('#aa').style.left = "0%";
// 		document.querySelector('#aa').style.padding = "2%";
// 		document.querySelector('#aa').style.background = "rgba(0,0,0,0.65)";
// 	}
// 	else{
// 		document.querySelector('#aa').style.position = "relative";
// 		document.querySelector('#aa').style.background = "none";
// 	}
// }

window.onscroll = () =>{
	if(window.scrollY >= 200){
		document.querySelector('#aarep').style.display = "flex";
	}
	else{
		document.querySelector('#aarep').style.display = "none";	
	}
}

function showorks(){
	document.querySelector('#works').style.display = "flex";
	document.querySelector('#sw1').style.display = "none";
	document.querySelector('#sw2').style.display = "flex";
}

function cloworks(){
	document.querySelector('#works').style.display = "none";
	document.querySelector('#sw1').style.display = "flex";
	document.querySelector('#sw2').style.display = "none";
}

function showorks2(){
	document.querySelector('#works2').style.display = "flex";
	document.querySelector('#sw12').style.display = "none";
	document.querySelector('#sw22').style.display = "flex";
}

function cloworks2(){
	document.querySelector('#works2').style.display = "none";
	document.querySelector('#sw12').style.display = "flex";
	document.querySelector('#sw22').style.display = "none";
}