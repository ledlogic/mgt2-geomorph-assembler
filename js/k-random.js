kApp.random = {
	between: function(min, max) {
		return min + Math.random() * (max - min);
	},
	intBetween: function(min, max) {
		var x = kApp.random.between(min, max);
		var i = Math.round(x);
		return i;
	},	
	rPtInRrect: function(r) {
		if (!r) {
			r = kApp.geom.map.rrect;
		}
		var x = kApp.random.between(r.xMin, r.xMax);
		var y = kApp.random.between(r.yMin, r.yMax);
		return new kApp.geom.rPt(x, y);
	},
	theta: function() {
		return Math.random() * 2.0 * Math.PI; 
	},
	blackholestarIntensity: function() {
		var ratio = 0.1 + 0.9 * Math.random() * Math.random();
		var ret = 255 * ratio;
		return ret;
	}
};
 