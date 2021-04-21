

const PanelArea = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div className="panel-area">
            <div 
                id={props.id}
                className="panel row"
                onDrop={drop}
                onDragOver = {dragOver}
            >
                {props.children}
            </div>
            
        </div>
    )
}

export default PanelArea