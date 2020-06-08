import { FunctionComponent, h } from 'preact';
import { Power, Check } from 'preact-feather';

const Tempertures: FunctionComponent = () => {
  return (
    <div class="panel">
      <div class="panel-heading">Tempertures</div>
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
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <td>Name</td>
              <td>Options</td>
              <td>Value|Target</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heater T0</td>
              <td>
                <div class="field is-grouped">
                  <div class="control">
                    <a class="button is-danger">
                      <Power />
                    </a>
                  </div>
                  <div class="control">
                    <div class="field has-addons">
                      <div class="control">
                        <input class="input" type="number"></input>
                      </div>
                      <div class="control">
                        <a class="button is-static">&#8451;</a>
                      </div>
                    </div>
                  </div>
                  <div class="control">
                    <a class="button is-link">
                      <span class="icon">
                        <Check />
                      </span>
                    </a>
                  </div>
                </div>
              </td>
              <td>35&#8451;|220&#8451;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tempertures;
