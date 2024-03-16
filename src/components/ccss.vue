HTML CSS JSResult Skip Results Iframe
EDIT ON
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
}

#wrapper {
  width: 100%;
  max-width: 964px;
  position: relative;
}

#carousel {
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

#carousel::-webkit-scrollbar {
  height: 0;
}

#prev,
#next {
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  position: absolute;
}

#prev {
  top: 50%;
  left: 0;
  transform: translate(50%, -50%);
  display: none;
}

#next {
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

#content {
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  margin: auto;
  box-sizing: border-box;
}

.item {
  width: 180px;
  height: 180px;
  background: green;
}


Resources

<script>
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
</script>