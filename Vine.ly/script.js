document.addEventListener('DOMContentLoaded', () => {
    const videoFeed = document.getElementById('videoFeed');
    const loadingMessage = document.getElementById('loading');
    const videoFolder = './videos/';
    const videoList = ['vine1.mp4', 'vine2.mp4', 'vine3.mp4', 'vine4.mp4'];

    let currentVideoIndex = 0;
    let videosLoaded = 0;
    const videosPerLoad = 1;  // Only load one video at a time
    const maxVideos = videoList.length;

    // Function to load the current video
    function loadVideo(index) {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        const videoElement = document.createElement('video');
        videoElement.src = videoFolder + videoList[index];
        videoElement.setAttribute('loop', '');
        videoElement.setAttribute('autoplay', '');
        videoElement.setAttribute('muted', '');
        videoElement.controls = true;

        videoContainer.appendChild(videoElement);
        videoFeed.appendChild(videoContainer);

        videoElement.play();

        // Stop previous video when a new one loads
        if (videosLoaded > 0) {
            const previousVideo = document.querySelector('video');
            if (previousVideo) {
                previousVideo.pause();
            }
        }

        videosLoaded++;
    }

    // Load the initial video
    loadVideo(currentVideoIndex);

    // Infinite Scroll Logic
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            if (currentVideoIndex < maxVideos - 1) {
                loadingMessage.style.display = 'block';
                setTimeout(() => {
                    currentVideoIndex++;
                    loadVideo(currentVideoIndex);
                    loadingMessage.style.display = 'none';
                }, 1000); // Simulate loading time
            } else {
                loadingMessage.textContent = 'No more videos to load.';
            }
        }
    });
});
