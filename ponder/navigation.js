```javascript
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('hide');
    menuButton.classList.toggle('change');

    const isOpen = !navigation.classList.contains('hide');

    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});
```
