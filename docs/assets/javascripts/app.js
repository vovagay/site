import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

let confettiIndex = 0;
const emojis = ['🦄', '🌈', '💖', '✨', '🎉', '💫', '🌸' ]

window.launchConfetti = () => {
  if (confettiIndex === 0) {
    jsConfetti.addConfetti()
  } else {
    jsConfetti.addConfetti({ emojis: [emojis[confettiIndex - 1]] })
  }
  confettiIndex = (confettiIndex + 1) % (emojis.length + 1);
}

setInterval(window.launchConfetti, 750)