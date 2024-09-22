document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video");
    const pageContainers = document.querySelectorAll(".page-container");
    let currentVideoIndex = 0;

    // Handle video scrolling
    const handleScroll = () => {
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

    // Page switching logic for bottom nav
    window.goToPage = function (page) {
        pageContainers.forEach(container => container.style.display = "none");
        if (page === 'home') {
            document.querySelector(".video-container").style.display = "flex";
        } else {
            document.querySelector(".video-container").style.display = "none";
            document.getElementById(page).style.display = "block";
        }
    };
});
