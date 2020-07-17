function getTrackIds() {
    var jbFolder = JSON.parse(Campaign().get('jukeboxfolder'))
    var trackId = ""
    var indice = 0
    for(x in jbFolder) {
        log(jbFolder[x])
        if (jbFolder[x]["n"] == "deathsounds") {
            log("deathsounds")
            var indice = randomInteger(jbFolder[x]["i"].length)
            tracks = jbFolder[x]["i"]
            trackId = tracks[indice - 1]
        }
    }
    return trackId
}



on("destroy:graphic", function(obj) {
    if(obj.get("layer") == "objects") {
    	var jbtrack = getObj('jukeboxtrack', getTrackIds())
    	jbtrack.set({playing:false,softstop:false,volume:70});
    	jbtrack.set({playing:true,softstop:false,volume:70});
    }
});
