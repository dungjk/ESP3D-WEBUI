import createStore from 'unistore';

const applicationStore = createStore({
  connecting: false,
  firmwareInfo: {},
});

export default applicationStore;
