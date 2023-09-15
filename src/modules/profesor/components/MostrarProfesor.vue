<template>
    <button
            type="button"
            class="btn btn-primary"
            @click="buscar()"
          >
            Consultar
          </button>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Cedula</th>
        <th scope="col">Nombre</th>
        <th scope="col">Accion</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(profesor, index) in profesores" :key="profesor.id">
        <td>{{ profesor.cedula }}</td>
        <td>{{ profesor.nombre }}</td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="enviar(profesor.links)"
          >
            Ver
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="eliminar(profesor.id)"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import {
  borrarProfesorFachada,
  buscarTodosProfesorFachada,
} from "../helpers/apiProfesor";

export default {
  data() {
    return {
      profesores: [],
    };
  },

  methods: {
    async buscar() {
       this.profesores = await buscarTodosProfesorFachada();
    },

    // como llega un array de links, le separo para el href
    async enviar(link) {

      const [raiz] = link
      const ref = await axios.get(raiz.href).then(r=> r.data)
      console.log(ref);
      this.$emit("apiLink", ref);
    },
    async eliminar(id) {
      await borrarProfesorFachada(id);
      alert("Eliminado");
    },
  },
};
</script>

<style scoped></style>
