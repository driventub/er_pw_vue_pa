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

    enviar(link) {
      this.$emit("apiLink", link);
    },
    async eliminar(id) {
      await borrarProfesorFachada(id);
      alert("Eliminado");
    },
  },
};
</script>

<style scoped></style>
