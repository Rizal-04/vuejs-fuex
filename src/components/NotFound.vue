<template>
  <div class="contact-us full-screen">
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">
                Oops! {{ getLocation }} Page tidak tersedia.
              </h2>
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
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/pages/register">Register</router-link>
            </li>
          </ul>
        </nav>
        <div class="copyright pull-right">
          &copy; 2021, made with
          <i class="fa fa-heart heart"></i> by Fuex admin
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {
    getLocation() {
      return this.$router.history.current.path;
    },
  },
};
</script>
