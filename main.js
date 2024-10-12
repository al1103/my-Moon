const album = [
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F1.png?alt=media&token=16a78d21-4c43-4bb1-a7f6-56b59dbf237f",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F2.png?alt=media&token=27c9645c-4c34-4d66-a121-b75ec3411624",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F3.png?alt=media&token=b7389b8e-5b6d-444e-9402-b1664dc93e6b",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F4.png?alt=media&token=f0b3ce8e-5a01-4ee7-9366-b81eed6bbee3",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F5.png?alt=media&token=d1603afe-2380-409c-b29f-742cf17792de",
];

const changeImg = document.getElementById("changeImg");
const img = document.getElementById("img");
const loader = document.getElementById("loader");

const imageCache = new Map();

function loadImage(src) {
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src));
  }
  return new Promise((resolve, reject) => {
    const tempImg = new Image();
    tempImg.onload = () => {
      imageCache.set(src, tempImg);
      resolve(tempImg);
    };
    tempImg.onerror = reject;
    tempImg.src = src;
  });
}

changeImg.addEventListener("change", async function () {
  const selectedValue = this.value;
  if (selectedValue !== "0") {
    try {
      loader.style.display = "block";
      img.style.opacity = "0";

      const newSrc = album[selectedValue - 1];
      await loadImage(newSrc);

      img.src = newSrc;
      img.style.display = "block";
      requestAnimationFrame(() => {
        img.style.opacity = "1";
      });
    } catch (error) {
      console.error("Không thể tải ảnh:", newSrc);
      img.style.display = "none";
    } finally {
      loader.style.display = "none";
    }
  } else {
    img.style.display = "none";
    loader.style.display = "none";
  }
});

function preloadImages() {
  const preloadPromises = album.map(src => loadImage(src));
  Promise.all(preloadPromises).then(() => {
    console.log("Tất cả ảnh đã được preload");
  }).catch(error => {
    console.error("Lỗi khi preload ảnh:", error);
  });
}

window.addEventListener("load", () => {
  img.style.display = "none";
  loader.style.display = "none";
  preloadImages();
});

// Thêm prefetch cho các ảnh
function addPrefetch() {
  const head = document.head;
  album.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    head.appendChild(link);
  });
}

addPrefetch();
