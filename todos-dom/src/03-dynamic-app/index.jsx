import classes from "./style.module.scss";

const tasks = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn React Native", completed: false },
  { id: 3, text: "Work!" },
];

export default function App({ name = "User" }) {
  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form>
        <input placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li>
            <span className={task.completed ? classes.completed : null}>
              {task.text}
            </span>
            &nbsp;
            <button>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
