export class Login {

  handleMenu() {
    const menu = document.querySelector('aside');
    const loginButton = document.querySelector('#login-button');

    menu.classList.add('hide');

    loginButton.addEventListener('click', () => {
      menu.classList.remove('hide');
    });
  }

}
