import { FunctionComponent, h } from 'preact';
import JoggingPanel from 'components/panels/jogging/jogging.panel';
import Tempertures from 'components/panels/tempertures/tempertures.panel';
import Terminal from 'components/panels/terminal/terminal.panel';

const MainTabs: FunctionComponent = () => {
  return (
    <div class="columns">
      <div class="column">
        <JoggingPanel />
      </div>
      <div class="column">
        <Tempertures />
      </div>
      <div class="column">
        <Terminal />
      </div>
    </div>
  );
};

export default MainTabs;
