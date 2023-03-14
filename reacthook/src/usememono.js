import {useState} from "react";

const UsememoNo = () =>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);
    const increment = () => {
        setCount((c) => c+1);
    };
    const addtodo = () =>{
        setTodos((t) => [...t, "New Todo"]);
    };
    return(
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
}

const expensiveCalculation= (num) => {
    console.log("calculating...");
    for(let i = 0 ;i < 10000000; i++)
    {
        num+=1;
    }
    return num;
};
export default UsememoNo;