import Input from '../';
import {render} from '@testing-library/react';

describe('Input', () => {
  test('basic', () => {
    const result = render(<Input/>);

    expect(result.container).toMatchSnapshot();
  });

  test('showCount without value', () => {
    const result = render(<Input maxLength={10}/>);
    expect(result.container).toMatchSnapshot();
  });

  test('showCount with value', () => {
    const result = render(<Input maxLength={10} value="abc"/>);
    expect(result.container).toMatchSnapshot();
  });
});
