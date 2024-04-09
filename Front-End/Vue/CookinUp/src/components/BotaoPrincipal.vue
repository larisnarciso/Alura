<script lang="ts">
export default {
  props: {
    texto: { type: String, required: true },
  },
};
</script>

<template>
  <button class="btn-principal paragrafo-lg">{{ texto }}</button>
</template>

<style scoped>
.btn-principal {
  box-shadow: 4px 4px 15px 0px rgba(255, 155, 76, 0.25);
  background-color: var(--coral);
  color: var(--creme);
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 19.5rem;
  height: 3.5rem;
  gap: 10px;
  transition: 0.2s;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-principal:hover {
  background: var(--ocre);
}
</style>
