const inputs = document.querySelectorAll('.controls input');

function handleUpdates() {
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || ''; // '' for data-sizing is not for color picker so we need to define it null.

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));