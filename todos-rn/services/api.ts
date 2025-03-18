import { Task } from "@/types/task";

export async function fetchTasks() {
  const response = await fetch("http://192.168.1.157:3000/tasks");
  const data = await response.json();
  return data;
}

export async function addTask(text: string) {
  const response = await fetch("http://192.168.1.157:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  return data;
}

export async function updateTask(id: string, body: Task) {
  const response = await fetch(`http://192.168.1.157:3000/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

export async function deleteTask(id: string) {
  const response = await fetch(`http://192.168.1.157:3000/tasks/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

export async function login(username: string, password: string) {
  const response = await fetch(
    `http://192.168.1.157:3000/profile?username=${username}&password=${password}`
  );
  const data = await response.json();
  return data;
}
