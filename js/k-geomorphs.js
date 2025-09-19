kApp.geomorphs = {
	list:[],
	scale: 0.264026402645,

	init: function() {
		kApp.geomorphs.select(null);
	},
	add: function() {
		var img = kApp.img.imgs[0];
		
		var geomorph = {};
		geomorph.name = img.name;
		geomorph.x = -200;
		geomorph.y = -200;
		geomorph.w = img.width * kApp.geomorphs.scale;
		geomorph.h = img.height * kApp.geomorphs.scale;
		geomorph.selected = true;
		
		geomorph.img = loadImage("img/geomorphs/" + img.name);

		kApp.geomorphs.list.push(geomorph);
		kApp.geomorphs.select(geomorph);
		//kApp.log(geomorph);
	},
	log: function(g) {
		var s = "";
		if (g) {
			s = "x[" + g.x + "], y[" + g.y + "], w[" + g.w + "], h[" + g.h + "]";
		}
		kApp.log("g[" + s + "]");
	},
	geomorphAtRpt: function(rPt) {
		kApp.geom.logRpt(rPt);
		var ret = null;
		_.each(kApp.geomorphs.list, function(g) {
			if (!ret) {
				var bx = (rPt.x >= g.x && rPt.x <= g.x + g.w);
				var by = (rPt.y >= g.y && rPt.y <= g.y + g.h);
				kApp.geomorphs.log(g);
				kApp.log("bx[" + bx +"], by[" + by + "]");
				if (bx && by) {
					kApp.log("returning");
					kApp.geomorphs.log(g);
					ret = g;
				}
			}
		});
		return ret;
	},
	select: function(g) {
		kApp.log("select");
		kApp.geomorphs.log(g);
		var bFound = false;
		_.each(kApp.geomorphs.list, function(geomorph) {
			var b = (geomorph == g);
			kApp.log("b[" + b + "]");
			geomorph.selected = b;
			if (b) {
				bFound = true;
				kApp.console.updateGeomorph(geomorph);
			}
		});
		if (!bFound) {
			kApp.console.updateGeomorph(null);
		}
	}
};