<template>
  
    <h1>Ingreso de Profesor</h1>
    <div class="mb-3">
      <label for="" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="prof" v-model="nombre" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Apellido</label>
      <input type="text" class="form-control" id="prof" v-model="apellido" />
    </div>
    <div class="mb-3">
      <label for="" type="text" class="form-label">Fecha de Nacimiento</label>
      <input
        type="text"
        class="form-control"
        id="prof"
        v-model="fechaNacimiento"
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Cedula</label>
      <input type="text" class="form-control" id="prof" v-model="cedula" />
    </div>

    <button type="submit" class="btn btn-primary" @click="insertar()">Enviar</button>
  
</template>

<script>
import { insertarProfesorFachada } from "../helpers/apiProfesor";

export default {
  data() {
    return {
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      cedula: null,
    };
  },
  methods: {
    async insertar() {
      const datos = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        cedula: this.cedula,
      };

      await insertarProfesorFachada(datos);

      this.nombre =  ""
      this.apellido =  ""
      this.fechaNacimiento =  ""
      this.cedula =  ""

      alert("Insertado Exitosamente")
    },
  },
};
</script>

<style scoped></style>
