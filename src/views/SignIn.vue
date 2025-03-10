<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters>
      <!-- Left side: Full-Height Image -->
      <v-col cols="12" md="6" class="hdb-image"></v-col>

      <!-- Right side: Sign In Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-form @submit.prevent="handleSubmit" class="form-container">
          <h2 class="text-h5 font-weight-bold">Sign in</h2>

          <v-text-field 
            v-model="email" 
            label="Email Address" 
            type="email" 
            required
            variant="outlined"
            density="comfortable"
            class="custom-input"
          />

          <v-text-field
            v-model="password"
            label="Password"
            :type="passwordVisible ? 'text' : 'password'"
            append-inner-icon="mdi-eye"
            @click:append-inner="togglePasswordVisibility"
            required
            variant="outlined"
            density="comfortable"
            class="custom-input"
          />

          <div class="forgot-password">
            <router-link to="/forgot-password" class="text-decoration-none">Forgot password?</router-link>
          </div>

          <CustomButton :color="'primary'" :block="true" @click="handleSubmit">
            Sign in
          </CustomButton>

          <div class="login-link">
            <span>Don't have an account?
              <router-link to="/signup" class="text-decoration-none">Create one</router-link>
            </span>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  components: { CustomButton },
  data() {
    return {
      email: "",
      password: "",
      passwordVisible: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Sign In Submitted", this.email, this.password);
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.hdb-image {
  background-image: url('/HDB.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.form-container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.custom-input {
  background-color: transparent !important; /* Remove grey background */
}

.forgot-password {
  text-align: right;
  margin-bottom: 8px;
}

.login-link {
  margin-top: 16px;
  text-align: left;
}
</style>
