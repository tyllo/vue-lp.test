<template>
  <div class="spinner" :class="classObject">
    <div class="spinner__bounce spinner__bounce--1" />
    <div class="spinner__bounce spinner__bounce--2" />
    <div class="spinner__bounce spinner__bounce--3" />
  </div>
</template>

<script>

export const COLORS = {
  BLUE: 'blue',
  WHITE: 'white',
  GREY_4: 'grey-4',
};

export default {
  name: 'spinner',
  props: {
    color: {
      type: String,
      default: 'blue',
      validator: (prop) => Object.values(COLORS).includes(prop),
    },
  },
  computed: {
    classObject() {
      return {
        [`spinner--${this.color}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">

.spinner {
  $root: &;

  width: 70px;
  text-align: center;

  &--white {
    color: $color-white;
  }

  &--blue {
    color: $color-blue-2;
  }

  &--grey-4 {
    color: $color-grey-4;
  }

  &__bounce {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: $currentColor;
    border-radius: 100%;
    animation: sk-bouncedelay 1s infinite ease-in-out both;

    & + & {
      margin-left: 4px;
    }

    &--1 {
      animation-delay: -0.24s;
    }

    &--2 {
      animation-delay: -0.12s;
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }
}
</style>
