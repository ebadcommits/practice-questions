const menuBtn = document.querySelector('#menuBtn');
const dropdown = document.querySelector('#dropdown');

// 1. toggle dropdown
menuBtn.addEventListener('click', function(e) {
    dropdown.classList.toggle('hidden');
    e.stopPropagation();
});

// 2. clicking inside dropdown shouldn't close it
dropdown.addEventListener('click', function(e) {
    e.stopPropagation();
});

// 3. clicking outside closes dropdown
document.addEventListener('click', function() {
    dropdown.classList.add('hidden');
});