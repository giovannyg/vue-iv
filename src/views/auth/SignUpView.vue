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

const onSubmit = (form) => {
  axios.post('/api-endpoint', formFields);
  alert("Submitted");
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

</script>
<template>
  <div class="form-container">
    <h2>Registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="fields">
        <div class="form-group">
          <label for="email">Email</label>
          <Field id="email" name="email" type="email" v-model="formFields.email" />
          <ErrorMessage name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field id="password" name="password" type="password" v-model="formFields.password" />
          <ErrorMessage name="password" />
        </div>
      </div>
      <button>Registrar</button>
    </Form>
    <div class="auth-extras">
      <RouterLink to="/auth/login">Login</RouterLink>
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
