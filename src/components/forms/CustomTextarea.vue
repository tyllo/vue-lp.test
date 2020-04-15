<template>
  <textarea
    ref="textarea"
    :value="value"
    :rows="rows"
    class="custom-textarea"
    :class="{ 'custom-textarea--autoresize': autoresize }"
    v-on="listeners"
    @input="onInput"
  />
</template>

<script>
import omit from 'lodash/omit';


export default {
  name: 'custom-textarea',
  props: {
    value: String,
    rows: Number,
    autoresize: Boolean,
  },
  computed: {
    listeners() {
      const listeners = this.$listeners || {};
      return omit(listeners, ['input']);
    },
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.$nextTick(this.autoResize);
      },
    },
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      this.$nextTick(this.autoResize);
    },
    autoResize() {
      const { textarea } = this.$refs;
      if (!this.autoresize || !textarea) return;

      const offset = textarea.offsetHeight - textarea.clientHeight;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + offset}px`;
    },
  },
};
</script>

<style lang="scss">

.custom-textarea {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: $color-grey-10;
  border: none;
  outline: none;

  &[disabled] {
    background-color: $color-grey-1;
  }

  &--autoresize {
    resize: none;
  }
}
</style>
