let index = 0; // Keep track of which item is currently visible

const items = document.querySelectorAll('.switch-list li'); // All the <li>s
const images = document.querySelectorAll('.switch-list img');

images.forEach(img => {
  img.addEventListener('click', () => {
    items[index].classList.remove('visible');
    index = (index + 1) % items.length;
    items[index].classList.add('visible');
  });
});
