function mouseParallax(id, left, top, mouseX, mouseY, speed) {
	if (!speed) return;
	const obj = document.getElementById(id);
	if (!obj) return;
	const parentObj = obj.parentNode,
		containerWidth = parseInt(parentObj.offsetWidth),
		containerHeight = parseInt(parentObj.offsetHeight);
	obj.style.left =
		left - ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed + 'px';
	obj.style.top =
		top - ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed + 'px';
}

export default mouseParallax;
