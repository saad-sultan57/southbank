document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const controlBtn = document.getElementById('videoControl');
    
    if (!video || !controlBtn) {
        console.error('Video or control button not found');
        return;
    }

    const controlIcon = controlBtn.querySelector('i');
    if (!controlIcon) {
        console.error('Control icon not found');
        return;
    }

    controlBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play()
                .then(() => {
                    controlIcon.classList.remove('fa-play');
                    controlIcon.classList.add('fa-pause');
                })
                .catch(error => {
                    console.error('Error playing video:', error);
                });
        } else {
            video.pause();
            controlIcon.classList.remove('fa-pause');
            controlIcon.classList.add('fa-play');
        }
    });
});