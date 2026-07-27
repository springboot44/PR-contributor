export function setupCounter(element) {
  let count = 0;
  const increment = () => {
    count++;
    updateDisplay();
  };

  const updateDisplay = () => {
    element.innerHTML = `count is ${count}`;
  };

  element.addEventListener('click', increment);
  updateDisplay();
}