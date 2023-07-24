<template>
  <div>
    <h1>Login</h1>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    loginWithGoogle() {
      axios.get('http://localhost:8000/api/social/google/login/google-oauth2/',{
	headers: {
	  'Access-Control-Allow-Origin': '*',
	},})
        .then(response => {
          window.location.href = response.data.redirect_url;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>