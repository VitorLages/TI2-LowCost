
const loginPath = 'Perfil2.html';

function initCreateUser() {
  const formCreate = document.querySelector('[data-form="create"]');
  const successMessage = document.querySelector('[data-form="success"]');

  function createUser(e) {
    e.preventDefault();

    const nameValue = document.querySelector('[data-create="name"]').value;
    const loginValue = document.querySelector('[data-create="login"]').value;
    const emailValue = document.querySelector('[data-create="email"]').value;
    const passwordValue = document.querySelector('[data-create="password"]').value;

    const listUsers = JSON.parse(localStorage.getItem('sistema:users') || '');
    const newUser = {
        name: nameValue,
        login: loginValue,
        email: emailValue,
        password: passwordValue
      }
    ;

    listUsers.users.push(newUser);

    localStorage.setItem('sistema:users', JSON.stringify(listUsers));
    successMessage.classList.remove('hide');
  }

  if(formCreate) {
    formCreate.addEventListener('submit', createUser)
  }
}

function initListUsers() {
  const listWrapper = document.querySelector('[data-list="wrapper"]');
  let usersList = '';

  if(listWrapper) {
    const listUsers = JSON.parse(localStorage.getItem('sistema:users') || '');

    listUsers.users.map(user => {
      const userInfos = `
        <tr>
          <td>${user.name}</td>
          <td>${user.login}</td>
          <td>${user.email}</td>
        </tr>
      `
      return usersList+= userInfos;
    });

    listWrapper.innerHTML = usersList;
  }
}

function initLogin() {
  const formLogin = document.querySelector('[data-form="login"]');
  const errorMessage = document.querySelector('[data-form="error"]');

  function login(e) {
    e.preventDefault();

    const loginValue = document.querySelector('[data-login="login"]').value;
    const passwordValue = document.querySelector('[data-login="password"]').value;

    const usersList = JSON.parse(localStorage.getItem('sistema:users') || '');

    const isUserRight = usersList.users.find((user) => (loginValue == user.login && passwordValue == user.password));

    if(isUserRight) {
      const isLoggedIn = true;
      localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));

      const userInfo = {name: isUserRight.name};
      localStorage.setItem('sistema:userInfo', JSON.stringify(userInfo));

      window.location = loginPath;
    }

    if(!isUserRight && errorMessage) {
      errorMessage.classList.remove('hide');
    }

  }

  if(formLogin) {
    formLogin.addEventListener('submit', login)
  }
}


function initLogout() {
  const logoutButton = document.querySelector('[data-logout]');

  function logout(e) {
    e.preventDefault();

    const isLoggedIn = false;
    localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));
    window.location = loginPath;
  }

  if(logoutButton) {
    logoutButton.addEventListener('click', logout)
  }
}

function initStartSistem() {

  async function starting() {
    try {
      if(!localStorage.getItem('sistema:users')) {
        const listUsers = {
          "users": [
            {
              "name": "Lucas",
              "login": "Admin",
              "email": "lucas@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo1",
              "login": "exemplo1",
              "email": "exemplo1@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo2",
              "login": "exemplo2",
              "email": "exemplo2@gmail.com",
              "password": "123"
            },
            {
              "name": "exemplo3",
              "login": "exemplo3",
              "email": "exemplo3@gmail.com",
              "password": "123"
            }
          ]
        }

        localStorage.setItem('sistema:users', JSON.stringify(listUsers));
        initListUsers();
      }

      if(!localStorage.getItem('sistema:isLoggedIn')) {
        const isLoggedIn = false;

        localStorage.setItem('sistema:isLoggedIn', JSON.stringify(isLoggedIn));
      }

      if(localStorage.getItem('sistema:isLoggedIn')) {
        const isLoggedIn = JSON.parse(localStorage.getItem('sistema:isLoggedIn') || '');

      //  if(isLoggedIn && window.location.pathname == '/') {
      //    window.location = window.location.href+='sistema';
      //  }

      //  if(!isLoggedIn && window.location.pathname == '/sistema/') {
      //    window.location = loginPath;
      //  }
      }
    } catch (e) {
      console.error(e)
    }
 }

  starting();

}

function initWellcome() {
  const wellcomeBox = document.querySelector('[data-wellcome]');

  function wellcome() {
    const userInfo = JSON.parse(localStorage.getItem('sistema:userInfo') || '');

    wellcomeBox.innerHTML = 'Olá ' + userInfo.name;
  }

  if(wellcomeBox) {
    wellcome();
  }
}

class Modal {
  constructor(containerModal, openBtn, closeBtn) {
    this.containerModal = document.querySelector(containerModal);
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.classActive = 'active';

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  open(e) {
    e.preventDefault();
    this.containerModal.classList.add(this.classActive);
  }

  close() {
    this.containerModal.classList.remove(this.classActive);
  }

  clickOut(e) {
    if (e.target === this.containerModal) this.close();
  }

  addModalEvent() {
    this.containerModal.addEventListener('click', this.clickOut);
    this.openBtn.addEventListener('click', this.open);
    this.closeBtn.addEventListener('click', this.close);
  }

  init() {
    if (this.containerModal && this.openBtn && this.closeBtn) {
      this.addModalEvent();
    }
    return this;
  }
}

function goToOtherPerfilIfAlreaddyLogged() {
  const storageValue = localStorage.getItem('sistema:userInfo');
  if (!storageValue) return;

  const hasUser = JSON.parse(storageValue);
  if (!hasUser) return;

  window.location = loginPath;


}

const modal = new Modal('.modal-overlay', '[data-modal="open"]', '[data-modal="close"]');
modal.init();


initStartSistem();
initCreateUser();
initListUsers();
initLogin();
initLogout();
initWellcome();

goToOtherPerfilIfAlreaddyLogged();