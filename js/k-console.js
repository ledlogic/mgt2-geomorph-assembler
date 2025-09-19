kApp.console = {
	$coordinates: null,
	$x: null,
	$y: null,
	
	$geomorph: null,
	$gx: null,
	$gy: null,
	$gw: null,
	$gh: null,
	
	init: function() {
		// mouse coordinates
		var $coordinates = $("#k-coordinates");
		this.$coordinates = $coordinates;
		
		var $x = $coordinates.find('#k-coordinate-x');
		var $y = $coordinates.find('#k-coordinate-y');
		this.$x = $x;
		this.$y = $y;

		// geomorph
		var $geomorph = $("#k-geomorph");
		this.$geomorph = $geomorph;

		var $gx = $geomorph.find('#k-geomorph-x');
		var $gy = $geomorph.find('#k-geomorph-y');
		this.$gx = $gx;
		this.$gy = $gy;

		var $gw = $geomorph.find('#k-geomorph-w');
		var $gh = $geomorph.find('#k-geomorph-h');
		this.$gw = $gw;
		this.$gh = $gh;
	},
	updateCoordinates: function(rPt) {
		this.$x.html(rPt.x);
		this.$y.html(rPt.y);
	},
	updateGeomorph: function(g) {
		var x = "";
		var y = "";
		var w = "";
		var h = "";
		if (g) {
			x = g.x;
			y = g.y;
			h = g.h;
			w = g.w;
			this.$geomorph.show();
		} else {
			this.$geomorph.hide();
		}
		kApp.console.roundVal(this.$gx, x);
		kApp.console.roundVal(this.$gy, y);
		kApp.console.roundVal(this.$gw, w);
		kApp.console.roundVal(this.$gh, h);
	},
	roundVal:function($el, f) {
		f = Math.round(f * 100.0) / 100.0;
		$el.val(f);
	}
}