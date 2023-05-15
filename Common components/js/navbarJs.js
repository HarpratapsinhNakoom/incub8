$(document).ready(function(){
	$('#navbar-icon').click(function(){
		$(this).toggleClass('open');
	});
});

const toggleBtn = document.getElementById("navbar-icon");
const sidebar = document.getElementById("sidebar-links");
toggleBtn.addEventListener("click", () => {
	// console.log(sidebar.style.translate);
	if(sidebar.style.translate === "none") {
		sidebar.style.translate = "100vw";
	} else{
		sidebar.style.translate = "none";
	}
})

window.addEventListener("resize", () => {
	if(parseInt(window.innerWidth) >= 1100) {
		sidebar.style.translate = "100vw";
		toggleBtn.style.display = "none";
	}else {
		sidebar.style.translate = "100vw";
		toggleBtn.style.display = "block";
	}
})