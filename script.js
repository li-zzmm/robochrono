const previewVideos = document.querySelectorAll("video");
const heroBackgroundVideos = document.querySelectorAll(".hero-video-bg video");

heroBackgroundVideos.forEach((video) => {
  video.playbackRate = 2;
});

previewVideos.forEach((video) => {
  video.addEventListener("canplay", () => {
    if (video.closest(".hero-video-bg")) {
      video.playbackRate = 2;
    }
    video.play().catch(() => {
      video.controls = true;
    });
  }, { once: true });
});
