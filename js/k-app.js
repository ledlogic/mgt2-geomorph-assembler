var kApp = {
	init: function() {
		kApp.img.init();
		kApp.console.init();
		kApp.canvas.init();
		kApp.tools.init();
		kApp.render.init();
		kApp.geomorphs.init();
	},
	log: function(s) {
		console.log(s);
	}
};

//$(window).on('scroll resize', getVisible);
function windowResized() {
	kApp.canvas.sizeCanvas();
}
