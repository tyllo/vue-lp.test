<template>
  <div class="chat-messages-input-form">
    <textarea
      v-model="model"
    />
  </div>
</template>

<script>

export default {
  name: 'chat-messages-input-form',
  data: () => ({
    model: '',
  }),
};
</script>

<style lang="scss">

.chat-messages-input-form {
  //
}
</style>
