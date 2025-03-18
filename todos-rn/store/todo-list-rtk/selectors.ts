import { TodoListState } from "./todo-list.reducer";

export const selectText = (state: TodoListState) => state.form;

export const selectTasks = (state: TodoListState) => state.tasks;

export const selectTask = (state: TodoListState, id: string) =>
  selectTasks(state).find((task) => task.id === id);

// memoized selectors

// import { createSelector } from "@reduxjs/toolkit";

// {
//   user: {
//     firstName: "Matteo Antony",
//     lastName: "Mistretta",
//   }
// }

// const selectFirstName = (state) => state.user.firstName
// const selectLastName = (state) => state.user.lastName

// const selectFullName = (state) => {
//   const firstName = selectFirstName(state)
//   const lastName = selectLastName(state)
//   return firstName + lastName
// }

// const selectFullName = createSelector(
//   selectFirstName,
//   selectLastName,
//   (firstName, lastName) => firstName + lastName
// )

// function UserCard() {
//   // const firstName = useSelector(selectFirstName)
//   // const lastName = useSelector(selectLastName)
//   const fullName = useSelector(selectFullName)

//   return <div>{fullName}</div>
// }
