
const Header = ({onEdit, editenabled}) => {
    console.log('blablblblab',editenabled)
    return (
        <header>
            <h1>Design pad</h1>
            <button style={{backgroundColor:`${editenabled == true ? 'green': 'red'}`}} onClick={onEdit} className="btn btn-primary m-3">Edit</button>
        </header>
    )
}
export default Header