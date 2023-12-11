import type { Meta, StoryObj } from '@storybook/react';
import AllPlayers from './All-players';
import { PlayerProps } from './Player-display';

const meta: Meta<typeof AllPlayers> = {
    title: 'AllPlayers',
    component: AllPlayers,
}

export default meta;

type AllPlayersStory = StoryObj<typeof AllPlayers>;

const allPlayerData = new Array<PlayerProps>();
allPlayerData.push({
    name: 'Player 1',
    hasFoundPlayer: true,
    isReady: true,
    color: "red",
    score: 3,
});
allPlayerData.push({
    name: 'Player 2',
    hasFoundPlayer: true,
    isReady: false,
    color: "green",
    score: 1,
});
allPlayerData.push({
    name: 'Player 3',
    hasFoundPlayer: false,
    isReady: false,
    color: "blue",
    score: 1,
});
allPlayerData.push({
    name: '',
    hasFoundPlayer: false,
    isReady: false,
    color: "brown",
    score: 1,
});


export const Default: AllPlayersStory = {
    args: {
        players: allPlayerData
    }
};