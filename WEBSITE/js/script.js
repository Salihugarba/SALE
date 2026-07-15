// Ammar Bin Yaseer Islamiyya — shared site script

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Contact form (front-end only — no backend configured yet)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-status');
      var name = form.querySelector('#name').value.trim();
      if (note) {
        note.textContent = 'Jazakumullahu khairan, ' + (name || 'brother/sister') +
          '. Your message has been noted. Please call ' +
          '07062413803 for an urgent reply until the online form is connected.';
        note.style.color = '#0F4C3A';
      }
      form.reset();
    });
  }

});
