document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.worked-example').forEach(function (example, index) {
    var button = example.querySelector('[data-solution-button]');
    var panel = example.querySelector('[data-solution-panel]');
    var problem = example.querySelector('.problem-statement');
    if (!button || !panel || !problem) return;

    var number = index + 1;
    var problemLabel = document.createElement('p');
    problemLabel.className = 'example-label problem-label';
    problemLabel.innerHTML = '<strong>Problem ' + number + '</strong>';
    problem.insertBefore(problemLabel, problem.firstChild);

    var solutionLabel = document.createElement('p');
    solutionLabel.className = 'example-label solution-label';
    solutionLabel.innerHTML = '<strong>Solution ' + number + '</strong>';
    panel.insertBefore(solutionLabel, panel.firstChild);

    var solutionRow = document.createElement('div');
    solutionRow.className = 'solution-row';
    panel.parentNode.insertBefore(solutionRow, panel);
    solutionRow.appendChild(panel);
    solutionRow.appendChild(button);

    var panelId = 'solution-' + number;
    panel.id = panelId;
    button.setAttribute('aria-controls', panelId);

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
