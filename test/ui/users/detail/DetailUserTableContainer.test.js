import {
  mapStateToProps,
  mapDispatchToProps,
} from 'ui/users/detail/DetailUserTableContainer';
import { getSelectedUser } from 'state/users/selectors';
import { USER } from 'test/mocks/users';

jest.mock('state/users/selectors', () => ({
  getSelectedUser: jest.fn(),
}));

const ownProps = {
  match: {
    params: {
      username: 'username',
    },
  },
};

getSelectedUser.mockReturnValue(USER);

describe('DetailUserTableContainer', () => {
  const dispatchMock = jest.fn();
  let props;
  beforeEach(() => {
    jest.clearAllMocks();
    props = mapDispatchToProps(dispatchMock, ownProps);
  });

  describe('mapDispatchToProps', () => {
    it('should map the correct function properties', () => {
      expect(props.onWillMount).toBeDefined();
    });
    it('verify thant onWillMount is called', () => {
      props.onWillMount('username');
      expect(dispatchMock).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      props = mapStateToProps({}, ownProps);
    });

    it('verify that user prop is defined and properly valued', () => {
      expect(props).toHaveProperty('user');
    });
  });
});
