<script setup>
import axios from 'axios';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { RouterLink } from "vue-router";
import * as yup from 'yup';
import "../../assets/form.css";

const formFields = {
  email: '',
  password: ''
}

const onSubmit = () => {
  axios.post('/api-endpoint', formFields);
  alert("Submitted");
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

/* const validateEmail = (value) => {
  // if the field is empty
  if (!value) {
    return 'This field is required';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  // All is good
  return true;
} */
</script>

<template>
  <div class="form-container">
    <h2>Login</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="fields">
        <div class="form-group">
          <label for="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" />
        </div>
      </div>
      <button>Login</button>
    </Form>
    <div class="auth-extras">
      <RouterLink to="/auth/signup">Registrar</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .fields {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
