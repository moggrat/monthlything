import {Outlet, Link} from "react-router-dom";
import { ReactComponent as MenuIcon } from '../buildgfx/bx-menu.svg';
import { ReactComponent as HomeIcon } from '../buildgfx/bxs-home.svg';
import { ReactComponent as GalleryIcon } from '../buildgfx/bxs-image.svg';
// import { ReactComponent as InfoIcon } from '../buildgfx/bxs-info.svg';

function Master() {
  return (
    <>
      <header>
        <div className="contents">
          <Link className="logo" to="/">Monthly Thing</Link>

          <nav>
            <ul>
              <li>
                <Link to="/"><HomeIcon /></Link>
              </li>
              <li>
                <Link to="/gallery"><GalleryIcon /></Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      <main>
        <div className="contents">
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="contents copyright">© 2022 - <a href="https://moggrat.com" target="_blank" rel="noopener noreferrer">Luke Scott | Moggrat</a></div>
      </footer>
      
    </>

  );
}

export default Master;
