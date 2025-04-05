function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  }
  
  const themeToggleBtn = document.getElementById('themeToggle');
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
  