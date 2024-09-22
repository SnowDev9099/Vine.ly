document.addEventListener('DOMContentLoaded', () => {
    const videoFeed = document.getElementById('videoFeed');
    const loadingMessage = document.getElementById('loading');
    const videoFolder = './videos/';
    const videoList = ['vine1.mp4', 'vine2.mp4', 'vine3.mp4', 'vine4.mp4'];

    let currentVideoIndex = 0;
    const maxVideos = videoList.length;

    // Function to load the current video
    function loadVideo(index) {
        videoFeed.innerHTML = ''; // Clear previous video

        const videoElement = document.createElement('video');
        videoElement.src = videoFolder + videoList[index];
        videoElement.setAttribute('loop', '');
        videoElement.setAttribute('autoplay', '');
        videoElement.setAttribute('muted', '');
        videoElement.controls = true;

        videoFeed.appendChild(videoElement);
        videoElement.play();
    }

    // Load the initial video
    loadVideo(currentVideoIndex);

    // Scroll to load the next video
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) { // Scrolling down
            if (currentVideoIndex < maxVideos - 1) {
                loadingMessage.style.display = 'block';
                setTimeout(() => {
                    currentVideoIndex++;
                    loadVideo(currentVideoIndex);
                    loadingMessage.style.display = 'none';
                }, 500); // Simulate loading time
            }
        }
    });
});
