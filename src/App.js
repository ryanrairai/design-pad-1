import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Board from './components/Board'
import PanelArea from './components/PanelArea'
import Panel from './components/Panel'
import Design from './components/Design'
import DesignTile from './components/DesignTile'
function App() {

  const [editEnabled, setEditEnabled] = useState(false)
  const toggleEditEnabled = () => {
    setEditEnabled(!editEnabled)
    console.log(editEnabled)
  }
  return (

    <div className="App">
      <Board>
        <Header onEdit = {toggleEditEnabled} editenabled = {editEnabled}/>
        <PanelArea id="board-1">
          <Panel editenabled = {editEnabled} id='panel1' color="red"/>
          <Panel editenabled = {editEnabled} id='panel2' color="yellow"/>
          <Panel editenabled = {editEnabled} id='panel3' color="pink"/>
          <Panel editenabled = {editEnabled} id='panel4' color="blue"/>
          <Panel editenabled = {editEnabled} id='panel5' color="violet"/>
          <Panel editenabled = {editEnabled} id='panel6' color="orange"/>
          <Panel editenabled = {editEnabled} id='panel7' color="green"/>
          <Panel editenabled = {editEnabled} id='panel8' color="white"/>
        </PanelArea>

        <Design>
          <DesignTile id="tile1"/>
          <DesignTile id="tile2"/>
          <DesignTile id="tile3"/>
          <DesignTile id="tile4"/>
        </Design>
      </Board>
    </div>
  );
}

export default App;
