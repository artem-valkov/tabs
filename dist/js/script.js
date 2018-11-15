(function () {
  const homeTab = document.querySelector('[data-tab=home]');
  const accountTab = document.querySelector('[data-tab=account]')
  const contactTab = document.querySelector('[data-tab=contact]')
  homeTab.addEventListener('click',function(event) {
    event.preventDefault();
    document.querySelector('[data-content=home]').classList.remove('none');
    document.querySelector('[data-content=account]').classList.add('none');
    document.querySelector('[data-content=contact]').classList.add('none');
  });
  accountTab.addEventListener('click',  function(event) {
    event.preventDefault();
    document.querySelector('[data-content=home]').classList.add('none');
    document.querySelector('[data-content=account]').classList.remove('none');
    document.querySelector('[data-content=contact]').classList.add('none');
  });
  contactTab.addEventListener('click',  function(event) {
    event.preventDefault();
    document.querySelector('[data-content=home]').classList.add('none');
    document.querySelector('[data-content=account]').classList.add('none');
    document.querySelector('[data-content=contact]').classList.remove('none');
  });
})();
