document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video");

    let currentVideoIndex = 0;

    // Handle video scrolling
    const handleScroll = () => {
        const videoContainer = document.querySelector(".video-container");
        const sections = document.querySelectorAll(".video-section");

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                if (index !== currentVideoIndex) {
                    videos[currentVideoIndex].pause();
                    currentVideoIndex = index;
                    videos[currentVideoIndex].play();
                }
            }
        });
    };

    document.querySelector(".video-container").addEventListener("scroll", handleScroll);

    // Optionally play the first video automatically
    videos[0].play();
});
