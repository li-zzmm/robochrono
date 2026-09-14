const videos = [...document.querySelectorAll("video")];

function startVideo(video) {
  video.play().catch(() => { video.controls = true; });
}

videos.forEach((video) => {
  video.addEventListener("canplay", () => startVideo(video), { once: true });
  video.addEventListener("mouseenter", () => startVideo(video));
});
