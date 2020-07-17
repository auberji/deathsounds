//If we've got a folder named deathsounds go grab us a random track id
function getRandomDeathTrackIds() {
    var jbFolder = JSON.parse(Campaign().get('jukeboxfolder'))
    var trackId = ""
    for(playlist in jbFolder) {
	//Playlist[n] is the name of the folder in the jukebox
        if (jbFolder[playlist]["n"] == "deathsounds") {
	    //Get random song between 1 and length
            var indice = randomInteger(jbFolder[playlist]["i"].length)
            //i is the index with meaningful stuff in honestly, track IDs
            trackId = jbFolder[playlist]["i"][indice - 1]
        }
    }
    return trackId
}



on("destroy:graphic", function(obj) {
    // We don't want to trigger these on background image destructions.
    // imagine how awful editing maps would be jesus
    if(obj.get("layer") == "objects") {
    	var jbtrack = getObj('jukeboxtrack', getRandomDeathTrackIds())
	//Don't know if this is the right way to do this? I seem to get double sounds
	//On first sound played
    	jbtrack.set({playing:false,softstop:true,volume:70});
    	jbtrack.set({playing:true,softstop:false,volume:70});
    }
});
