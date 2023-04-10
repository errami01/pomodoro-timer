
function Params({id, label, counter, updateCounter}){
    function handleClick(event){
        if(event.currentTarget.id === `${id}-decrement`) updateCounter(prev=> prev-1)
        if(event.currentTarget.id === `${id}-increment`) updateCounter(prev=> prev+1)
    }
    return(
        <div className="params-container">
            <h4 id={`${id}-label`} className="params-label" style={{margin:'0'}}>{label}</h4>
            <div className="arrows-container">
                <span id={`${id}-decrement`} onClick={handleClick}>
                    <i className="fa-solid fa-arrow-down params-arrow"></i>
                </span>
                <span className="params-counter" >{counter}</span>
                <span id={`${id}-increment`} onClick={handleClick}>
                <i className="fa-solid fa-arrow-up params-arrow"></i>
                </span>
            </div>
           
        </div>
    )
}
export default Params