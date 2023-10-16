import RappeurCard from './components/RappeurCard'
import NavBar from './components/NavBar';
import { useState } from 'react';
import './App.css'
import './style.scss'

const rappeurList = [
  {
    imgSrc: "src/assets/niska-rap-css-react.jpeg",
    name: "Niska",
    rap: "Rap: 9.5/10",
    flow: "Flow: 10/10",
  },
  {
    imgSrc: "src/assets/sch-react-css.jpeg",
    name: "SCH",
    rap: "Rap: 8/10",
    flow: "Flow: 9/10",
  },
  {
    imgSrc: "src/assets/shay-react-css.jpeg",
    name: "Shay",
    rap: "Rap: 9.8/10",
    flow: "Flow: 9/10",
  },
  {
    imgSrc: "src/assets/maes-react-css.jpeg",
    name: "Maes",
    rap: "Rap: 10/10",
    flow: "Flow: 7/10",
  },
  {
    imgSrc: "src/assets/booba-react-css.jpeg",
    name: "Booba",
    rap: "Rap: 9.9/10",
    flow: "Flow: 5/10",
  },
];

function App() {

  const [rappeurIndex, setRappeurIndex] = useState(0)

  const rappeurs = rappeurList[rappeurIndex];

  return (
    <>
      <h1>Rappeurdex</h1>
      <NavBar       
        rappeurList={rappeurList}
        setRappeurIndex={setRappeurIndex}/>
      <RappeurCard rappeur={rappeurs}/>
    </>
  )
}

export default App
