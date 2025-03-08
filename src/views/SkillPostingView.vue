<template>
    <div class="skill-posting-view">
      <h1>Post a New Skill</h1>
      <form @submit.prevent="submitSkill">
        <label for="skill-title">Skill Title</label>
        <input type="text" v-model="skill.title" id="skill-title" required />
  
        <label for="skill-description">Skill Description</label>
        <textarea v-model="skill.description" id="skill-description" required></textarea>
  
        <button type="submit">Post Skill</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillPostingView',
    data() {
      return {
        skill: {
          title: '',
          description: '',
        },
      };
    },
    methods: {
      submitSkill() {
        // Logic to handle form submission
        console.log('Skill posted:', this.skill);
      },
    },
  };
  </script>
  
  <style scoped>
  .skill-posting-view {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
    font-weight: bold;
  }
  
  input, textarea {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  button {
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  