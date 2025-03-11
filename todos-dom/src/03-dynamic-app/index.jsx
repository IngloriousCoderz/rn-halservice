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
        {tasks.map(({ id, completed, text }) => (
          <li key={id}>
            <span className={completed ? classes.completed : null}>{text}</span>
            &nbsp;
            <button>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}
