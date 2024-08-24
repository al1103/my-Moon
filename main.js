const img = document.getElementById("img");
const changeImg = document.getElementById("changeImg");
const imageSizes = ["0", "144p", "240p", "360p", "720p", "1080p"];

// Preload all images
imageSizes.forEach((size) => {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = `./image/${size}.png`;
  document.head.appendChild(link);
});

// Ensure image 0 is loaded immediately
img.src = "./image/0.png";

changeImg.addEventListener("change", function () {
  const selectedSize = this.value;
  img.src = `./image/${selectedSize}.png`;
});
