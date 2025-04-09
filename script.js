function goToSecondPage() {
    document.getElementById('first-page').style.display = 'none';
    document.getElementById('second-page').style.display = 'block';
}

function moveButton() {
    const button = document.getElementById('no-button');
    const container = document.querySelector('.container');
    
    const containerWidth = container.clientWidth - button.clientWidth;
    const containerHeight = container.clientHeight - button.clientHeight;

    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}