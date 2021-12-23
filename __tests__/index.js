import Input from '../';
import {fireEvent, render} from '@testing-library/react';

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

  test('trim', () => {
    let value = ' ';
    let called = false;
    const handleChange = (v) => {
      called = true;
      value = v;
    };

    const result = render(<Input value={value} onChange={handleChange}/>);

    const input = result.container.getElementsByTagName('input')[0];

    fireEvent.blur(input);

    expect(called).toBeTruthy();
    expect(value).toBe('');
  });
});
