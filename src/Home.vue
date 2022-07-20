<template>
  <div class="text-center">
    <div style="position: relative; top: 40vh">
      <b-img center src="/ngmusiclogo.png" alt="Center image" height="83.8" width="72.2"></b-img>
    </div>

    <div style="position: relative; top: 70vh">
      <b-row>
        <b-col cols="2"> </b-col>
        <b-col cols="8">
          <b-form-input v-model="text" placeholder="Artist/Album/Title" class="form-style"></b-form-input>
        </b-col>
        <b-col cols="2"> </b-col>
      </b-row>
    </div>
    <div style="position: relative; top: 75vh">
      <b-row>
        <b-col cols="2"> </b-col>
        <b-col cols="8">
          <b-button pill block class="searchs">Search</b-button>
        </b-col>
        <b-col cols="2"> </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: ""
    }
  }
}
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-image: linear-gradient(to bottom, #712bda, #a45deb);
  height: 100vh;
}

.form-style {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.43px;
}
.form-control {
  border-radius: 20px !important;
}
.searchs {
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  width: 255px;
}
.btn-secondary {
  --bs-btn-bg: rgba(255, 255, 255, 0.2) !importannt;
}
</style>
