document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-container').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-container').innerHTML = data);
});