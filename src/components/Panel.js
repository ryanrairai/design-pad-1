
const Panel = (props) =>{
    const allowedDrag = props.editenabled

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
    }
    const dragOver = e => {
        e.stopPropagation();
    }
    return (
        <div
            id = {props.id}
            draggable={allowedDrag}
            onDragStart = {dragStart}
            onDragOver={dragOver}
            className="tile p-2 ml-5 m-2 col-5"
            style = {{backgroundColor:`${props.color}`}}
        >
            {props.color}
        </div>
    )
}

export default Panel