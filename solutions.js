document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-solution-toggle]').forEach(function (toggle) {
    var content = toggle.querySelector('.solution-content');
    var prompt = toggle.querySelector('.solution-prompt');

    function setVisible(visible) {
      toggle.classList.toggle('solution-visible', visible);
      toggle.setAttribute('aria-expanded', String(visible));
      content.setAttribute('aria-hidden', String(!visible));
      prompt.textContent = visible ? 'Click to hide solution' : 'Click to show solution';
    }

    function toggleVisibility() {
      setVisible(!toggle.classList.contains('solution-visible'));
    }

    toggle.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      toggleVisibility();
    });

    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleVisibility();
      }
    });

    setVisible(false);
  });
});
