const album = [
  "./image/0.png",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F1.png?alt=media&token=16a78d21-4c43-4bb1-a7f6-56b59dbf237f",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F2.png?alt=media&token=27c9645c-4c34-4d66-a121-b75ec3411624",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F3.png?alt=media&token=b7389b8e-5b6d-444e-9402-b1664dc93e6b",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F4.png?alt=media&token=f0b3ce8e-5a01-4ee7-9366-b81eed6bbee3",
  "https://firebasestorage.googleapis.com/v0/b/blog-upload-image.appspot.com/o/mymoon%2F5.png?alt=media&token=d1603afe-2380-409c-b29f-742cf17792de",
];

document.getElementById('changeImg').addEventListener('change', function() {
  const img = document.getElementById('img');
  const loader = document.getElementById('loader');
  const selectedValue = this.value;
  
  loader.style.display = 'block';
  img.style.opacity = '0';
  
  const newSrc = `https://cloudflareimages.your-domain.com/image-id-${selectedValue}`;
  
  img.onload = function() {
    loader.style.display = 'none';
    img.style.opacity = '1';
  };
  
  img.src = newSrc;
});
