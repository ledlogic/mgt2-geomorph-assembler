kApp.console = {
	$x: null,
	$y: null,
	
	init: function() {
		// mouse coordinates
		var $x = $('#k-coordinate-x');
		var $y = $('#k-coordinate-y');
		this.$x = $x;
		this.$y = $y;
	},
	updateCoordinates: function(rPt) {
		this.$x.html(rPt.x);
		this.$y.html(rPt.y);
	}
}