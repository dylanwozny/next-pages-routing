// the --COMPONENT FUNCTION---
const App = () => {
  //-------- Getter and Setter --------------
  // name = the variable setName is the function to set the variable
  const [name, setName] = React.useState("");

  //------- function to catch event ------------
  const onChangeHandler = (event) => {
    setName(event.target.value);
  };
  //------- Watches a value and updates---------
  // ------ if this value changes, update ui -----------
  // {what to do, what value to watch}
  React.useEffect(() => {
    console.log(name);
  }, [name]);

  //---------------returns JSX--------------
  return (
    <div>
      <input type="text" value={name} onKeyUp={onChangeHandler} />
      <p>the text is : {inputValue}</p>
    </div>
  );
};

// ------ Rendering in browser DOM ------------
const domContainer = document.querySelector("#react-container");
ReactDOM.render(<App />, domContainer);
