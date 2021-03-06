
import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import PageTreePreview from 'ui/pages/common/PageTreePreview';

const PAGE = {
  code: 'pagecode',
  title: 'Title',
  isEmpty: false,
};

describe('PageTreePreview', () => {
  it('renders without crashing', () => {
    const component = shallow(<PageTreePreview locale="draft" rowData={PAGE} />);
    expect(component.exists()).toBe(true);
  });
  it('has class PageTreePreview', () => {
    const component = shallow(<PageTreePreview locale="draft" rowData={PAGE} />);
    expect(component.hasClass('PageTreePreview')).toBe(true);
  });
});
