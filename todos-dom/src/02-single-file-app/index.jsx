// import { style } from "./style";
import classes from "./style.module.scss";

export default function App({ name = "User" }) {
  // const customStyle = {
  //   ...style,
  //   opacity: 0.04 * name.length,
  // };
  const style = {
    opacity: 0.04 * name.length,
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form>
        <input placeholder="What next?" />
        <button>Add</button>
      </form>
      <ul>
        <li>
          <span className={classes.completed} style={style}>
            Learn React
          </span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Learn React Native</span>
          &nbsp;
          <button>x</button>
        </li>
        <li>
          <span>Work!</span>
          &nbsp;
          <button>x</button>
        </li>
      </ul>
    </>
  );
}
