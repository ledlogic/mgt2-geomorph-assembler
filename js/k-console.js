kApp.console = {
	$coordinates: null,
	$x: null,
	$y: null,
	
	$geomorph: null,
	$gx: null,
	$gy: null,
	$gw: null,
	$gh: null,
	
	$gsrc: null,
	
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
		
		$gx.on("change", kApp.console.changeGeomorph);
		$gy.on("change", kApp.console.changeGeomorph);
		$gw.on("change", kApp.console.changeGeomorph);
		$gh.on("change", kApp.console.changeGeomorph);
		
		$gsrc = $geomorph.find('#k-geomorph-src');
		_.each(kApp.img.imgs, function(img) {
			kApp.log(img);
			$gsrc.append("<option value=\"" + img.name + "\">" + img.name + "</option>");
		});
		$gsrc.on("change", kApp.console.changeImg);
	},
	changeImg: function(sel) {
		var name = $(this).val();
		//kApp.log(src);
		var geomorph = kApp.geomorphs.selectedGeomorph();
		if (geomorph) {
			var img = kApp.img.getImgByName(name);
			if (img) {
				kApp.geomorphs.changeGeomorphImg(geomorph, img);
			}
		}
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
		kApp.console.roundVal(kApp.console.$gx, x);
		kApp.console.roundVal(kApp.console.$gy, y);
		kApp.console.roundVal(kApp.console.$gw, w);
		kApp.console.roundVal(kApp.console.$gh, h);
	},
	changeGeomorph: function() {
		var rx = kApp.console.getVal(kApp.console.$gx);
		var ry = kApp.console.getVal(kApp.console.$gy);
		var rw = kApp.console.getVal(kApp.console.$gw);
		var rh = kApp.console.getVal(kApp.console.$gh);
		
		var geomorph = kApp.geomorphs.selectedGeomorph();
		//kApp.log("geomorph");
		//kApp.geomorphs.log(geomorph);
		if (geomorph) {
			geomorph.x = rx;
			geomorph.y = ry;
			geomorph.w = rw;
			geomorph.h = rh;
		}
	},
	getVal: function($el) {
		var ret = parseFloat($el.val(), 10);
		return ret;
	},
	roundVal:function($el, f) {
		f = Math.round(f * 100.0) / 100.0;
		$el.val(f);
	}
}