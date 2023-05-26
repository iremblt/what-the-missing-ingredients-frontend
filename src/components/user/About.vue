<template>
  <div class="user-about-card">
    <div v-if="userDetail.user" class="user-about-card__container">
      <img
        v-if="userDetail.user.Gender === 'Male'"
        class="user-about-card__container__icon"
        src="@/assets/chef-man-icon.png"
        alt="default chef"
      />
      <img
        v-else
        class="user-about-card__container__icon"
        src="@/assets/chef-woman-icon.png"
        alt="default chef"
      />
      <div class="user-about-card__container__detail">
        <h3 class="user-about-card__container__detail__title">
          {{ userDetail.user.name }}
        </h3>
        <div class="user-about-card__container__detail__email">
          {{ userDetail.user.email }}
        </div>
        <div class="user-about-card__container__detail__more">
          <div class="user-about-card__container__detail__more__details">
            Recipes :
            <i class="fa-solid fa-utensils chef-icon"> </i>
            {{ userDetail.totalRecipes }}
          </div>
          <div class="user-about-card__container__detail__more__details">
            Reviews :
            <i class="fa-solid fa-eye chef-icon"></i>
            {{ userDetail.totalReviews }}
          </div>
          <div class="user-about-card__container__detail__more__details">
            Age :
            <i class="chef-icon fa-solid fa-baby-carriage"></i>
            {{ userDetail.user.Age }}
          </div>
          <div class="user-about-card__container__detail__more__details">
            Occupation :
            <i class="chef-icon fa-solid fa-person-walking-luggage"></i>
            {{ userDetail.user.Occupation }}
          </div>
        </div>
      </div>
      <div
        v-if="
          isAuthenticated && getCurrentProfileId === userDetail.user.profileID
        "
        class="user-about-card__container__edit"
      >
        <div
          class="user-about-card__container__edit__buttons"
          @click="$router.push(`/user/edit/${userDetail.user.profileID}`)"
        >
          <i
            class="user-about-card__container__edit__buttons__icons fa-solid fa-pen-to-square"
          ></i
          >Edit
        </div>
        <div
          class="user-about-card__container__edit__buttons"
          @click="deleteUserConfirm"
        >
          <i
            class="user-about-card__container__edit__buttons__icons fa-solid fa-trash"
          ></i
          >Delete
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { deleteUser } from "@/utils/user";
export default {
  name: "UserAbout",
  props: {
    userDetail: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters._isAuthenticated;
    },
    getCurrentProfileId() {
      return this.$store.getters._getCurrentUser?.profileID;
    },
  },
  methods: {
    userEdit() {
      this.$router.push({
        name: "userEdit",
        params: { id: this.$route.params.id },
      });
    },
    deleteUserConfirm() {
      this.$swal({
        title: "Are you sure?",
        text: "Are you sure want to delete this your account!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6f8244",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          deleteUser(this.$route.params.id)
            .then(() => {
              this.$swal("Deleted!", "Your user has been deleted.", "success");
              this.$router.push("/");
            })
            .catch(() =>
              this.$swal(
                "Something wrong!",
                "Something going wrong please try again!",
                "error"
              )
            );
        }
      });
    },
  },
};
</script>
<style lang="scss">
.user-about-card {
  margin-bottom: 50px;
  padding: 5rem;
  background-color: #fff;
  border-radius: 4px;
  &__container {
    display: flex;
    &__icon {
      width: 180px;
      height: auto;
    }
    &__detail {
      margin-left: 5rem;
      &__title {
        margin-bottom: 1rem;
        font-size: 20px;
      }
      &__email {
        margin-bottom: 2rem;
        font-size: 12px;
        color: grey;
      }
      &__more {
        &__details {
          font-size: 14px;
          color: #444444;
        }
      }
    }
    &__edit {
      position: absolute;
      right: 2rem;
      display: flex;
      &__buttons {
        font-size: 14px;
        margin-left: 2rem;
        cursor: pointer;
        font-weight: 600;
        &__icons {
          color: #f94616;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
