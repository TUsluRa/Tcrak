// script.js
let playerScore = 0;
let computerScore = 0;

function game(playerChoice) {
    const choices = ['Taş', 'Kağıt', 'Makas'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice == computerChoice) {
        document.getElementById('result').innerText = 'Berabere!';
    } else if (
        (playerChoice == 'Taş' && computerChoice == 'Makas') ||
        (playerChoice == 'Kağıt' && computerChoice == 'Taş') ||
        (playerChoice == 'Makas' && computerChoice == 'Kağıt')
    ) {
        playerScore++;
        document.getElementById('result').innerText = 'Kazandınız!';
    } else {
        computerScore++;
        document.getElementById('result').innerText = 'Kaybettiniz!';
    }

    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
}
