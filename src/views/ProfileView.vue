<template>
    <div class="profile-view">

        <div class="background-container" :style="{ backgroundImage: `url(${bgImage})` }">
            <div class="overlay-text">
                <h1> Welcome Shashank </h1>
                <p> This is your profile page. You can edit your details here. </p>
            </div>
        </div>

        <div class="profile-details">
            <label for="fullName"> Full Name: </label>
            <input type="text" id = "fullName" required = " " placeholder = "Enter your full name">

            <br><br>

            <label for="gender"> Gender: </label>
            <input type="text" id = "gender" required = " " placeholder = "Enter your gender">

            <br><br>

            <label for="phoneNumber"> Phone Number: </label>
            <input type="text" id = "phoneNumber" required = " " placeholder = "Enter your phone number">

            <br><br>

            <label for="address"> Address: </label>
            <input type="text" id = "address" required = " " placeholder = "Enter your address">

            <br><br>

            <label for="dateOfBirth"> Date of Birth: </label>
            <input type="text" id = "dateOfBirth" required = " " placeholder = "Enter your date of birth">

            <br><br>

            <label for="email"> Email: </label>
            <input type="text" id = "email" required = " " placeholder = "Enter your email">

        </div>

        <img src="@/assets/shashank.png" alt="">
    </div>
</template>

<script>
import backgroundImage from "@/assets/profile_background.png"; // Import the image

export default {
  name: "ProfileView",
  data() {
    return {
      bgImage: backgroundImage, // Store image path in data
    };
  },
};
</script>

<style scoped> 

.background-container {
  position: relative;
  width: 100%;
  height: 300px; 
  background-size: cover;
  background-position: center;
}


.background-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); 
}


.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
}

.profile-details {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.profile-details label {
  display: inline-block;
  width: 30%;
  margin-right: 10px;
  text-align: left;
  margin-bottom: 20px;
}

.profile-details input {
  display: inline-block;
  width: 65%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input:hover {
  box-shadow: 3px 3px grey;
  border-radius: 2px;
}

</style>