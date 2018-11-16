(function () {
  const tabs = document.querySelectorAll('.navTab__links');
  const content = document.querySelectorAll('.tabPanel');
  document.querySelector('a[data-tab=home]').focus();
  for (let t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener('click', (event) => {
      event.preventDefault();
      for (let c = 0; c < content.length; c++) {
        if (content[c].dataset.content === tabs[t].dataset.tab) {
          content[c].classList.remove('hide');
          tabs[t].classList.add('active');
        } else {
          content[c].classList.add('hide');
          tabs[t].classList.remove('active');
        }
      }
    });
  }
}());
