const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {

        // 1. remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // 2. remove active from all contents
        contents.forEach(c => c.classList.remove('active'));

        // 3. activate clicked tab
        tab.classList.add('active');

        // 4. get the number of this tab
        const tabNumber = tab.dataset.tab;

        // 5. find the matching content and show it
        document.querySelector(`.content[data-content="${tabNumber}"]`)
            .classList.add('active');
    });
});