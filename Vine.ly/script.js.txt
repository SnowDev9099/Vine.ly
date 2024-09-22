document.addEventListener('DOMContentLoaded', () => {
    const videoFeed = document.getElementById('videoFeed');
    const videoFolder = './videos/';  // Folder where your videos are stored
    const videoList = ['vine1.mp4', 'vine2.mp4', 'vine3.mp4', 'vine4.mp4'];  // List of video filenames

    let videosLoaded = 0;
    const videosPerLoad = 3;  // Number of videos to load per scroll
    const maxVideos = 20;     // Maximum number of videos to load

    // Function to randomly select a video
    function getRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videoList.length);
        return videoFolder + videoList[randomIndex];
    }

    // Function to add a new video to the feed
    function addVideo() {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.src = getRandomVideo();
        videoElement.setAttribute('loop', '');
        videoElement.setAttribute('autoplay', '');
        videoElement.setAttribute('muted', '');
        videoElement.controls = true;

        // Video info (title + icons)
        const videoInfo = document.createElement('div');
        videoInfo.classList.add('video-info');

        const videoTitle = document.createElement('p');
        videoTitle.classList.add('video-title');
        videoTitle.textContent = `Vine Title #${videosLoaded + 1}`;

        // Icons (like, share, etc.)
        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');

        const likeIcon = createIcon('./icons/like.png');
        const shareIcon = createIcon('./icons/share.png');
        iconsContainer.appendChild(likeIcon);
        iconsContainer.appendChild(shareIcon);

        videoInfo.appendChild(videoTitle);
        videoInfo.appendChild(iconsContainer);

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(videoInfo);

        videoFeed.appendChild(videoContainer);
        videosLoaded++;
    }

    // Function to create an icon
    function createIcon(iconSrc) {
        const icon = document.createElement('div');
        icon.classList.add('icon');
        const img = document.createElement('img');
        img.src = iconSrc;
        icon.appendChild(img);
        return icon;
    }

    // Load initial videos
    for (let i = 0; i < videosPerLoad; i++) {
        addVideo();
    }

    // Infinite Scroll Logic
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (videosLoaded < maxVideos) {
                for (let i = 0; i < videosPerLoad; i++) {
                    addVideo();
                }
            } else {
                const loading = document.getElementById('loading');
                if (!loading) {
                    const loadingMessage = document.createElement('p');
                    loadingMessage.id = 'loading';
                    loadingMessage.textContent = 'No more videos to load.';
                    videoFeed.appendChild(loadingMessage);
                }
            }
        }
    });
});
