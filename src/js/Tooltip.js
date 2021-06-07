export default class Tooltip {
  constructor() {
    this.target = null;
  }

  create(target) {
    this.target = target;

    this.element = document.createElement('div');
    this.element.classList.add('tooltip');
    this.element.innerHTML = `
      <div class="tooltip__arrow"></div>
      <h3 class="tooltip__header">${this.target.title}</h3>
      <div class="tooltip__body">${this.target.dataset.content}</div>
    `;
    document.body.appendChild(this.element);

    this.getPosition();
    window.addEventListener('resize', this.getPosition.bind(this));

    this.timeout = setTimeout(() => this.remove(), 5000);
  }

  getPosition() {
    const { left, bottom } = this.target.getBoundingClientRect();

    this.element.style.left = `${window.scrollX + left + this.target.offsetWidth / 2 - this.element.offsetWidth / 2}px`;
    this.element.style.bottom = `${window.scrollY + bottom + 8}px`;
  }

  remove() {
    this.element.remove();
  }
}
