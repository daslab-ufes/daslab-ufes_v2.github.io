const dotContainer = document.getElementById('dot_container');

// Function to create a single dot with a specified color
const createDot = (color) => {
  const dot = document.createElement("div");
  dot.className = 'parallax dot';
  const x_location = Math.random() * 100 + '%';
  const y_location = Math.random() * 130 + '%';
  const distance = Math.random();
  const speed = 0.085 * distance;
  const size = 0.001 * distance + 2 + 'px';
  const opacity = distance * 40 + 20 + '%';
  dot.style.cssText = `
    bottom: ${y_location};
    left: ${x_location};
    position: fixed;
    background-color: ${color};
    height: ${size};
    width: ${size};
    opacity: ${opacity};
  `;
  dot.setAttribute('data-speed', speed);
  dotContainer.appendChild(dot);
  return dot;
};

// Function to update the dot location
const updateDotLocation = (dot) => {
  const x_location = Math.random() * 100 + '%';
  const y_location = Math.random() * 130 + '%';
  dot.style.bottom = y_location;
  dot.style.left = x_location;
};

// Function to handle dot fade-out and update location
const handleDotFadeOut = (dot) => {
  TweenMax.to(dot, 0.2, { opacity: 0, onComplete: () => {
    updateDotLocation(dot);
    TweenMax.set(dot, { opacity: dot.getAttribute('data-speed') });
    TweenMax.to(dot, 0.2, { opacity: 1 });
  }});
};

// Create initial dots with different colors
const dotColors = ['#3459e6', '#00a2ff', '#f1bd92', '#ffffff', '#a1a19b']; // Add more colors as needed
for (let i = 0; i < 251; i++) {
  const color = dotColors[Math.floor(Math.random() * dotColors.length)];
  const dot = createDot(color);
  TweenMax.set(dot, { opacity: 0 });
}

$('html').mousemove(function (e) {
  var wx = $(window).width();
  var wy = $(window).height();
  var x = e.pageX - this.offsetLeft;
  var y = e.pageY - this.offsetTop;
  var newx = x - wx / 2;
  var newy = y - wy / 2;

  $('.parallax').each(function () {
    var speed = $(this).attr('data-speed');
    if ($(this).attr('data-revert')) speed *= -1;
    TweenMax.to($(this), 0.2, { x: (0.2 - newx * speed), y: (0.2 - newy * speed) });
  });
});

// Shuffle the dots array
const dots = Array.from(document.getElementsByClassName('parallax dot'));
shuffleArray(dots);

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Fade in dots at different times
dots.forEach((dot, index) => {
  const delay = index * 0.1;
  TweenMax.to(dot, 0.2, { opacity: dot.getAttribute('data-speed'), delay });
});

// Fade out and update dot location every 0.1 seconds
setInterval(() => {
  const dot = dots.pop();
  handleDotFadeOut(dot);
  dots.unshift(dot);
}, 100);