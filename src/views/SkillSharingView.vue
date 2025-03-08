<template>
    <div class="skills-sharing-view">
      <h1>Skill Sharing</h1>
      <p>Here, you can share and learn various skills from others.</p>
  
      <!-- Add skill sharing cards or components here -->
      <div class="skills-list">
        <!-- Example Skill Card -->
        <div class="skill-card">
          <h3>Web Development</h3>
          <p>Learn how to build websites from scratch!</p>
          <button>Join Skill</button>
        </div>
        <!-- More skill cards can be added here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsSharingView',
  };
  </script>
  
  <style scoped>
  .skills-sharing-view {
    text-align: center;
    padding: 20px;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skill-card {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 250px;
    text-align: left;
  }
  
  .skill-card h3 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .skill-card p {
    color: #666;
  }
  
  .skill-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .skill-card button:hover {
    background-color: #0056b3;
  }
  </style>
  