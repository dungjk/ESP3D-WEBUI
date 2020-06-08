import { FunctionComponent, h } from 'preact';
import Jogging from './jogging';
import MacroContainer from './macro-container';
import { ZapOff } from 'preact-feather';

const JoggingPanel: FunctionComponent = () => {
  return (
    <nav class="panel">
      <div class="panel-heading">Controls</div>
      <div class="panel-block">
        <div class="control">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field has-addons">
                <div class="control">
                  <a class="button">
                    <label class="checkbox">
                      <input type="checkbox"></input>
                      Auto check every
                    </label>
                  </a>
                </div>
                <div class="control">
                  <input class="input" type="number"></input>
                </div>
                <div class="control">
                  <a class="button is-static">sec</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <Jogging />
            </div>
            <div class="column">
              <MacroContainer />
            </div>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field has-addons">
              <div class="control">
                <a class="button is-static">XY</a>
              </div>
              <div class="control">
                <input class="input" type="number"></input>
              </div>
              <div class="control">
                <a class="button is-static">mm/min</a>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <a class="button is-static">Z</a>
              </div>
              <div class="control">
                <input class="input" type="number"></input>
              </div>
              <div class="control">
                <a class="button is-static">mm/min</a>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <a class="button is-danger">
                  <span class="icon">
                    <ZapOff />
                  </span>
                  <span>Motors off</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JoggingPanel;
