import Tooltip from './Tooltip';

const tooltip = new Tooltip();

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('widget__btn')) {
    const isVisible = document.querySelector('.tooltip');

    if (!isVisible) {
      tooltip.create(event.target);
    } else {
      isVisible.remove();
      clearTimeout(tooltip.timeout);
    }
  }
});
