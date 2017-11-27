<template>
    <button
            class="c-button"
            :class="[
              type ? 'c-button--' + type : '',
              size ? 'c-button--' + size : '',
              {
                'is-disabled': disabled,
                'is-loading': loading,
                'c-button--outline': outline,
                'c-button--round': round,
                'c-button--full': full
              }
             ]"
            :disabled="disabled"
            :type="buttonType"
            :autofocus="autofocus"
            @click="clickHandler"
    >
    <i
            :class="[
              'fa',
              'fa-' + icon,
            ]"
            v-if="icon"
    >
    </i>
    <slot></slot>
    </button>
</template>

<script>
  export default {

    props: {
      type: {
        type: String,
        default: ''
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      buttonType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      outline: Boolean,
      autofocus: Boolean,
      round: Boolean,
      full: Boolean
    },

//    computed: {
//      _elFormItemSize() {
//        return (this.elFormItem || {}).elFormItemSize;
//      },
//      buttonSize() {
//        return this.size;
//        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
//      }
//    },

    methods: {
      clickHandler: function(e) {

        if (this.disabled) {

          return;

        }
        this.$emit('click', e);

      }

    }
  };
</script>
