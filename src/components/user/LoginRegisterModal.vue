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
          <div v-if="modalType ? modalType === 'Login' : type === 'Login'">
            <i
              class="fa-solid fa-right-to-bracket common-modal__modal__header__icon"
            ></i>
            <strong class="common-modal__modal__header__title">Log in</strong>
            <span class="common-modal__modal__header__sub"
              >Log in your account</span
            >
          </div>
          <div v-else>
            <i
              class="fa-solid fa-circle-user common-modal__modal__header__icon"
            ></i>
            <strong class="common-modal__modal__header__title">Register</strong>
            <span class="common-modal__modal__header__sub"
              >Create your account</span
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
        >
          <form
            v-if="modalType ? modalType === 'Login' : type === 'Login'"
            @submit.prevent="submitLoginModal"
            class="common-modal__modal__body__form"
          >
            <div class="form">
              <div class="form__input-area">
                <i
                  class="form__input-area__icon fa-solid fa-envelope-open-text"
                ></i>
                <label for="email" class="form__input-area__label">Email</label>
                <input
                  type="email"
                  class="form__input-area__input"
                  v-model="loginForm.email"
                />
                <p
                  v-if="!validationLogin.email && loginForm.email !== ''"
                  class="validation"
                >
                  Email is not valid
                </p>
                <p
                  v-if="!validationLogin.email && loginForm.email === ''"
                  class="validation"
                >
                  Email is required
                </p>
              </div>
              <div class="form__input-area">
                <div @click="passwordIsShow">
                  <i :class="classPasswordIcon"> </i>
                </div>
                <label for="password" class="form__input-area__label"
                  >Password</label
                >
                <input
                  v-if="!showPassword"
                  type="password"
                  class="form__input-area__input"
                  v-model="loginForm.password"
                />
                <input
                  v-else
                  type="text"
                  class="form__input-area__input"
                  v-model="loginForm.password"
                />
                <div v-if="!validationLogin.password">
                  <p v-if="loginForm.password !== ''" class="validation">
                    Password must be one uppercase and lowercase and one digit
                    character and one special character
                  </p>
                  <p v-else class="validation">Password is required</p>
                </div>
              </div>
              <div class="form__link-area">
                <a
                  href="#"
                  @click="changeModalType('Register')"
                  class="form__link-area__link"
                >
                  I dont have an account yet !</a
                >
              </div>
              <div class="form__button-area">
                <button type="submit" class="form__button-area__button">
                  Log in
                  <i
                    class="form__button-area__button__icon fa-solid fa-arrow-right"
                  ></i>
                </button>
              </div>
            </div>
          </form>
          <form
            v-else
            @submit.prevent="submitRegisterModal"
            class="common-modal__modal__body__form"
          >
            <div class="form">
              <div class="form__input-area">
                <i class="form__input-area__icon fa-solid fa-user"></i>
                <label for="email" class="form__input-area__label">Name</label>
                <input
                  type="text"
                  class="form__input-area__input"
                  v-model="registerForm.name"
                />
                <div v-if="!validationRegister.name">
                  <p class="validation">Name is required</p>
                </div>
              </div>
              <div class="form__input-area">
                <i
                  class="form__input-area__icon fa-solid fa-envelope-open-text"
                ></i>
                <label for="email" class="form__input-area__label">Email</label>
                <input
                  type="email"
                  class="form__input-area__input"
                  v-model="registerForm.email"
                />
                <p
                  v-if="!validationRegister.email && registerForm.email !== ''"
                  class="validation"
                >
                  Email is not valid
                </p>
                <p
                  v-if="!validationRegister.email && registerForm.email === ''"
                  class="validation"
                >
                  Email is required
                </p>
              </div>
              <div class="form__input-area">
                <div @click="passwordIsShow">
                  <i :class="classPasswordIcon"> </i>
                </div>
                <label for="password" class="form__input-area__label"
                  >Password</label
                >
                <input
                  v-if="!showPassword"
                  type="password"
                  class="form__input-area__input"
                  v-model="registerForm.password"
                />
                <input
                  v-else
                  type="text"
                  class="form__input-area__input"
                  v-model="registerForm.password"
                />
                <div v-if="!validationRegister.password">
                  <p v-if="registerForm.password !== ''" class="validation">
                    Password must be one uppercase and lowercase and one digit
                    character and one special character
                  </p>
                  <p v-else class="validation">Password is required</p>
                </div>
              </div>
              <div class="form__input-area">
                <i class="form__input-area__icon fa-solid fa-baby-carriage"></i>
                <label for="email" class="form__input-area__label">Age</label>
                <input
                  type="number"
                  max="100"
                  min="0"
                  class="form__input-area__input"
                  v-model="registerForm.Age"
                />
              </div>
              <div class="form__input-area">
                <i class="form__input-area__icon fa-solid fa-venus-mars"></i>
                <label for="email" class="form__input-area__label"
                  >Gender</label
                >
                <div>
                  <VueMultiselect
                    class="form__input-area__input"
                    v-model="registerForm.Gender"
                    :options="genderOptions"
                  ></VueMultiselect>
                </div>
                <div v-if="!validationRegister.Gender">
                  <p class="validation">Gender is required</p>
                </div>
              </div>
              <div class="form__input-area">
                <i
                  class="form__input-area__icon fa-solid fa-person-walking-luggage"
                ></i>
                <label for="email" class="form__input-area__label"
                  >Occupation</label
                >
                <input
                  type="text"
                  class="form__input-area__input"
                  v-model="registerForm.Occupation"
                />
              </div>
              <div class="form__link-area">
                <a
                  href="#"
                  @click="changeModalType('Login')"
                  class="form__link-area__link"
                >
                  I already have member !</a
                >
              </div>
              <div class="form__button-area">
                <button type="submit" class="form__button-area__button">
                  Join us
                  <i
                    class="form__button-area__button__icon fa-solid fa-arrow-right"
                  ></i>
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  </transition>
</template>
<script>
import VueMultiselect from "vue-multiselect";
export default {
  name: "LoginRegisterModal",
  components: { VueMultiselect },
  props: {
    type: {
      type: String,
      default: "Login",
    },
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        name: "",
        email: "",
        password: "",
        Age: 0,
        Gender: "",
        MaritalStatus: "",
        Occupation: "",
      },
      showPassword: false,
      genderOptions: ["Female", "Male"],
      modalType: "",
      validationLogin: {
        email: true,
        password: true,
      },
      validationRegister: {
        email: true,
        password: true,
        name: false,
        Gender: false,
      },
    };
  },
  computed: {
    classPasswordIcon() {
      return {
        "form__input-area__icon fa-solid password-icon fa-eye-slash blue":
          this.showPassword,
        "form__input-area__icon fa-solid password-icon fa-eye red":
          !this.showPassword,
      };
    },
  },
  watch: {
    "loginForm.email"(value) {
      this.validateEmail(value, "Login");
    },
    "registerForm.email"(value) {
      this.validateEmail(value, "Register");
    },
    "loginForm.password"(value) {
      this.validatePassword(value, "Login");
    },
    "registerForm.password"(value) {
      this.validatePassword(value, "Register");
    },
    "registerForm.name"(value) {
      if (value && value !== "") {
        this.validationRegister.name = true;
      } else {
        this.validationRegister.name = false;
      }
    },
    "registerForm.Gender"(value) {
      if (value && value !== "") {
        this.validationRegister.Gender = true;
      } else {
        this.validationRegister.Gender = false;
      }
    },
  },
  methods: {
    close() {
      this.modalType = "";
      this.$emit("close");
    },
    submitLoginModal() {
      const isValid = Object.values(this.validationLogin).includes(false);
      if (!isValid) {
        this.$emit("submittedModal", this.loginForm);
        this.$emit("close");
      }
    },
    submitRegisterModal() {
      const isValid = Object.values(this.validationRegister).includes(false);
      if (!isValid) {
        this.$emit("submittedModal", this.registerForm);
        this.$emit("close");
      }
    },
    passwordIsShow() {
      this.showPassword = !this.showPassword;
    },
    changeModalType(type) {
      this.modalType = type;
    },
    validateEmail(email, type) {
      const validationType = "validation" + type;
      const re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        this[validationType].email = true;
        return;
      } else {
        this[validationType].email = false;
      }
    },
    validatePassword(password, type) {
      const validationType = "validation" + type;
      const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
      if (re.test(password) && password.length >= 6) {
        this[validationType].password = true;
        return;
      } else {
        this[validationType].password = false;
      }
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
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
    height: 80% !important;
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
      &__form {
        border: 0;
        padding: 0;
        margin: 0;
        .form {
          padding: 0 20px;
          &__input-area {
            position: relative;
            text-align: left;
            display: grid;
            &__icon {
              font-size: 16px;
              position: absolute;
              right: 10px;
              top: 40px;
              color: #717081;
              opacity: 0.3;
            }
            .password-icon {
              cursor: pointer;
            }
            &__label {
              color: #717081;
              font-size: 17px;
              opacity: 0.7;
            }
            &__input {
              color: #717081;
              font-size: 17px;
              border: 0;
              height: 35px;
              margin-bottom: 15px;
              background: no-repeat;
              background-image: linear-gradient(
                  to bottom,
                  rgba(77, 97, 252, 0.63) 0%,
                  #4d61fc 90%
                ),
                linear-gradient(to bottom, #e1e1e1, #e1e1e1);
              background-size: 0 2px, 100% 1px;
              background-position: 50% 100%, 50% 100%;
            }
          }
          &__button-area {
            &__button {
              align-items: center;
              background: #cbda8f;
              border-radius: 6px;
              border: 0;
              color: #fff;
              font-size: 16px;
              padding: 15px 45px;
              font-weight: 600;
              &__icon {
                margin: 0 0 0 10px;
              }
            }
          }
          &__link-area {
            text-align: right;
            margin-bottom: 25px;
            &__link {
              color: #e63535;
              font-size: 17px;
              opacity: 0.7;
            }
          }
        }
      }
    }
    &__footer {
      padding: 15px;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-family: "Lato", sans-serif;
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
.validation {
  color: red;
  font-size: 13px;
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
