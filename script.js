window.onload = () => {
  const NEXT_BTN_ID = "next-btn";
  const PREV_BTN_ID = "previous-btn";
  const PROGRESS_ID = "progress";
  const CIRCLE_CLASS = "circle";
  const ACTIVE_CIRCLE_CLASS = "active"

  const updateProgressWidth = (active, total) => {
    const progressPercentage = (active - 1) / (total - 1) * 100;

    document.getElementById(PROGRESS_ID).style.width = `${progressPercentage}%`;
  };

  document.getElementById(NEXT_BTN_ID).onclick = () => {
    let activeCircles = document.getElementsByClassName(`${CIRCLE_CLASS} ${ACTIVE_CIRCLE_CLASS}`);
    let circles = document.getElementsByClassName(CIRCLE_CLASS);

    const isLastElement = activeCircles.length === circles.length  - 1;
    if (isLastElement) {
      document.getElementById(NEXT_BTN_ID).disabled = true;
    }
    const shouldActivateNextCircle = activeCircles.length < circles.length;
    if (shouldActivateNextCircle) {
      circles[activeCircles.length].classList.add(ACTIVE_CIRCLE_CLASS);
      document.getElementById(PREV_BTN_ID).disabled = false;
    }
    updateProgressWidth(activeCircles.length, circles.length);
  };

  document.getElementById(PREV_BTN_ID).onclick = () => {
    let activeCircles = document.getElementsByClassName(`${CIRCLE_CLASS} ${ACTIVE_CIRCLE_CLASS}`);
    let circles = document.getElementsByClassName(CIRCLE_CLASS);

    const isNotInitialState = activeCircles.length > 1;

    if (isNotInitialState) {
      circles[activeCircles.length - 1].classList.remove(ACTIVE_CIRCLE_CLASS);
      document.getElementById(NEXT_BTN_ID).disabled = false;
    }
    const isLowestActiveCircle = activeCircles.length === 1;
    if (isLowestActiveCircle) {
      document.getElementById(PREV_BTN_ID).disabled = true;
    }
    updateProgressWidth(activeCircles.length, circles.length);
  };
}