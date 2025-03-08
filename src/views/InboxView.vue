<template>
    <div class="inbox-view">
      <h1>Inbox</h1>
      <p>Check your messages here.</p>
  
      <div class="message-list">
        <div class="message-item" v-for="message in messages" :key="message.id">
          <h3>{{ message.title }}</h3>
          <p>{{ message.body }}</p>
          <button @click="viewMessage(message.id)">View</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InboxView',
    data() {
      return {
        messages: [
          { id: 1, title: 'Welcome to the platform!', body: 'Get started with skill sharing.' },
          { id: 2, title: 'New skill posted', body: 'A new skill has been posted that might interest you.' },
          // More messages can be added here
        ],
      };
    },
    methods: {
      viewMessage(id) {
        // Logic to handle message viewing
        console.log('Viewing message with id:', id);
      },
    },
  };
  </script>
  
  <style scoped>
  .inbox-view {
    padding: 20px;
  }
  
  .message-list {
    display: flex;
    flex-direction: column;
  }
  
  .message-item {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
  }
  
  .message-item h3 {
    font-size: 1.5rem;
  }
  
  .message-item p {
    color: #666;
  }
  
  .message-item button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .message-item button:hover {
    background-color: #0056b3;
  }
  </style>
  