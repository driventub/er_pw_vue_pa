<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center"></h1>
          <InsertarProfesor />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InsertarProfesor from "../components/InsertarProfesor.vue";

export default {
  components: {
    InsertarProfesor,
  },
};
</script>

<style scoped></style>
