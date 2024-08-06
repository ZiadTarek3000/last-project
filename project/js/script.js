let intervalId;
let container = document.getElementById('profiles');
let moving = false;

function moveRight() {
    if (!moving) {
        moving = true;
        container.style.justifyContent = 'flex-start';
        container.style.transform = 'translateX(-50%)';
        setTimeout(() => {
            container.appendChild(container.firstElementChild);
            container.style.transition = 'none';
            container.style.transform = 'translateX(0)';
            setTimeout(() => {
                container.style.transition = 'transform 1s ease';
                moving = false;
            }, 50);
        }, 1000);
    }
}

function moveLeft() {
    if (!moving) {
        moving = true;
        container.style.justifyContent = 'flex-end';
        container.insertBefore(container.lastElementChild, container.firstElementChild);
        container.style.transition = 'none';
        container.style.transform = 'translateX(50%)';
        setTimeout(() => {
            container.style.transition = 'transform 1s ease';
            container.style.transform = 'translateX(0)';
            moving = false;
        }, 50);
    }
}

function startRotation() {
    intervalId = setInterval(moveRight, 3000);
}

function stopRotation() {
    clearInterval(intervalId);
}

document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        stopRotation();
        startRotation();
    });
});

startRotation(); // Start auto-rotation on page load

