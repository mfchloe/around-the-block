<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters>
      <!-- Left side: Full-Height Image -->
      <v-col cols="12" md="6" class="hdb-image"></v-col>

      <!-- Right side: Sign Up Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-form @submit.prevent="handleSubmit" class="form-container">
          <h2 class="text-h5 font-weight-bold">Create an account</h2>

          <v-text-field 
            v-model="nric" 
            label="NRIC" 
            required
            variant="outlined"
            density="comfortable"
            class="custom-input"
          />
          
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
          <small class="password-info">Use 8 or more characters with a mix of letters, numbers & symbols</small>

          <CustomButton :color="'primary'" :block="true" @click="handleSubmit">
            Create an account
          </CustomButton>

          <div class="login-link">
            <span>Already have an account?
              <router-link to="/signin" class="text-decoration-none">Log in</router-link>
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
      nric: "",
      email: "",
      password: "",
      passwordVisible: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Sign Up Submitted", this.nric, this.email, this.password);
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

.password-info {
  font-size: 12px;
  color: gray;
}

.login-link {
  margin-top: 16px;
  text-align: left;
}
</style>
