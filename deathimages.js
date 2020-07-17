// x^2 + y^2 = r^2
// but who cares because we can roughly get our radius
// from height / 2
// centrex = top - radius 
// centrey = left - radius
// step through angles
//
on("destroy:graphic", function(obj) {
    if (obj.get("layer") == "objects") {
	var radius = obj.get("height") / 2
	var centrex = (obj.get("top") - radius)
	var centrey = (obj.get("left") - radius)
	var theta = 0
	var step = 5
	while (theta <= 360) {
		var x = Math.round(centrex + radius * Math.cos(theta))
	        var y = Math.round(centrey + radius * Math.sin(theta))
	        obj = createObj("graphic", {id: theta,
					    pageid: Campaign().get("playerpageid"), 
					    imgsrc: "https://s3.amazonaws.com/files.d20.io/images/151084075/pDNjZpjGq8OiqKBCWwpxSg/thumb.png?1595014338", 
		    			    top: x, 
		    			    left: y, 
		                            height: 60,
		                            width: 60,
		                            layer: "map"})
		theta += 5
	        log(x)
	        log(y)
	        log(theta)
	}
    }
});
