document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("video");
    const videoNameElement = document.getElementById("video-name");
    const videoDescriptionElement = document.getElementById("video-description");
    const likesCountElement = document.getElementById("likes-count");
    
    // Function to fetch video data from JSON
    const fetchVideoData = async () => {
        const response = await fetch('videos.json');
        const videos = await response.json();
        
        // Get a random video
        const randomIndex = Math.floor(Math.random() * videos.length);
        const selectedVideo = videos[randomIndex];
        
        // Update video player source
        videoElement.src = `videos/${selectedVideo.name}.mp4`;
        
        // Update video information
        videoNameElement.textContent = selectedVideo.name;
        videoDescriptionElement.textContent = selectedVideo.description;
        likesCountElement.textContent = selectedVideo.likes;
        
        // Play the video
        videoElement.play();
    };

    fetchVideoData();

    // Optionally, page switching logic remains the same
    window.goToPage = function (page) {
        // Similar to before
    };
});
