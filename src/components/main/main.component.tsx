import { FunctionalComponent, h } from 'preact';
import HeaderComponent from '../header/header.component';

const MainComponent: FunctionalComponent = () => {
  return (
    <div id="main_ui" class="container-fluid">
      <HeaderComponent />
    </div>
  );
};

export default MainComponent;
