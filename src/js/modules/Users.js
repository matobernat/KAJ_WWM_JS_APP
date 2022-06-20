const Permissions = {
  admin: 'admin',
  user: 'user',
  none: 'none'
};

const errorUser = [{
  login: 'error',
  password: 'error',
  permissions: Permissions.none,
  logged: false
}];

const users = [{
  login: 'manager',
  password: 'haha',
  permissions: Permissions.admin,
  logged: false
}, {
  login: 'worker',
  password: 'haha',
  permissions: Permissions.user,
  logged: false
}
];


const usersKey = 'Users';

export class Users {
  permissions = Permissions;

  init() {
    if (!localStorage.getItem(usersKey)) {
      localStorage.setItem(usersKey, JSON.stringify(users));
    }
  }

  getCurrentUser() {
    const users = this.getUsers();
    return users.find(user => user.logged);
  }

  getUsers() {
    if (!localStorage.getItem(usersKey)) {
      console.log('login ERROR');
      return errorUser;
    } else {
      return JSON.parse(localStorage.getItem(usersKey));
    }
  }


  putUsers(users) {
    localStorage.setItem(usersKey, JSON.stringify(users));
    if (users === this.getUsers()) {
      return true;
    }
    return false;
  }

  authenticate(login, password) {
    if (!localStorage.getItem(usersKey)) {
      console.log('login ERROR');
      return Permissions.none;
    }

    let storedUsers = JSON.parse(localStorage.getItem(usersKey));
    let logged = storedUsers.filter(user => {
      if (user.login == login && user.password == password) {
        user.logged = true;
        this.putUsers(storedUsers);
        return true;
      }
      return false;
    });
    if (logged.length > 0) {
      return logged[0].permissions;
    }
    return Permissions.none;
  }


}


