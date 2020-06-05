import { FunctionalComponent, h } from 'preact';
import HeaderComponent from '../header/header.component';
import ConnectDialog from '../connect-dialog/connect-dialog';
import DashboardTabs from './dashboard-tabs.component';

const DashboardComponent: FunctionalComponent = () => {
  return (
    <div id="main_ui" class="container is-fluid">
      <HeaderComponent />
      <DashboardTabs />
      <ConnectDialog />
    </div>
  );
};

export default DashboardComponent;
