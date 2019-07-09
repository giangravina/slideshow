var slideshow = {
	photoList: ['assets/img/dog.jpg', 'assets/img/cat.jpg', 'assets/img/bird.jpg', 'assets/img/fish.jpg'],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1 < this.photoList.length){
			this.currentPhotoIndex++;
			this.displayPhoto();
		}else{
			this.pause();
			console.log("End of Slideshow");
		}
	},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--;
			this.displayPhoto();
		}else{
			console.log('Beginning of Slideshow');
		}
	},
	displayPhoto: function(){
		$("#slideshow-image").attr('src', this.getCurrentPhoto())
	},
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	},

	play: function(){
		this.playInterval = window.setInterval(this.nextPhoto.bind(this), 2000);
	},
	pause:function(){
		clearInterval(this.playInterval);
	}

};

slideshow.displayPhoto();

// to play use slideshow.play();

$('#prev-photo').click(function(){
	slideshow.prevPhoto();
});

$('#next-photo').click(function(){
	slideshow.nextPhoto();
});

$('#play').click(function(){
	slideshow.play();
});

$('#pause').click(function(){
	slideshow.pause();
})
