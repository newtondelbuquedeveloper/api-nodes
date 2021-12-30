export function rangeTemperature(value) {
    let songGener = ''
    if (value > 15 && value < 30) {
        songGener = 'pop'
    } else if (value > 10 && value < 14) {
        songGener = 'rock'
    } else if (value < 14) {
        songGener = 'classical'
    } else {
        songGener = 'party'
    }
    return songGener;
}