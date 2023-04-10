
function Params({id, label, counter}){
    return(
        <div className="params-container">
            <h4 id={id} className="params-label" style={{margin:'0'}}>{label}</h4>
            <div className="arrows-container">
                <span id="break-decrement">
                    <i class="fa-solid fa-arrow-down"></i>
                </span>
                <span className="params-counter">{counter}</span>
                <span id="break-increment">
                <i class="fa-solid fa-arrow-up"></i>
                </span>
            </div>
           
        </div>
    )
}
export default Params