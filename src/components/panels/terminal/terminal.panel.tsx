import { FunctionComponent, h } from 'preact';
import './terminal.panel.scss';

const Terminal: FunctionComponent = () => {
  return (
    <div id="terminal_panel" class="panel">
      <div class="panel-heading">Commands</div>
      <div class="panel-block">
        <div class="container px-2 py-2">
          <pre></pre>
        </div>
      </div>
      <div class="panel-block">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox"></input>
                  auto scroll
                </label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox"></input>
                  verbose mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div class="control">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text"></input>
            </div>
            <div class="control">
              <a class="button is-primary">Send</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
