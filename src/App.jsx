import { useState } from 'react'
import './styles/App.css'
import Welcome from './components/Welcome'
import GeneralInfo from './components/GeneralInfo'
import Card from './components/Card'

function App() {
  const [currentView, setCurrentView] = useState('welcome');

  let content;

  if(currentView === "welcome") {
    content = <Welcome goToGeneral = {() => setCurrentView("general")} />
  }


  if(currentView === 'general') {
    content = <GeneralInfo />
  }

  return (
    <div>
      {content}
    </div>
  );

}

export default App
