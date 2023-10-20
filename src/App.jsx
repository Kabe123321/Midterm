//import Validate from "./components/Validate/Validate";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
// import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
//import ReactHookForm from "./components/ReactHookForm/Example";
import NewShop from "./components/NewShop/NewShop";

const App = () => {
  return (
    <div>
      <NewShop />
      {/* <Controlled /> */}
      {/* <Checkbox /> */}
      <Dropdown />
      <Uncontrolled />
      {/* <Multiple /> */}
      {/*
     

      <Multiple />
      <Validate />
      
      <ReactHookForm />
      */}
    </div>
  );
};

export default App;