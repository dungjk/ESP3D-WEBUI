import { FunctionComponent, h } from 'preact';

import './header.component.scss';

const HeaderComponent: FunctionComponent = () => {
  return (
    <nav class="navbar is-light" role="navigation">
      <a class="navbar-brand" href="/">
        <div class="navbar-item">ESP3D</div>
      </a>
      <div class="navbar-end">
        <div class="navbar-item">
          <label class="checkbox">
            <input type="checkbox" />
            Unlock interface
          </label>
        </div>
        <div class="navbar-item">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
          </svg>
          <span>20%</span>
        </div>
        <div class="navbar-item">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z" />
          </svg>
          <span>20&deg;C</span>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <span class="icon">
              <svg width="1.3em" height="1.3em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
            </span>
          </a>
          <div class="navbar-dropdown is-boxed is-right nav-drop">
            <span class="navbar-item">
              <div>
                <span>UI:</span>
                <span id="UI_VERSION">2.0</span>
                <span> / FW: </span>
                <span id="FW_VERSION">2.1</span>
              </div>
            </span>
            <hr class="navbar-divider"></hr>
            <div class="navbar-item">
              <div class="des">
                <span class="icon">
                  <svg width="1.3em" height="1.2em" viewBox="0 0 1300 1200">
                    <g transform="translate(50,1200) scale(1, -1)">
                      <path d="M600 1174q33 0 74 -5l38 -152l5 -1q49 -14 94 -39l5 -2l134 80q61 -48 104 -105l-80 -134l3 -5q25 -44 39 -93l1 -6l152 -38q5 -43 5 -73q0 -34 -5 -74l-152 -38l-1 -6q-15 -49 -39 -93l-3 -5l80 -134q-48 -61 -104 -105l-134 81l-5 -3q-44 -25 -94 -39l-5 -2l-38 -151 q-43 -5 -74 -5q-33 0 -74 5l-38 151l-5 2q-49 14 -94 39l-5 3l-134 -81q-60 48 -104 105l80 134l-3 5q-25 45 -38 93l-2 6l-151 38q-6 42 -6 74q0 33 6 73l151 38l2 6q13 48 38 93l3 5l-80 134q47 61 105 105l133 -80l5 2q45 25 94 39l5 1l38 152q43 5 74 5zM600 815 q-89 0 -152 -63t-63 -151.5t63 -151.5t152 -63t152 63t63 151.5t-63 151.5t-152 63z"></path>
                    </g>
                  </svg>
                </span>
                <div>Firmware</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
