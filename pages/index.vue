<template>
  <div>
    <div class="container">

      <label for="fname">First Name</label>
      <input type="text" placeholder="Your name.." v-model="formData.firstName">

      <label for="lname">Last Name</label>
      <input type="text" placeholder="Your last name.." v-model="formData.lastName">

      <input type="submit" value="Submit" @click="sendForm">

    </div>
  </div>
</template>

<script setup>
const formData = reactive({
  firstName: ref(""),
  lastName: ref(""),
});

function sendForm() {
  try {
    useFetch('/api/contact', {
      method: "POST",
      body: {
        name: formData.firstName,
        lastName: formData.lastName,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>
body {
  font-family: Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

input[type=text],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>