<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center"></h1>
            <MostrarProfesor @apiLink="enviarProfesor"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center"></h1>
            <BuscarProfesor :buscar="profesor"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuscarProfesor from "../components/BuscarProfesor.vue";
import MostrarProfesor from "../components/MostrarProfesor.vue";

export default {
  components: {
    MostrarProfesor,
    BuscarProfesor,
  },
  data() {
    return {
      profesor: null,
    };
  },
  methods: {
    enviarProfesor(prof) {
      this.profesor = prof;
    },
  },
};
</script>

<style scoped></style>
