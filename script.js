const nameElement = document.getElementById('name');

nameElement.addEventListener('click', () => {
    // Generate random positions within the viewport
    const x = Math.random() * (window.innerWidth - nameElement.offsetWidth);
    const y = Math.random() * (window.innerHeight - nameElement.offsetHeight);

    // Move the name element to the new position
    nameElement.style.transform = `translate(${x}px, ${y}px)`;
});
