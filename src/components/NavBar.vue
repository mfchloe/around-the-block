<template>
    <nav class="navbar">
      <div class="navbar-left">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
          <!-- Alternatively, you can display text as your logo -->
          <!-- <span class="logo-text">YourApp</span> -->
        </router-link>
      </div>
      
      <div class="navbar-right">
        <router-link to="/skills-sharing" class="nav-link">Skill Sharing</router-link>
        <router-link to="/inbox" class="nav-link">Inbox</router-link>
        
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-left .logo {
    text-decoration: none;
  }
  
  .logo-img {
    height: 40px;
    width: auto;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  
  .profile-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
  }
  
  .profile-icon:hover {
    border: 2px solid #007bff;
  }
  </style>
  