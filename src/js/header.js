// import owner from './owner';
document.addEventListener('DOMContentLoaded', ifLoaded);
function ifLoaded(evt) {
  refHeader = document.querySelector('.header');
  refHeaderMenu = document.querySelector('.header__menu-list');
  refHeaderMenu.addEventListener('click', onClickHeaderMenu);
  refLibraryBtn = document.querySelector('.my-library-buttons');
  const activeClass = refHeaderMenu.querySelector('.is-active');
  if (activeClass) {
    activeClass.classList.remove('is-active');
  }

  switch (document.location.pathname) {
    case '/':
      refHeaderMenu
        .querySelector("[data-menu='home']")
        .classList.add('is-active');
      refLibraryBtn.classList.add('is-hidden');
      if (refHeader.classList.contains('library')) {
        refHeader.remove('library');
      }
      break;

    case '/myLibrary.html':
      refHeaderMenu
        .querySelector("[data-menu='my-library']")
        .classList.add('is-active');
      if (refLibraryBtn.classList.contains('is-hidden')) {
        refLibraryBtn.remove('is-hidden');
      }
      refHeader.classList.add('.library');

      break;
  }
}

function onClickHeaderMenu(evt) {
  if (
    (evt.target.dataset.menu === 'home' &&
      document.location.pathname === '/') ||
    (evt.target.dataset.menu === 'home' &&
      document.location.pathname === '/index.html') ||
    (evt.target.dataset.menu === 'my-library' &&
      document.location.pathname === '/myLibrary.html')
  ) {
    evt.preventDefault();

    console.log(evt);
    console.log(document.location.pathname);

    return;
  }
  console.log(evt);
  console.log(document.location.pathname);
  evt.currentTarget.removeEventListener('click', onClickHeaderMenu);
}
