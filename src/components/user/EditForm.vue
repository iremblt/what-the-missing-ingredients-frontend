<template>
  <div class="user-edit">
    <div class="user-edit__form">
      <div class="user-edit__form__section">
        <h3 class="user-edit__form__section__header">Account Informations</h3>
        <form @submit.prevent="editUser">
          <div class="user-edit__form__section__area">
            <div class="user-edit__form__section__area__fields">
              <label
                class="user-edit__form__section__area__fields__label"
                for="name"
                >Name
              </label>
              <input
                class="user-edit__form__section__area__fields__input"
                type="text"
                v-model="user.name"
              />
              <div v-if="!validation.information.name">
                <p class="user-edit__form__section__area__fields__validation">
                  Name is required
                </p>
              </div>
            </div>
          </div>
          <div class="user-edit__form__section__area">
            <div class="user-edit__form__section__area__fields">
              <label
                class="user-edit__form__section__area__fields__label"
                for="email"
                >Email
              </label>
              <input
                class="user-edit__form__section__area__fields__input"
                type="email"
                v-model="user.email"
              />
              <div v-if="!validation.information.email">
                <p class="user-edit__form__section__area__fields__validation">
                  Email is required or invalid
                </p>
              </div>
            </div>
          </div>
          <div class="user-edit__form__section__area">
            <div class="user-edit__form__section__area__fields">
              <label
                class="user-edit__form__section__area__fields__label"
                for="age"
                >Age
              </label>
              <input
                class="user-edit__form__section__area__fields__input"
                type="number"
                v-model="user.Age"
              />
              <div v-if="!validation.information.Age">
                <p class="user-edit__form__section__area__fields__validation">
                  Age is required or invalid
                </p>
              </div>
            </div>
            <div class="user-edit__form__section__area__fields">
              <label
                class="user-edit__form__section__area__fields__label"
                for="gender"
                >Gender
              </label>
              <VueMultiselect
                class="user-edit__form__section__area__fields__select"
                v-model="user.Gender"
                :options="genderOptions"
              ></VueMultiselect>
              <div v-if="!validation.information.Gender">
                <p class="user-edit__form__section__area__fields__validation">
                  Gender is required
                </p>
              </div>
            </div>
          </div>
          <div class="user-edit__form__section__area">
            <div class="user-edit__form__section__area__fields">
              <label
                class="user-edit__form__section__area__fields__label"
                for="occupation"
                >Occupation
              </label>
              <input
                class="user-edit__form__section__area__fields__input"
                type="text"
                v-model="user.Occupation"
              />
            </div>
          </div>
          <div class="user-edit__form__section__send">
            <button
              class="user-edit__form__section__send__button"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div class="user-edit__form__divider"></div>
      <div class="user-edit__form__section">
        <div class="user-edit__form__section">
          <h3 class="user-edit__form__section__header">Password Update</h3>
          <form @submit.prevent="changePassword">
            <div class="user-edit__form__section__area">
              <div class="user-edit__form__section__area__fields">
                <label
                  class="user-edit__form__section__area__fields__label"
                  for="password"
                  >Current Password
                </label>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-if="!currentPasswordShow"
                >
                  <input
                    type="password"
                    class="user-edit__form__section__area__fields__input"
                    v-model="currentPassword"
                  />
                  <div @click="passwordIsShow('current')">
                    <i
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye-slash"
                    ></i>
                  </div>
                </div>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-else
                >
                  <input
                    type="text"
                    class="user-edit__form__section__area__fields__input"
                    v-model="currentPassword"
                  />
                  <div @click="passwordIsShow('current')">
                    <i
                      @click="passwordIsShow('current')"
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye red"
                    ></i>
                  </div>
                </div>
                <div v-if="!validation.currentPassword">
                  <p class="user-edit__form__section__area__fields__validation">
                    Password must be one uppercase and lowercase and one digit
                    character and one special character
                  </p>
                </div>
                <div v-if="passwordIsNotSame">
                  <p class="user-edit__form__section__area__fields__validation">
                    Current password and using password is not match!
                  </p>
                </div>
              </div>
            </div>
            <div class="user-edit__form__section__area">
              <div class="user-edit__form__section__area__fields">
                <label
                  class="user-edit__form__section__area__fields__label"
                  for="password"
                  >New Password
                </label>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-if="!newPasswordShow"
                >
                  <input
                    type="password"
                    class="user-edit__form__section__area__fields__input"
                    v-model="newPassword"
                  />
                  <div @click="passwordIsShow('new')">
                    <i
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye-slash"
                    ></i>
                  </div>
                </div>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-else
                >
                  <input
                    type="text"
                    class="user-edit__form__section__area__fields__input"
                    v-model="newPassword"
                  />
                  <div @click="passwordIsShow('new')">
                    <i
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye red"
                    ></i>
                  </div>
                </div>
                <div v-if="!validation.newPassword">
                  <p class="user-edit__form__section__area__fields__validation">
                    Password must be one uppercase and lowercase and one digit
                    character and one special character
                  </p>
                </div>
              </div>
            </div>
            <div class="user-edit__form__section__area">
              <div class="user-edit__form__section__area__fields">
                <label
                  class="user-edit__form__section__area__fields__label"
                  for="password"
                  >New Password Again
                </label>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-if="!againPasswordShow"
                >
                  <input
                    type="password"
                    class="user-edit__form__section__area__fields__input"
                    v-model="newPasswordAgain"
                  />
                  <div @click="passwordIsShow('again')">
                    <i
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye-slash"
                    ></i>
                  </div>
                </div>
                <div
                  class="user-edit__form__section__area__fields__condition"
                  v-else
                >
                  <input
                    type="text"
                    class="user-edit__form__section__area__fields__input"
                    v-model="newPasswordAgain"
                  />
                  <div @click="passwordIsShow('again')">
                    <i
                      class="user-edit__form__section__area__fields__icon fa-solid fa-eye red"
                    ></i>
                  </div>
                </div>
                <div v-if="!validation.newPasswordAgain">
                  <p class="user-edit__form__section__area__fields__validation">
                    Password must be one uppercase and lowercase and one digit
                    character and one special character
                  </p>
                </div>
                <div v-if="passwordMessage !== ''">
                  <p class="user-edit__form__section__area__fields__validation">
                    {{ passwordMessage }}
                  </p>
                </div>
              </div>
            </div>
            <div class="user-edit__form__section__send">
              <button
                class="user-edit__form__section__send__button"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
export default {
  name: "UserEditForm",
  components: { VueMultiselect },
  props: {
    userDetail: {
      type: Object,
      default: function () {
        return {
          user: {
            name: "",
            email: "",
            Age: 0,
            Gender: "Female",
            Occupation: "",
          },
        };
      },
    },
    passwordIsNotSame: { type: Boolean, default: false },
  },
  data() {
    return {
      user: this.userDetail.user,
      genderOptions: ["Female", "Male"],
      currentPassword: "",
      newPassword: "",
      newPasswordAgain: "",
      currentPasswordShow: false,
      newPasswordShow: false,
      againPasswordShow: false,
      validation: {
        information: {
          email: true,
          Age: true,
          name: true,
          Gender: true,
        },
        currentPassword: true,
        newPassword: true,
        newPasswordAgain: true,
      },
      passwordMessage: "",
    };
  },
  watch: {
    "user.email"(value) {
      this.validateEmail(value);
    },
    currentPassword(value) {
      this.validatePassword(value, "currentPassword");
    },
    newPassword(value) {
      this.validatePassword(value, "newPassword");
    },
    newPasswordAgain(value) {
      this.validatePassword(value, "newPasswordAgain");
    },
    "user.name"(value) {
      if (value && value !== "") {
        this.validation.information.name = true;
      } else {
        this.validation.information.name = false;
      }
    },
    "user.Gender"(value) {
      if (value && value !== "") {
        this.validation.information.Gender = true;
      } else {
        this.validation.information.Gender = false;
      }
    },
    "user.Age"(value) {
      if (value && value !== "") {
        if (value > 0 && value <= 100) {
          this.validation.information.Age = true;
        } else {
          this.validation.information.Age = false;
        }
      } else {
        this.validation.information.Age = false;
      }
    },
  },
  methods: {
    editUser() {
      const isValid = Object.values(this.validation.information).includes(
        false
      );
      if (!isValid) {
        this.$emit("editUser", this.user);
      }
    },
    changePassword() {
      const isValid = Object.values(this.validation).includes(false);
      if (
        !isValid &&
        this.currentPassword !== "" &&
        this.newPassword !== "" &&
        this.newPasswordAgain !== ""
      ) {
        if (this.newPassword === this.newPasswordAgain) {
          if (this.newPassword === this.currentPassword) {
            this.passwordMessage =
              "Current password and new password cannot be same!";
          } else {
            const passwords = {
              currentWritedPassword: this.currentPassword,
              currentPassword: this.userDetail.user.password,
              newPassword: this.newPassword,
            };
            this.$emit("editPassword", passwords);
            this.passwordMessage = "";
          }
        } else {
          this.passwordMessage =
            "New password and new password again password should be same!";
        }
      }
    },
    passwordIsShow(type) {
      if (type === "current") {
        this.currentPasswordShow = !this.currentPasswordShow;
      } else if (type === "new") {
        this.newPasswordShow = !this.newPasswordShow;
      } else if (type === "again") {
        this.againPasswordShow = !this.againPasswordShow;
      }
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        this.validation.information.email = true;
        return;
      } else {
        this.validation.information.email = false;
      }
    },
    validatePassword(password, type) {
      const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
      if (re.test(password) && password.length >= 6) {
        this.validation[type] = true;
        return;
      } else {
        this.validation[type] = false;
      }
    },
  },
};
</script>
<style lang="scss">
.user-edit {
  &__form {
    display: flex;
    border-radius: 6px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
    font-size: 13px;
    &__section {
      width: 100%;
      padding: 20px;
      &__header {
        margin-bottom: 2rem;
        font-weight: 600;
        line-height: 22px;
        color: #f94616;
      }
      &__area {
        justify-content: space-between;
        margin-bottom: 10px;
        display: flex;
        &__fields {
          flex-direction: column;
          font-size: 14px;
          line-height: 18px;
          display: flex;
          width: 100%;
          margin-right: 1rem;
          &__label {
            font-size: 14px;
            font-family: "Lato", sans-serif;
            margin-bottom: 10px;
            color: #514b49;
            font-weight: bold;
          }
          &__input {
            background-color: #fbfbfb;
            border: 1px solid #e4d9d1;
            border-radius: 6px;
            height: 40px;
            outline: 0;
            font-size: 14px;
            margin-bottom: 30px;
            padding: 1rem;
            width: 100%;
          }
          &__select {
            background-color: #fbfbfb;
            border: 1px solid #e4d9d1;
            border-radius: 6px;
            height: 40px;
            outline: 0;
            margin-bottom: 30px;
          }
          &__condition {
            display: flex;
            align-items: center;
          }
          &__icon {
            margin-bottom: 30px;
            font-size: 18px;
            width: 40px;
            color: #999999;
            cursor: pointer;
          }
          &__validation {
            color: red;
            margin-top: -2rem;
          }
        }
      }
      &__send {
        &__button {
          font-size: 14px;
          border-radius: 6px;
          padding: 8px;
          background: 0 0;
          border: 1px solid #f94616;
          color: #f94616;
          line-height: 22px;
          width: 100%;
        }
      }
    }
    &__divider {
      border-left: solid 1px #e2e2e2;
    }
  }
}
</style>
