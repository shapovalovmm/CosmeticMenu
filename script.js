let menuArrows = document.querySelectorAll(".main_list");
if (menuArrows.length > 0) {
	var actives = document.getElementsByClassName('_active');
	for (let index = 0; index < menuArrows.length; index++) {
		const menuArrow = menuArrows[index];
		menuArrow.addEventListener("click" ,function (e) {
			var currentActive = actives[0];
    		if (currentActive)
      			currentActive.classList.remove("_active");
      		menuArrow.parentElement.classList.add("_active");
		});
	}
}