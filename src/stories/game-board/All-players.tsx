import PlayerDisplay, { PlayerProps } from "./Player-display";

// component that renders a player in the game
type AllPlayersProps = {
    players: Array<PlayerProps>;
};

const AllPlayers = (props: AllPlayersProps) => {

    return (

        <div style={{width:200}}>
            {props.players.map((player: PlayerProps) => {

                return (
                    <PlayerDisplay {...player} />
                );
            })}
        </div>
    )
};

export default AllPlayers;