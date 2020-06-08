import { FunctionComponent, h } from 'preact';
import { Video, Tool, Cpu, Server } from 'preact-feather';

const DashboardTabs: FunctionComponent = () => {
  return (
    <div class="tabs">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small">
              <Server />
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <Video />
            </span>
            <span>Camera</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <Tool />
            </span>
            <span>Printer</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small">
              <Cpu />
            </span>
            <span>ESP3D</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardTabs;
