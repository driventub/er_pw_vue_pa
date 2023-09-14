import axios from "axios";

export const insertarProfesorFachada = async (body) => {
  await insertar(body);
};
const insertar = async (body) => {
  await axios.post(`http://localhost:8080/API/v1.0/Matricula/profesores`, body).then((r) => r.data);
};
export const borrarProfesorFachada = async (id) => {
  await borrar(id);
};
const borrar = async (id) => {
  await axios.delete(`http://localhost:8080/API/v1.0/Matricula/profesores/${id}`).then((r) => r.data);
};
export const buscarTodosProfesorFachada = async () => {
  return buscarTodos();
};
const buscarTodos = async () => {
  return await axios.get(`http://localhost:8080/API/v1.0/Matricula/profesores`).then((r) => r.data);
};
