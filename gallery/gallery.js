
```javascript
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    // Get the image that was clicked
    const clickedImage = e.target;

    // Make sure the user clicked an image
    if (clickedImage.tagName !== 'IMG') {
        return;
    }

    // Get the image source and replace "-sm" with "-lg"
    const imageSrc = clickedImage.src.replace('-sm', '-lg');

    // Set the modal image source and alt text
    modalImage.src = imageSrc;
    modalImage.alt = clickedImage.alt;

    // Open the modal
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
```
