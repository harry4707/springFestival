window.onload = function() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');

	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];

	// 当音乐播放完停止时候，自动停止播放效果
	audio.addEventListener("ended", function(e) {
		music.setAttribute("class", "");
		// music.style.animationPlayState = "running";
		// music.style.webkitAnimationPlayState = "running";
	})

	// 点击音乐图标，控制音乐播放效果
	music.addEventListener("touchstart", function(e) {
		if (audio.paused) {
			audio.play();
			this.setAttribute("class", "play");
			// this.style.animationPlayState = "running";
			// this.style.webkitAnimationPlayState = "running";
		} else {
			audio.pause();
			this.setAttribute("class", "");
			// this.style.animationPlayState = "paused";
			// this.style.webkitAnimationPlayState = "paused";
		}
	}, false);

	// 点击屏幕，开启好运2017
	page1.addEventListener("touchstart", function(e) {
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100%";

		setTimeout(function() {
			page2.setAttribute("class", "page fadeOut");
			page3.setAttribute("class", "page fadeIn");
		}, 5500);
	}, false);

};
