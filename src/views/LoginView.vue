<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/"
        ><b>{{ $store.state.app.name }}</b></a
      >
    </div>

    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form action="/login" method="post" @submit.prevent="login">
          <div class="input-group mb-3">
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember" class="ml-2">Remember Me</label>
              </div>
            </div>

            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/lib/axios";

export default {
  name: "form login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  beforeMount() {
    $("body").removeClass("sidebar-mini").addClass("login-page");
    $("title").html(`login | ${this.$store.state.app.name}`);
  },
  methods: {
    async login() {
      try {
        await axios
          .post("/user/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            if (res.data.status === true) {
              localStorage.setItem("Authorization", res.data.token);
              window.location.href = "/home";
            }
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>