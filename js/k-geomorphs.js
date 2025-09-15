kApp.geomorphs = {
	list:[],
	scale: 0.265,

	init: function() {
	},
	add: function() {
		var img = kApp.img.imgs[0];
		
		var geomorph = {};
		geomorph.name = img.name;
		geomorph.x = -200;
		geomorph.y = -200;
		geomorph.w = img.width * kApp.geomorphs.scale;
		geomorph.h = img.height * kApp.geomorphs.scale;
		
		geomorph.img = loadImage("img/geomorphs/" + img.name);

		kApp.geomorphs.list.push(geomorph);
		
		kApp.log(geomorph);
	}
};