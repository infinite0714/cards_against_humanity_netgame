import type { Meta, StoryObj } from '@storybook/react';

import PlayerDisplay from './Player-display';

const meta: Meta<typeof PlayerDisplay> = {
    title: 'PlayerDisplay',
    component: PlayerDisplay,
}

export default meta;

type PlayerDisplayStory = StoryObj<typeof PlayerDisplay>;

export const FoundButNotReady: PlayerDisplayStory = {
    args: {
        name: 'Player 1',
        hasFoundPlayer: true,
        isReady: false,
        color: "red",
        score: 3,
    }
};

export const FoundAndReady: PlayerDisplayStory = {
    args: {
        name: 'Player 2',
        hasFoundPlayer: true,
        isReady: true,
        color: "blue",
        score: 1,
    }
};

export const NotFound: PlayerDisplayStory = {
    args: {
        name: '',
        hasFoundPlayer: false,
        isReady: false,
        color: "blue",
        score: 0,
    }
};

export const LeftGame: PlayerDisplayStory = {
    args: {
        name: '',
    }
};

