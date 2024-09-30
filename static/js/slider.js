const slider = document.getElementById('slider');
const image2 = document.getElementById('image2');
let isDragging = false;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateSlider(e);
    }
});

function updateSlider(e) {
    const rect = slider.parentElement.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Constrain the slider within the bounds
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;

    slider.style.left = `${percentage}%`;
    image2.style.clip = `rect(0, ${percentage}%, auto, 0)`;
}

// const slider = document.getElementById('slider');
// const leftImage = document.querySelector('.img-left');
// const rightImage = document.querySelector('.img-right');
// // const container = document.querySelector('.image-container');

// let isDragging = false;

// function updateClip(event) {
//     if (!isDragging) return;

//     const containerRect = slider.parentElement.getBoundingClientRect();
//     const offsetX = event.clientX - containerRect.left;
//     const percentage = offsetX / containerRect.width;

//     // Update the clip for both images
//     leftImage.style.clip = `rect(0, ${percentage * 100}%, 100%, 0)`;
//     rightImage.style.clip = `rect(0, 100%, 100%, ${percentage * 100}%)`;
//     slider.style.left = `${percentage * 100}%`;
// }

// // Mouse events
// slider.addEventListener('mousedown', () => {
//     isDragging = true;
// });

// document.addEventListener('mouseup', () => {
//     isDragging = false;
// });

// document.addEventListener('mousemove', updateClip);

// // Touch events for mobile
// slider.addEventListener('touchstart', () => {
//     isDragging = true;
// });

// document.addEventListener('touchend', () => {
//     isDragging = false;
// });

// document.addEventListener('touchmove', (event) => {
//     if (isDragging) {
//         const touch = event.touches[0];
//         const containerRect = slider.parentElement.getBoundingClientRect();
//         const offsetX = touch.clientX - containerRect.left;
//         const percentage = offsetX / containerRect.width;

//         leftImage.style.clip = `rect(0, ${percentage * 100}%, 100%, 0)`;
//         rightImage.style.clip = `rect(0, 100%, 100%, ${percentage * 100}%)`;
//         slider.style.left = `${percentage * 100}%`;
//     }
// });
