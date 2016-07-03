// Tower of Hanoi solution.
function moveTower(height, fromPole, toPole, withPole){
    if (height >= 1){
        moveTower(height - 1, fromPole, withPole, toPole);
        moveDisk(fromPole, toPole);
        moveTower(height - 1, withPole, toPole, fromPole);
    }
}
function moveDisk(fromPole, toPole){
    console.log('Moving disk from ' + fromPole + ' to ' + toPole + '.');
}
moveTower(3, "A", "B", "C");
