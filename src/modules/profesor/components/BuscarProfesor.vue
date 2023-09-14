<template>
  <div>
    <div class="mb-3">
      <label for="" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="prof"
        v-model="buscar.nombre"
        disabled
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Apellido</label>
      <input
        type="text"
        class="form-control"
        id="prof"
        v-model="buscar.apellido"
        disabled
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Fecha de Nacimiento</label>
      <input
        type="text"
        class="form-control"
        id="prof"
        v-model="buscar.fechaNacimiento"
        disabled
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Cedula</label>
      <input
        type="text"
        class="form-control"
        id="prof"
        v-model="buscar.cedula"
        disabled
      />
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
</template>

<script>
export default {
    props:{
        buscar: null,
    },
   

};
</script>

<style scoped></style>
