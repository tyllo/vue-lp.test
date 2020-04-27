import * as ROUTES from '@/helpers/enums/routes';


export default [{
  path: '*',
  redirect: { name: ROUTES.EMPTY },
}];
