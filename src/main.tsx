import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import FindGame from './routes/find-game.tsx';
import GameBoard from './routes/game-board.tsx';
import MainMenu from './routes/main-menu.tsx';
import Settings from './routes/settings.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

import Admin from './routes/admin.tsx';

/**
 * This application is a card game similar to Cards Against Humanity, only, the dealer is a Large Language Model hosted on AWS, which occationally creates new content for the
 * question and answer cards based on current events in the world. The winner of the round will be determined by the votes players make on each answer card for how fun it was.
 * 
 * We are using Material UI component library (https://mui.com/material-ui/getting-started/installation/)
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "findgame",
        element: <FindGame />,
      },
      {
        path: "gameboard",
        element: <GameBoard />,
      },
      {
        path: "mainmenu",
        element: <MainMenu />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
