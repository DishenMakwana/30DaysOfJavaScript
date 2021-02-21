const triggers = document.querySelectorAll('a');
const highlights = document.createElement('span');

highlights.classList.add('highlights');
document.body.append(highlights);

function highlightLink() {
    // console.log(this);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    const coords = {
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.top + window.scrollX,
    }

    highlights.style.width = `${coords.width}px`;
    highlights.style.height = `${coords.height}px`;
    highlights.style.transform = `translate( ${coords.left}px , ${coords.top}px)`;
}

triggers.forEach(a => {
    a.addEventListener('mouseenter', highlightLink);
});
