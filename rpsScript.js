const computerPlay = () => {
	const rpsArray = ['rock', 'paper', 'scissors'];
	return rpsArray[Math.floor(Math.random() * 3)];
};

/*
2 selections, player and computer
total 3 available guesses, Rock, paper and scissors
if the playerSelection is 'paper', then the winner is scissors, and the tie is playerSelection
if the computerSelection is scissors, return winner, else if the computerSelection is playerSelection, return tie, else return loser
and so on
*/

const playRound = (playerSelection, computerSelection) => {
	if (playerSelection === computerSelection) {
		return 0;
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return 1;
	} else return 2;
};

const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Enter Rock, Paper or Scissors').toLowerCase();
		let computerSelection = computerPlay();

		const roundResult = playRound(playerSelection, computerSelection);

		switch (roundResult) {
			case 0:
				console.log(`[${i + 1}] No Winners, it is a Tie`);
				break;
			case 1:
				playerScore++;
				console.log(
					`[${
						i + 1
					}] Player is the Winner, ${playerSelection} beats ${computerSelection}`
				);
				break;
			case 2:
				computerScore++;
				console.log(
					`[${
						i + 1
					}] Computer is the Winner, ${computerSelection} beats ${playerSelection}`
				);
				break;
		}
	}

	if (playerScore > computerScore) {
		console.log(`Player is the winner, ${playerScore}-${computerScore}`);
	} else {
		console.log(`Computer is the winner, ${computerScore}-${playerScore}`);
	}
};

game();
