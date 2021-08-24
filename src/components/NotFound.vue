<template>
  <div class="contact-us full-screen">
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! "{{ rerer }}" tidak tersedia.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/pages/login">Login</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright pull-right">
          &copy; 2020, made with
          <i class="fa fa-heart heart"></i> by Fuex Service
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {
    rerer() {
      console.log(this.$router.history.current.path);
      return this.$router.history.current.path;
    },
  },
};
</script>
