import Input from '../';
import {render} from '@testing-library/react';

describe('Input', () => {
  test('basic', () => {
    const result = render(<Input/>);

    expect(result.container).toMatchSnapshot();
  });
});
