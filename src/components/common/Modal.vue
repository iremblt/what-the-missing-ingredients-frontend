<template>
  <transition name="modal-fade">
    <div class="common-modal modal-backdrop">
      <div
        class="common-modal__modal modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="common-modal__modal__header modal-header"
          id="modalTitle"
        >
          <div v-if="type === 'successfull'">
            <i
              class="fa-solid fa-circle-check common-modal__modal__header__icon"
            ></i>
            <strong class="common-modal__modal__header__title"
              >Successfully</strong
            >
            <span class="common-modal__modal__header__sub"
              >Successfully created
            </span>
          </div>
          <div v-else>
            <i
              class="fa-solid fa-triangle-exclamation common-modal__modal__header__icon"
            ></i>
            <strong class="common-modal__modal__header__title">Warning</strong>
            <span class="common-modal__modal__header__sub"
              >You need to register or login before !</span
            >
          </div>
          <button
            type="button"
            class="common-modal__modal__close-btn close-btn"
            @click="close"
            aria-label="Close Modal"
          >
            x
          </button>
        </header>
        <main
          class="common-modal__modal__body modal-body"
          id="modalDescription"
        ></main>
        <footer class="common-modal__modal__footer modal-footer">
          <div v-if="type === 'successfull'">
            <div class="common-modal__modal__footer__button-area">
              <button
                @click="close"
                type="submit"
                class="common-modal__modal__footer__button-area__button"
              >
                Close
              </button>
            </div>
          </div>
          <div v-else>
            <div class="common-modal__modal__footer__button-area">
              <button
                @click="changeModal"
                type="submit"
                class="common-modal__modal__footer__button-area__button"
              >
                Login here !
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "CommonModal",
  props: {
    type: {
      type: String,
      default: "successfull",
    },
  },
  computed: {},
  methods: {
    close() {
      this.$emit("close");
    },
    closeLogin() {
      this.$emit("close");
    },
    changeModal() {
      this.$emit("changeModal");
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
.common-modal {
  position: fixed !important;
  top: 0 !important;
  bottom: 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  opacity: 1 !important;
  &__modal {
    background: #ffffff !important;
    max-width: 400px !important;
    padding: 40px 15px !important;
    text-align: center !important;
    width: 100% !important;
    box-shadow: 2px 2px 20px 1px !important;
    display: flex !important;
    flex-direction: column !important;
    border-radius: 10px !important;
    left: 550px !important;
    height: 55% !important;
    margin-top: 5rem !important;

    &__header {
      display: block !important;
      color: #e52d2d;
      border: none !important;
      &__icon {
        color: #e63535;
        font-size: 30px !important;
        margin-bottom: 5px !important;
      }
      &__title {
        color: #323043;
        display: block !important;
        font-size: 28px;
      }
      &__sub {
        color: #717081;
        font-size: 15px;
        opacity: 0.8;
      }
    }
    &__close-btn {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 22px;
      border: none;
      font-weight: bold;
      background: transparent;
    }
    &__body {
      display: contents !important;
      font-family: "Lato", sans-serif;
    }
    &__footer {
      display: contents !important;
      padding: 15px;
      font-size: 14px;
      font-family: "Lato", sans-serif;
      &__button-area {
        text-align: center;
        &__button {
          color: white;
          border: 1px solid #e63535;
          background: #e63535;
          border-radius: 4px;
          margin: 20px auto;
          padding: 5px;
          width: 40%;
        }
      }
    }
  }
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
