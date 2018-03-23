const vm = new Vue({
    // define the element we are using
	el : "#app" ,

	data : {
		welcomemessage : "Welcome to your first vue app!",

		videoData : [
			{ name : "Star Wars: The Force Awakens", thumb : "forceawakens.jpg", vidsource : "forceawakens.mp4", description : "Star Wars movie desc"},

			{ name : "Stranger Things", thumb : "strangerthings.jpg", vidsource : "strangerthings.mp4", description : "Stranger Things TV show desc"},

			{ name : "Marvel's: The Avengers", thumb : "avengers.jpg", vidsource : "avengers.mp4", description : "Avengers movie desc"}
		],

		videoTitle : "title goes here",
		videoDesc : "description goes here",
		videoSource : ""
	},

	methods : {
		loadMovie(e) {
			e.preventDefault();

			dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') +1);

			currentData = this.videoData.filter((video) => video.vidsource === dataKey);

			this.videoTitle = currentData[0].name;
			this.videoDesc = currentData[0].description;
			this.videoSource = dataKey;
		}
	}
});
