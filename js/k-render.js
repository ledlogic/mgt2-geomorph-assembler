kApp.render = {
	bgVal: 255,
	fpsVal: 0,
	
	settings: {
		grid: {
			major: true,
			minor: true,
			ordinals: true
		}
	},
	
	init: function() {
	},
	
	fps: function() {
		var fpsVal = kApp.render.fpsVal;
		
		var fps = frameRate();
		fill(fpsVal);
		textSize(14);
		textStyle(NORMAL);
		textFont('Microgramma Extd D');
		
		var y = kApp.geom.map.crect.height - 10;
		text("FPS: " + fps.toFixed(0), 10, y);
	},
	
	bg: function() {
		var bgVal = kApp.render.bgVal;
		background(bgVal, bgVal, bgVal);
	},
	
	grid: function() {
		var major = 100;
		var minor = 20;
		
		var xMin = kApp.geom.map.rrect.xMin;
		xMin = Math.floor(xMin / major - 1) * major;		
		var xMax = kApp.geom.map.rrect.xMax;
		xMax = Math.ceil(xMax / major + 1) * major;
		
		var yMin = kApp.geom.map.rrect.yMin;
		yMin = Math.floor(yMin / major - 1) * major;
		var yMax = kApp.geom.map.rrect.yMax;
		yMax = Math.ceil(yMax / major + 1) * major;

		// minor gridlines
		if (kApp.render.settings.grid.minor) {
			stroke(200, 200, 200);
			for (var x=xMin; x<=xMax; x+= minor) {
				var pt1 = kApp.geom.rPt2Cpt(x, yMin);
				var pt2 = kApp.geom.rPt2Cpt(x, yMax);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
			
			for (var y=yMin; y<=yMax; y+= minor) {
				var pt1 = kApp.geom.rPt2Cpt(xMin, y);
				var pt2 = kApp.geom.rPt2Cpt(xMax, y);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
		}
		
		// major gridlines
		if (kApp.render.settings.grid.major) {
			stroke(100, 100, 200);
	
			for (var x=xMin; x<=xMax; x+= major) {
				var pt1 = kApp.geom.rPt2Cpt(x, yMin);
				var pt2 = kApp.geom.rPt2Cpt(x, yMax);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
					
			for (var y=yMin; y<=yMax; y+= major) {
				var pt1 = kApp.geom.rPt2Cpt(xMin, y);
				var pt2 = kApp.geom.rPt2Cpt(xMax, y);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
		}
		
		// ordinal gridlines
		if (kApp.render.settings.grid.ordinals) {
			stroke(5, 5, 100);
			{
				var pt1 = kApp.geom.rPt2Cpt(0, yMin);
				var pt2 = kApp.geom.rPt2Cpt(0, yMax);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
			
			for (var y=yMin; y<=yMax; y+= major) {
				var pt1 = kApp.geom.rPt2Cpt(xMin, 0);
				var pt2 = kApp.geom.rPt2Cpt(xMax, 0);
				line(Math.max(0,pt1.x), Math.max(0,pt1.y), Math.min(kApp.geom.map.crect.width,pt2.x), Math.min(kApp.geom.map.crect.height,pt2.y));
			}
		}
	},
	
	selectDim: 4,
	
	geomorphs: function() {
		_.each(kApp.geomorphs.list, function(g, i) {
			var pt1 = kApp.geom.rPt2Cpt(g.x, g.y);
			var pt2 = kApp.geom.rPt2Cpt(g.w, g.h);
			var pt3 = kApp.geom.rPt2Cpt(0, 0);

			var cx = pt1.x;
			var cy = pt1.y;
			var w = pt2.x - pt3.x;
			var h = pt2.y - pt3.y;
			image(g.img, cx, cy, w, h);
			
			//kApp.log("cx[" + cx + "], cy[" + cy + "], w[" + w + "], h[" + h + "]");
			//kApp.log(g.selected);
			
			if (g.selected) {
				stroke(255, 165, 0);
				fill(255, 165, 0);
				
				// bl
				rect(cx - 0.5 * kApp.render.selectDim, cy - 0.5 * kApp.render.selectDim, kApp.render.selectDim, kApp.render.selectDim, 0);
				// br
				rect(cx + w - 0.5 * kApp.render.selectDim, cy - 0.5 * kApp.render.selectDim, kApp.render.selectDim, kApp.render.selectDim, 0);
				// tl
				rect(cx - 0.5 * kApp.render.selectDim, cy + h - 0.5 * kApp.render.selectDim, kApp.render.selectDim, kApp.render.selectDim, 0);
				// tr
				rect(cx + w - 0.5 * kApp.render.selectDim, cy + h - 0.5 * kApp.render.selectDim, kApp.render.selectDim, kApp.render.selectDim, 0);
			}
		});
	}
};
