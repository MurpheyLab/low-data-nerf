const slider = document.getElementById('slider');
const leftImage = document.querySelector('.img-left');
const rightImage = document.querySelector('.img-right');
const container = document.querySelector('.container');

let isDragging = false;

function updateClip(event) {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const percentage = offsetX / containerRect.width;

    // Update the clip for both images
    leftImage.style.clip = `rect(0, ${percentage * 100}%, 100%, 0)`;
    rightImage.style.clip = `rect(0, 100%, 100%, ${percentage * 100}%)`;
    slider.style.left = `${percentage * 100}%`;
}

// Mouse events
slider.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', updateClip);

// Touch events for mobile
slider.addEventListener('touchstart', () => {
    isDragging = true;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

document.addEventListener('touchmove', (event) => {
    if (isDragging) {
        const touch = event.touches[0];
        const containerRect = container.getBoundingClientRect();
        const offsetX = touch.clientX - containerRect.left;
        const percentage = offsetX / containerRect.width;

        leftImage.style.clip = `rect(0, ${percentage * 100}%, 100%, 0)`;
        rightImage.style.clip = `rect(0, 100%, 100%, ${percentage * 100}%)`;
        slider.style.left = `${percentage * 100}%`;
    }
});
