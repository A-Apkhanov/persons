const header = document.querySelector('.header');

class Header {
  constructor(header) {
    this._header = header;
    this._burger = this._header.querySelector('.header_burger');
    this._user = this._header.querySelector('.header_user');
    this._navigation = this._header.querySelector('.header_navigation');

    this.handleClickBurger();
  }

  toggleActive() {
    this._header.classList.toggle('active');
    this._burger.classList.toggle('active');
    this._user.classList.toggle('active');
    this._navigation.classList.toggle('active');
  }

  handleClickBurger() {
    this._burger.addEventListener('click', () => this.toggleActive())
  }
}

new Header(header);
