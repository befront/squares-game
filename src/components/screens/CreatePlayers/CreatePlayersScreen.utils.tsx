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

export const hasSamePlayerNames = (players: PlayerType[]): boolean => {
    const names = players.reduce((result, player) => {
        if (!result[player.name]) {
            result[player.name] = 1;
        } else {
            result[player.name] += 1;
        }

        return result;
    }, {});

    return Math.max.apply(Math, Object.values(names)) > 1;
};