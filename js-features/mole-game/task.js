document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const killedCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');

    let killed = parseInt(killedCounter.innerText);
    let lost = parseInt(lostCounter.innerText);

    holes.forEach((hole) => {
        hole.addEventListener('click', () => {
            if (checkHit(hole)) {
                killed = killed + 1;
                updateStatistic(killed, killedCounter);
            } else {
                lost = lost + 1;
                updateStatistic(lost, lostCounter);
            }

            processGame(killed, lost);
        });
    })
});

function checkHit(hole) {
    return hole.classList.contains('hole_has-mole');
}

function updateStatistic(count, counter) {
    counter.innerText = count;
}

function processGame(killed, lost) {
    if (killed === 10) {
        alert('Вы выиграли!');
        return;
    }

    if (lost === 5) {
        alert('Вы проиграли!');
    }
}
