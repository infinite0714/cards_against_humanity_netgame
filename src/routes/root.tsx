import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`findgame`}>Finding Match</Link>
              </li>
              <li>
                <Link to={`gameboard`}>Game Board</Link>
              </li>
              <li>
                <Link to={`mainmenu`}>Main Menu</Link>
              </li>
              <li>
                <Link to={`settings`}>Settings</Link>
              </li>
              <li>
                <Link to={`admin`}>Admin</Link>
              </li>
              <li>
                <Link to={`error`}>Error</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }