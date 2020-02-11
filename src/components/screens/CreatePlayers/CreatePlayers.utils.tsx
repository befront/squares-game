export const hasPlayersNames = (players: PlayersType): boolean => {
    let namesCount = 0;

    const playersArr = Object.values(players);

    for (let i = 0; i < playersArr.length; i++) {
        const player = playersArr[i];

        if (!player.name) {
            return false;
        }

        namesCount += 1;
    }

    return namesCount === playersArr.length;
}