const video = document.getElementById('watermelonVideo');
video.addEventListener('loadedmetadata', () => {
    ScrollTrigger.create({
        trigger: '.video-container',
        start: 'top top',
        end: 'bottom center',
        scrub: 1, // Set scrub to smooth out the video playback
        onUpdate: self => {
            video.currentTime = self.progress * video.duration;
        },
        markers: false // Disable scroll markers
    });
});






