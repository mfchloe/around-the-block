<template>
    <nav class="navbar">
      <div class="navbar-left">
        <router-link to="/">
          <img src="/ZhengHuaLogo.png" alt="Around The Block" class="logo" />
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    margin-left: 20px;
    height: 60px;
    width: auto;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    padding: 5px 30px;
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  </style>
  