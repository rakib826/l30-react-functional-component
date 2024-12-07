const variant = {
  primary: {
    backgroundColor: '#2196f3',
    color: '#fff'
  },
  success: {
    backgroundColor: '#4caf50',
    color: '#000'
  },
  error: {
    backgroundColor: '#f44336',
    color: '#fff'
  },
  warning: {
    backgroundColor: '#ff9800',
    color: '#000'
  },
  info: {
    backgroundColor:'#80d8ff',
    color: '#000'
  },
}

const Button = (props) => {
  console.log(props)
  const userVariant = variant[props.variant]
  return (
    <div>
      <button className='border-gray-200 px-4 py-2 rounded-md mr-4' style={{
        ...userVariant
      }} type={props.type} >{props.text}</button>
    </div>
  );
};

export default Button;