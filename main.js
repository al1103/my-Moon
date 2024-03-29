const img = document.getElementById("img");
document.getElementById("changeImg").addEventListener("change", function() {
    img.src = `./image/${this.value}.png`;
})