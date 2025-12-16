const keys = document.querySelectorAll('.key');

// Preload audio
const sounds = {};

keys.forEach(key => {
    const note = key.dataset.note;
    sounds[note] = new Audio(`sounds/${note}.mp3`);
});

// Play function
function playNote(note, keyElement) {
    const sound = sounds[note];
    sound.currentTime = 0; // replay instantly
    sound.play();

    keyElement.classList.add('active');
    setTimeout(() => keyElement.classList.remove('active'), 120);
}

// Mouse click
keys.forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.dataset.note, key);
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if (!key) return;

    playNote(key.dataset.note, key);
});
