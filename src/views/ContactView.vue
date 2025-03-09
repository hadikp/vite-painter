<script>
  /* export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert('Az üzenet elküldve!');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}; */
</script>

<template>
  <div class="contact-container">
    <h1 class="title">Kapcsolat</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <label for="name">Név:</label>
      <input type="text" id="name" v-model="form.name" required>

      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="form.email" required>

      <label for="message">Üzenet:</label>
      <textarea id="message" v-model="form.message" required></textarea>

      <button type="submit">Küldés</button>
    </form>
    <div class="contact-info">
      <p><strong>Email:</strong> example@email.com</p>
      <p><strong>Telefon:</strong> +36 30 123 4567</p>
    </div>
  </div>

</template>

<style scoped>
  .contact-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input, textarea {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 15px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.contact-info {
  margin-top: 20px;
  text-align: center;
}
</style>