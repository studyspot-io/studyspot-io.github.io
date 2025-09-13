document.addEventListener('DOMContentLoaded', function() {
    fetch('https://studysphead.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data);

    fetch('https://studyspot-io.github.io/a/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
});