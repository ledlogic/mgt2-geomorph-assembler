kApp.tools = {
	$icons: null,
	$precision: null,
	$add: null,
	
	init: function() {
		var $icons = $("#k-tools img.k-tool-icon");
		kApp.tools.$icons = $icons;
		$icons.on("click", kApp.tools.click);
		
		var $precision = $("#k-tool-precision");
		kApp.tools.$precision = $precision;
		
		var $add = $("#k-tool-add");
		kApp.tools.$add = $add;
		
		kApp.tools.setActive("k-tool-precision");
		
		$( "body" ).on( "keydown", function(e) {
			kApp.log(e.which);
			
			if (e.keyCode == 37) {
				kApp.tools.translate(-1,0);
			}
			if (e.keyCode == 38) {
				kApp.tools.translate(0,1);
			}
			if (e.keyCode == 39) {
				kApp.tools.translate(1,0);
			}
			if (e.keyCode == 40) {
				kApp.tools.translate(0,-1);
			}
		});
		
		$( "body" ).on( "keypress", function(e) {
			kApp.log(e.which);

			if ((e.which == 61 ) || (e.which == 43 && e.shiftKey)) {
				kApp.geom.zoom(0.5);
			} 
			if ((e.which == 109 ) || (e.which == 45 )) {
				kApp.geom.zoom(2.0);
			}
			if (e.which == 103) {
				kApp.render.settings.grid.major = !kApp.render.settings.grid.major;
				kApp.render.settings.grid.minor = !kApp.render.settings.grid.minor;
				kApp.render.settings.grid.ordinals = !kApp.render.settings.grid.ordinals;
			}
		});
	},
	
	translate: function(dx, dy) {
		var geomorph = kApp.geomorphs.selectedGeomorph();
		if (geomorph) {
			kApp.geom.translateGeomorph(geomorph, dx, dy);
		} else {
			kApp.geom.translate(dx, dy);
		}
	},
	
	setActive: function(command) {
		$(".k-tool-icon").removeClass("k-tool-active"); 
		$(".k-tool-icon." + command).addClass("k-tool-active"); 
	},
	
	click: function() {
		var id = $(this).attr("id");
		kApp.log(id);
		kApp.tools.setActive(id);
		
		switch (id) {
			case "k-tool-precision":
				break;
			case "k-tool-add":
				kApp.geomorphs.add();
				break;
		}
	}
};
