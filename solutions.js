document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.worked-example').forEach(function (example) {
    var button = example.querySelector('[data-solution-button]');
    var panel = example.querySelector('[data-solution-panel]');
    if (!button || !panel) return;

    function setVisible(visible) {
      panel.classList.toggle('solution-visible', visible);
      panel.style.visibility = visible ? 'visible' : 'hidden';
      panel.style.opacity = visible ? '1' : '0';
      panel.style.pointerEvents = visible ? 'auto' : 'none';
      panel.setAttribute('aria-hidden', String(!visible));
      button.setAttribute('aria-expanded', String(visible));
      button.textContent = visible ? 'Click to hide solution' : 'Click to show solution';
    }

    button.addEventListener('click', function () {
      setVisible(button.getAttribute('aria-expanded') !== 'true');
    });

    setVisible(false);
  });
});
