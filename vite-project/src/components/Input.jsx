

function Input({input,InputValue,handleClick}){

    return(<div>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="container">
            <label>Todo List</label>
            <input onChange={InputValue} type="text" value={input}  />
            <button onClick={handleClick}>+</button>
            
            </div>
        </form>
    </div>);
}

export default Input;