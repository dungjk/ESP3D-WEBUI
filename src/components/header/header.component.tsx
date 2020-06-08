import { FunctionComponent, h } from 'preact';
import { Droplet, Thermometer, Menu, Settings } from 'preact-feather';

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
          <Droplet />
          <span>20%</span>
        </div>
        <div class="navbar-item">
          <Thermometer />
          <span>20&deg;C</span>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            <span class="icon">
              <Menu />
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
                  <Settings />
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
