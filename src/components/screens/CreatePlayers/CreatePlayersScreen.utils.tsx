export const hasPlayersNames = (players: PlayerType[]): boolean => {
    let namesCount = 0;

    for (let i = 0; i < players.length; i++) {
        const player = players[i];

        if (!player.name) {
            return false;
        }

        namesCount += 1;
    }

    return namesCount >= 2;
}