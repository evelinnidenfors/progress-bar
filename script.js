window.onload = () => {
  const updateProgressWidth = (active, total) => {
    const progressPercentage = (active - 1) / (total - 1) * 100;
    console.log((active - 1) / (total - 1) * 100);
    document.getElementById("progress").style.width = `${progressPercentage}%`;

    console.log(document.getElementById("progress").style.width);
  };

  document.getElementById("next-btn").onclick = () => {
    let activeCircles = document.getElementsByClassName("circle active");
    let circles = document.getElementsByClassName("circle");

    if (activeCircles.length === circles.length  - 1) {
      document.getElementById("next-btn").disabled = true;
    }
    if (activeCircles.length < circles.length) {
      circles[activeCircles.length].classList.add("active");
      document.getElementById("previous-btn").disabled = false;
    }
    updateProgressWidth(activeCircles.length, circles.length);
  };

  document.getElementById("previous-btn").onclick = () => {
    let activeCircles = document.getElementsByClassName("circle active");
    let circles = document.getElementsByClassName("circle");

    if (activeCircles.length > 1) {
      circles[activeCircles.length - 1].classList.remove("active");
      document.getElementById("next-btn").disabled = false;
    }
    if (activeCircles.length === 1) {
      document.getElementById("previous-btn").disabled = true;
    }
    updateProgressWidth(activeCircles.length, circles.length);
  };
}