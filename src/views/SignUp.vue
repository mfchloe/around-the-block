<template>
    <v-container fluid class="d-flex pa-0">
      <!-- Left side: HDB image -->
      <v-col cols="12" md="6" class="hdb-image" style="background-image: url('/HDB.png'); background-size: cover;">
      </v-col>
  
      <!-- Right side: SignUp Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-form @submit.prevent="handleSubmit">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-h5">Create Account</v-card-title>
  
            <v-text-field
              v-model="nric"
              label="NRIC"
              outlined
              required
            />
  
            <v-text-field
              v-model="email"
              label="Email Address"
              type="email"
              outlined
              required
            />
  
            <v-text-field
              v-model="password"
              label="Password"
              outlined
              required
              append-icon="mdi-eye"
              :type="passwordVisible ? 'text' : 'password'"
              @click:append="togglePasswordVisibility"
            />
  
            <v-btn
              color="primary"
              class="rounded"
              block
              type="submit"
            >
              Create Account
            </v-btn>
  
            <v-divider class="my-3" />
  
            <v-row>
              <v-col class="text-center">
                <span>Already have an account? <router-link to="/login" class="text-decoration-none">Login</router-link></span>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-col>
    </v-container>
  </template>
  
  <script>
  export default {
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
        // Handle form submission
        console.log("Form Submitted", this.nric, this.email, this.password);
      },
      togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  .hdb-image {
    background-position: center;
    height: 100vh;
    background-size: cover;
  }
  </style>
  