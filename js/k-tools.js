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
