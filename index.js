import './index.less';
import {Input as BaseInput} from 'antd';

const Counter = ({showCount = true, ...props}) => {
  if (!showCount || !props.maxLength) {
    return null;
  }
  return <span className="ant-input-show-count">{(props?.value?.length || 0) + ' / ' + props.maxLength}</span>;
};

const Input = ({showCount = true, ...props}) => {
  return <BaseInput
    suffix={<Counter showCount={showCount} {...props}/>}
    {...props}
  />;
};

Input.TextArea = ({showCount = true, ...props}) => <BaseInput.TextArea showCount={showCount} {...props}/>;

export default Input;
