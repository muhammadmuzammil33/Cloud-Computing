const nameElement = document.getElementById('name');

nameElement.addEventListener('click', () => {
    // Get the width and height of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate maximum x and y positions
    const maxX = viewportWidth - nameElement.offsetWidth;
    const maxY = viewportHeight - nameElement.offsetHeight;

    // Generate random positions within the viewport
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Move the name element to the new position
    nameElement.style.transform = `translate(${x}px, ${y}px)`;
});
