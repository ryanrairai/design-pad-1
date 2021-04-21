import { useState } from 'react'
const DesignTile = (props) =>{

    const[tileColor, setTileColor] = useState('white')
    const changeTileColor = (color) => {
        console.log("the color was changed to ", color)
        setTileColor(color)
    }


    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        console.log("received", card_id)
        const color = card.style.backgroundColor
        console.log(color)
        changeTileColor(color)
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div 
            id={props.id}
            onDrop={drop}
            onDragOver = {dragOver}
            className="col-5 design-tile"
            style = {{backgroundColor:`${tileColor}`}}
        >
        </div>
    )
}

DesignTile.defaultProps = {
    color: "white"
}

export default DesignTile