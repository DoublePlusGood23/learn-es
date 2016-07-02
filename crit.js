// https://www.reddit.com/r/dailyprogrammer/comments/4nvrnx/20160613_challenge_271_easy_critical_hit/?ref=share&ref_source=link

console.log(critHit(100,200));

function critHit(die, health) {
    let chance = 1;
    while (health > die) {
        chance *= 1.0 / die;
        health -= die;
    }
    if (health > 0) {
        chance *= (1.0 + die - health) / die;
    }
    return chance;
}
