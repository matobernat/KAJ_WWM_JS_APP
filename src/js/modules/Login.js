export class Login {

  handleMenu() {
    const menu = document.querySelector('aside');
    const loginForm = document.querySelector('#login form');

    menu.classList.add('hide');

    loginForm.addEventListener('submit', (e) => {
      window.location.hash = '#dashboard';
      menu.classList.remove('hide');
    });
  }

}
