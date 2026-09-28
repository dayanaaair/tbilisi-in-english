const navSections = [...document.querySelectorAll('[data-nav]')];
const navLabel = document.querySelector('.trip-progress__label');
const navCount = document.querySelector('.trip-progress__count');

function update() {
  const pageMax = document.documentElement.scrollHeight - innerHeight;
  const pageProgress = pageMax > 0 ? scrollY / pageMax : 0;
  document.documentElement.style.setProperty('--page-progress', `${pageProgress * 100}%`);

  const focusY = innerHeight * .4;
  let active = navSections[0];
  navSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= focusY) active = section;
  });
  if (active) {
    navLabel.textContent = active.dataset.nav;
    navCount.textContent = active.dataset.count;
  }
}

update();

addEventListener('scroll', update, { passive: true });
addEventListener('resize', update);
