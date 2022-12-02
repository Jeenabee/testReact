import React, {useState,useRef} from 'react';

import useLocalStorage from 'use-local-storage'
import './App.css';



  const App = (): JSX.Element => {
    const [clickedButton, setClickedButton] = useState('');
  
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>, value?:boolean):void => {
      event.preventDefault();

     
  
      const button: HTMLButtonElement = event.currentTarget;
      setClickedButton(button.name);
    };
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const switchTheme = () => {
 const newTheme = theme === 'light' ? 'dark' : 'light';
 setTheme(newTheme);
};


 


  return (
    <div className="App" >
      <div className="split left" data-theme={theme}>
          <button type='button' className='button' name="Theme was set"  data-theme={theme} onClick ={(event) => {switchTheme();buttonHandler(event,true)}}> Set {theme=== 'light' ? 'dark' : 'light'} Theme</button>
          <textarea data-theme={theme} name="textarea" id="" cols= {90} rows={20} ></textarea>
          
            <button type='button' className='button' name='' data-theme={theme} disabled ={true} >Click Me</button>
          
              <br />
      
            <button type='button' className='button' data-theme={theme} >Add Button</button>
          
         
        </div>

        <div className="split right" data-theme={theme}>
          <h2>{clickedButton !== ""
          ? ` "${clickedButton}"` 
          : ""}
      </h2>
        </div>
    </div>
  );
}
 

export default App;
