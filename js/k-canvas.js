kApp.canvas = {
	$elCanvas: null,
	$elControl: null,
	
	init: function() {
		// canvas
		var $elCanvas = $('#k-canvas');
		kApp.canvas.$elCanvas = $elCanvas;
		kApp.canvas.sizeCanvas();
		
		$elCanvas.on("mouseover", kApp.canvas.mouseOver);
		$elCanvas.on("mousemove", kApp.canvas.mouseMove);
		$elCanvas.on("click", kApp.canvas.mouseClick);
	},
	mouseOver: function() {
		var cPt = new kApp.geom.cPt(mouseX, mouseY);
		var rPt = kApp.geom.cPt2rPt(cPt.x, cPt.y);
		kApp.console.updateCoordinates(rPt);
	},
	mouseMove: function() {
		var cPt = new kApp.geom.cPt(mouseX, mouseY);
		var rPt = kApp.geom.cPt2rPt(cPt.x, cPt.y);
		kApp.console.updateCoordinates(rPt);
	},
	mouseClick: function() {
		kApp.log("mouseClick");
		var cPt = new kApp.geom.cPt(mouseX, mouseY);
		var rPt = kApp.geom.cPt2rPt(cPt.x, cPt.y);
		var g = kApp.geomorphs.geomorphAtRpt(rPt);
		kApp.log("mouseClick, g[" + g + "]");
		kApp.geomorphs.log(g);
		kApp.geomorphs.select(g);
	},
	sizeCanvas: function() {
		var toolsWidth = 100;
		var consoleWidth = 300;
		
		// @see http://jsfiddle.net/b5DGj/7/
		var ww = document.body.clientWidth;
		var wh = document.body.clientHeight;
		var $h = $("header");
		var hms = parseInt($h.css("marginTop"),10);
		var hh = $h.height();
		var $f = $("footer");
		var fms = parseInt($f.css("marginTop"),10);
		var fh = $f.height();
		var w = ww - toolsWidth- consoleWidth - 30;
		var h = wh - hh - hms * 2 - fh - fms * 2;
		
		// canvas
		kApp.canvas.$elCanvas.width(w);
		kApp.canvas.$elCanvas.height(h);

		// control
		var $elControl = $('#k-console');
		$elControl.width(consoleWidth - 20);
		$elControl.height(h);
		$elControl.css("left", ww - consoleWidth - 20);
		kApp.canvas.$elControl = $elControl;
		
		// coordinates
		kApp.geom.map.crect = new kApp.geom.crect(0, 0, w, h);
		kApp.geom.map.rrect = new kApp.geom.rrect(-kApp.geom.map.crect.xcenter, -kApp.geom.map.crect.ycenter, kApp.geom.map.crect.xcenter, kApp.geom.map.crect.ycenter);
		
		// create canvas
		var crect = kApp.geom.map.crect;
		var c = createCanvas(crect.width, crect.height);
		c.parent('k-canvas');
	}
};