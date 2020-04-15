import { registerModule } from './store';


const createRoutes = () => [
];

const createModule = (options) => {
  registerModule(options);
  return createRoutes();
};

export default createModule;
