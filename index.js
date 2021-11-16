import './index.less';
import {Input as BaseInput} from 'antd';

const Counter = ({showCount = true, ...props}) => {
  if (!showCount || !props.maxLength) {
    return null;
  }
  return <span className="ant-input-show-count">{(props?.value?.length || 0) + ' / ' + props.maxLength}</span>;
};

const handleBlur = (trim, props, e) => {
  trim && props.onChange && props.onChange(e.target.value.trim());
  props.onBlur && props.onBlur(e);
};

const Input = ({showCount = true, trim = true, ...props}) => {
  return <BaseInput
    suffix={<Counter showCount={showCount} {...props}/>}
    onBlur={handleBlur.bind(this, trim, props)}
    {...props}
  />;
};

Input.TextArea = ({showCount = true, trim = true, ...props}) => {
  return <BaseInput.TextArea
    showCount={showCount}
    onBlur={handleBlur.bind(this, trim, props)}
    {...props}
  />;
};

export default Input;
