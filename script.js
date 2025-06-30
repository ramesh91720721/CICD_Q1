function changeImage() {
    const img = document.getElementById("mainImage");
    const timestamp = new Date().getTime(); // Prevent caching
    img.src = `https://source.unsplash.com/featured/?nature&${timestamp}`;
  }
  