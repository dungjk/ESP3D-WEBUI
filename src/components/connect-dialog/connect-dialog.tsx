import { FunctionalComponent, h } from 'preact';

const ConnectDialog: FunctionalComponent = () => {
  return (
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modalcard-head">
          <p class="modal-card-title">Connecting ESP3D</p>
        </header>
        <section class="modal-card-body"></section>
        <footer class="modal-card-foot">
          <button class="button is-primary">Retry</button>
        </footer>
      </div>
    </div>
  );
};

export default ConnectDialog;
