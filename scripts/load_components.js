async function loadComponent(id, filePath) {
  try {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  } catch (error) {
    console.error(Failed to load ${filePath}:, error);
  }
}

// Load header, footer, and topic selector
window.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
  loadComponent('topic-selector', 'components/topic-selector.html');
});
