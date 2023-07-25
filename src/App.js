import './App.css';
import {
  useState
} from "react";
import copyIcon from './assets/copy-64.ico'
import Checkbox from './components/checkbox';
import StrengthMeter from './components/strengthmeter';
import usePasswordGenerator from "./hooks/password-generator"

function App() {


  /*for range slider*/

  const [length, setLength] = useState(3);

  /*for checkbox  value mapping*/
  const [checkBoxData, setCheckBoxData] = useState([{
      title: "Include Upper Case Letters",
      id: "upperCase",
      state: false
    },
    {
      title: "Include Lower Case Letters",
      id: "lowerCase",
      state: false
    },
    {
      title: "Include Numbers",
      id: "number",
      state: false
    },
    {
      title: "Include Symbols",
      id: "symbol",
      state: false
    }
  ]);


  const handleCheckBox = (i) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state

    setCheckBoxData(updatedCheckBoxData);
  };


  // eslint-disable-next-line no-unused-vars
  const {
    password,
    errorMessage,
    generatePassword
  } = usePasswordGenerator()

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  }






  return ( 
    <section >
    <h6> Password Generator </h6> 
    <div className = "container" >
    <div className = "results" >
    <input type = "text" id = "result" readOnly placeholder = {password}/> 
    <button  onClick = {handleCopy}> <img src = {copyIcon} height = "22px" alt = "copy-icon"/></button></div>
    
    <div className = "selectors">
    <div className = "slider_text" >
    <h3> Character Length </h3> 
    <h2> {length} </h2> 
    </div> 
    { /* range slider  */ } 
      <div>
    <input 
    type = "range"
    min = "1"
    max = "12"
    onChange = {(e) => setLength(e.target.value)}
    value = {length}
    class = "range_slider"
    id = "myRange"/>
    </div>

    {
      checkBoxData.map((checkBox, index) => {
        return ( <
          Checkbox key = {
            index
          }
          id = {
            checkBox.id
          }
          title = {
            checkBox.title
          }
          onChange = {
            () => handleCheckBox(index)
          }
          state = {
            checkBox.state
          }
          />



        )
      })
    }








    <StrengthMeter/>
    <div>
    <input
    type = "button"
    name = "submit"
    className = "submit_button"
    onClick = {() => generatePassword(checkBoxData, length)}
    value = "Generate"
    />
    </div>
     </div>

    </div> 
    </section>
  );
}

export default App;