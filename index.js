import './index.css';
import {Input as BaseInput} from 'antd';
import PropTypes from 'prop-types';

const handleBlur = (trim, props, e) => {
  trim && props.onChange && props.onChange(e.target.value.trim());
  props.onBlur && props.onBlur(e);
};

const Input = ({maxLength = null, trim = true, ...props}) => {
  return <BaseInput
    maxLength={maxLength}
    showCount={!!maxLength}
    onBlur={handleBlur.bind(this, trim, props)}
    {...props}
  />;
};

Input.propTypes = {
  maxLength: PropTypes.number,
  trim: PropTypes.bool,
};

Input.TextArea = ({maxLength = null, trim = true, ...props}) => {
  return <BaseInput.TextArea
    maxLength={maxLength}
    showCount={!!maxLength}
    onBlur={handleBlur.bind(this, trim, props)}
    {...props}
  />;
};

Input.TextArea.propTypes = Input.propTypes;

export default Input;
