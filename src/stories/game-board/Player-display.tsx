// component that renders a player in the game
export type PlayerProps = {
    name: string;
    hasFoundPlayer: boolean;    // Whether we have found a actual player for this player display or if we are still waiting for a player to join the game.
    isReady?: boolean;           // player has played a card and is waiting for other players to play a card so the round can continue.
    color?: string;              // which color the player will show as.
    score?: number;              // how many points the player has.
};

const PlayerDisplay = ( player:PlayerProps ) => {

    const renderWaitingForPlayer = () => {
        if (!player.hasFoundPlayer) {
            return <div>Waiting for players...</div>
        } else {
            return <div>
                <span style={{ color: player.color }}> {player.name} - <strong>{player.score}</strong></span> 
                <div style={{ width: 12.5, height: 17.5, borderRadius: 3, border: "1px solid black", backgroundColor: player.isReady ? "green" : "red", float: "right", marginRight: 20 }}>
                </div>
            </div>
        }
    }

    return (
        <div style={{ padding: 10, width: "100%", height: "100%" }}>
            {renderWaitingForPlayer()}
        </div>

    );
};

export default PlayerDisplay;