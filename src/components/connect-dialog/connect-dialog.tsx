import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';
import { SendCommand } from 'utils/http.utils';

function setStoreState(store: any, state: any) {
  return store.setState(state);
}

const actions = (store) => ({
  connect() {
    store.setState({ connecting: true });
    console.log('xxx');
    // SendCommand('[ESP800]').then((resp) => {
    //   console.log(resp);
    //   store.setState({ connecting: false });
    //   return resp;
    // });
  },
});

const ConnectDialog = connect(
  ['connecting', 'firmwareInfo'],
  actions
)(({ connecting, connect }: any) => {
  const modalClasses = `modal ${connecting ? 'is-active' : ''}`;
  return (
    <div className={modalClasses}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Connecting ESP3D</p>
        </header>
        <section class="modal-card-body"></section>
        <footer class="modal-card-foot">
          <button class="button is-primary">Retry</button>
        </footer>
      </div>
    </div>
  );
});

export default ConnectDialog;
