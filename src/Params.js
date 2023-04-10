
function Params({id, label, counter}){
    return(
        <div className="params-container">
            <h4 id={id} className="params-label" style={{margin:'0'}}>{label}</h4>
            <div className="arrows-container">
                <span id="break-decrement">
                    <i className="fa-solid fa-arrow-down params-arrow"></i>
                </span>
                <span className="params-counter">{counter}</span>
                <span id="break-increment">
                <i className="fa-solid fa-arrow-up params-arrow"></i>
                </span>
            </div>
           
        </div>
    )
}
export default Params