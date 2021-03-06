import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { config } from '@entando/apimanager';
import {
  navigateECRCategory,
  filterByECRCategories,
  filterByRating,
  filterBySearch,
} from 'state/component-repository/actions';
import { SET_ECR_FILTER, CLEAR_ECR_SEARCH_FILTER } from 'state/component-repository/components/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

config(mockStore({ api: { useMocks: true }, currentUser: { token: 'asdf' } }));

const INITIAL_STATE = {
  componentRepositories: {
    list: [],
  },
  componentRepositoryCategories: {
    list: [],
    selected: {},
  },
  componentRepositoryComponents: {
    list: [],
    selected: {},
    componentListViewMode: '',
    filters: {},
  },
  componentRepositoryExtraFilters: {
    selected: '',
  },
};

describe('state/component-repository/actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    jest.clearAllMocks();
    store.clearActions();
  });

  it('navigateECRCategory should call proper actions', (done) => {
    store.dispatch(navigateECRCategory()).then(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(7);
      expect(actions[0]).toHaveProperty('type', CLEAR_ECR_SEARCH_FILTER);
      done();
    }).catch(done.fail);
  });

  it('filterByECRCategories should call proper actions', (done) => {
    store.dispatch(filterByECRCategories()).then(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(5);
      expect(actions[0]).toHaveProperty('type', SET_ECR_FILTER);
      done();
    }).catch(done.fail);
  });

  it('filterByRating should call proper actions', (done) => {
    store.dispatch(filterByRating()).then(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(5);
      expect(actions[0]).toHaveProperty('type', SET_ECR_FILTER);
      done();
    }).catch(done.fail);
  });

  it('filterBySearch should call proper actions', (done) => {
    store.dispatch(filterBySearch()).then(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(5);
      expect(actions[0]).toHaveProperty('type', CLEAR_ECR_SEARCH_FILTER);
      done();
    }).catch(done.fail);
  });
});
