import {useEffect, useMemo, useState} from "react";
import TodoTask from "./UI/todoTask/TodoTask";
import Form from "./UI/form/Form";
import MyButton from "./UI/button/MyButton";

function App() {
    const [tasks, setTask] = useState([
        {text: 'learn react', id: 1, complete: false},
        {text: 'learn js', id: 2, complete: false},
        {text: 'learn html', id: 3, complete: false},
    ]);

    const [filtered, setFiltered] = useState(tasks)
    const [valueInput, setValue] = useState('');

    useEffect(() => {
        setFiltered(tasks)
    }, [tasks])

    const addTask = (value) => {
        if(value) {
            const newItem = {
                id: Date.now(),
                text: value,
                complete: false
            }
            setTask([...tasks, newItem])
        }
    }

    const removeTask = (task) => {
        setTask(tasks.filter(t => t !== task))
    }

    const handleToggle = (id) => {
        setTask([
            ...tasks.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }

    const todoFilter = (status) => {
        if(status === 'all') {
            setFiltered(tasks)
        } else if(status) {
            let newTask = [...tasks].filter(item => item.complete !== status);
            setFiltered(newTask)
        } else if(!status){
            let newTask = [...tasks].filter(item => item.complete === true);
            setFiltered(newTask)
        }
    }


    return (
        <div className="container">
            <div className="form__block">
                <h1>Список задач: {tasks.length}</h1>
                <div className="wrap">
                    <Form
                        valueInput={valueInput}
                        setValue={setValue}
                        addTask={addTask}/>
                </div>
                <div>
                    <MyButton onClick={() => todoFilter(true)}>Active</MyButton>
                    <MyButton onClick={() => todoFilter(false)}>Completed</MyButton>
                    <MyButton onClick={() => todoFilter('all')}>All</MyButton>
                </div>
            </div>
            <div>
                <div className="form__block" style={{marginTop: 15}}>
                {
                    tasks.length === 0
                    ? <h4>Задач нету</h4>
                    : filtered.map((task, index) =>
                            <TodoTask
                                handleToggle={handleToggle}
                                remove={removeTask}
                                key={index}
                                task={task}
                                tasks={tasks}
                                setTask={setTask}
                                index={index + 1}/>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default App;
