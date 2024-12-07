

const InputGroup = (props) => {
  console.log(props)
  const label = props.label
  const type = props.type
  return (
    <div>
      <div className="my-2 text-left">
        <label htmlFor="name">{label}</label>
        <input className="border-2 w-full p-1" type={type} />
      </div>
    </div>
  );
};

export default InputGroup;
