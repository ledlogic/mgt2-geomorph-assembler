function setup() {
	kApp.init();
}

function draw() {
	kApp.render.bg();
	kApp.render.grid();
	kApp.render.geomorphs();
	kApp.render.fps();
}

function checkBoundaries() {
	return mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height;
}

function mouseClicked() {
	if (checkBoundaries()) {
		var cPt = new kApp.geom.cPt(mouseX, mouseY);
		var rPt = kApp.geom.cPt2rPt(cPt.x, cPt.y);
		kApp.log("rPt[" + rPt.x + "," + rPt.y + "]")
	}
}

function mousePressed() {
	if (checkBoundaries()) {
	}
}

function mouseDragged() {
	if (checkBoundaries()) {
	}
}
