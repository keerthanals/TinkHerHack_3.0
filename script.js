
 // JavaScript for handling button clicks and image upload
 document.getElementById('generate-btn').addEventListener('click', () => {
    alert('Generate button clicked!');
    // Add logic to generate recycled image options
  });

  document.getElementById('score-btn').addEventListener('click', () => {
    alert('Score button clicked!');
    // Add logic to calculate and display recycle score
  });

  document.getElementById('image-upload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Image uploaded: ${file.name}`);
      // Add logic to process the uploaded image
    }
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  });