document.addEventListener('DOMContentLoaded', function() {
    fetch('https://studyspot-io.github.io/a/head.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);
//-------------------------------------------
    fetch('https://studyspot-io.github.io/a/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
});