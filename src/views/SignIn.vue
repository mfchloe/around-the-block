<template>
    <v-container fluid class="d-flex">
      <!-- Left side: HDB image -->
      <v-col cols="12" md="6" class="hdb-image" style="background-image: url('/path-to-your-hdb-image.jpg'); background-size: cover;">
      </v-col>
  
      <!-- Right side: Login Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <v-form @submit.prevent="handleLogin">
          <v-card class="pa-4" outlined>
            <v-card-title class="text-h5">Login</v-card-title>
  
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
  
            <v-row>
              <v-col cols="6">
                <router-link to="/forgot-password" class="text-decoration-none">Forgot Password?</router-link>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-btn
                  color="primary"
                  class="rounded"
                  block
                  type="submit"
                >
                  Login
                </v-btn>
              </v-col>
            </v-row>
  
            <v-divider class="my-3" />
  
            <v-row>
              <v-col class="text-center">
                <span>Don't have an account yet? <router-link to="/signup" class="text-decoration-none">Sign Up</router-link></span>
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
        email: "",
        password: "",
        passwordVisible: false,
      };
    },
    methods: {
      handleLogin() {
        // Handle login submission
        console.log("Login Submitted", this.email, this.password);
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
  }
  </style>
  