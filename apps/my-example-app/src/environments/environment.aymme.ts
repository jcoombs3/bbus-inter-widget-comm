import { Environment } from './type';
import { services } from './extensions/index';

const EXPERIENCE_NAME = 'bbus-inter-widget-comm-app';

const pageModel: any = {
  name: 'app-container',
  properties: {},
  children: []
};

// Aymme: fetch model from CX
const fetchModel = function(): Promise<Response> {
  return fetch(
    'http://localhost:3003/v1/_api/portals/simpleModel/' + EXPERIENCE_NAME
  );
};

export const environment: Environment = {
  production: false,
  bootstrap: {
    services,
    pageModel
  },
  fetchModel: fetchModel
};