// show/hide script for project buttons
(function(){
  const buttons = document.querySelectorAll('.project-group .project');
  const cards = document.querySelectorAll('.projects-grid .card');

  function showProject(id){
    cards.forEach(c => c.classList.toggle('show', c.dataset.project === id));
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showProject(btn.dataset.project);
    });
  });

  // initialize: show first project
  if(buttons.length){
    buttons[0].classList.add('active');
    showProject(buttons[0].dataset.project);
  }
})();
