<template>
  <div class="home-view">
    <header class="home-header">
      <h1>Welcome to the Home Page</h1>
      <p>Explore various features of our platform!</p>
    </header>
    
    <div class="content">
      <p>
        Start navigating to different sections of the app by using the links below.
      </p>

      <div class="button-container">
        <router-link to="/skills-sharing" class="btn">Skill Sharing</router-link>
        <router-link to="/skill-posting" class="btn">Post a Skill</router-link>
        <router-link to="/inbox" class="btn">Inbox</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}

.home-header {
  margin-bottom: 20px;
}

.home-header h1 {
  font-size: 2.5rem;
  color: #333;
}

.home-header p {
  font-size: 1.2rem;
  color: #666;
}

.content {
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
