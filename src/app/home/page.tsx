/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: var(--font-geist-sans), sans-serif;
  background-color: #f0f8ff; /* Light blue background for a calming feel */
  color: #2d3748; /* Dark gray text for easy readability */
}

h1, h2, h3 {
  font-family: var(--font-geist-mono), monospace;
  color: #2b6cb0; /* Calming blue for headings */
}

a {
  color: #3182ce; /* Soft blue for links */
  transition: color 0.3s;
}

a:hover {
  color: #63b3ed; /* Lighter blue on hover */
}
