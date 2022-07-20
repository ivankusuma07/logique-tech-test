<template>
  <div class="bg">
    <!-- <div style="position: relative; top: 40vh">
      LIST
    </div> -->

    <div class="bar">
      <b-row>
        <b-col cols="2">
          <b-img center src="/menu.png" alt="Center image" height="11.4" width="14"></b-img>
        </b-col>
        <b-col cols="8"> <b-img center src="/ngmusictext.png" alt="Center image" height="15.8" width="72.2"></b-img></b-col>
        <b-col cols="2"> <b-img center src="/search.png" alt="Center image" height="14" width="14" @click="modalSearch = true"></b-img></b-col>
      </b-row>
    </div>
    <div class="text-center">
      Search result for : <span class="searchResult"> {{ text }}</span>
    </div>
    <div>
      <div v-for="(items, idx) in listSong" :key="idx" class="Cards">
        <b-row>
          <b-col cols="5">
            <b-img left rounded :src="items.artworkUrl100" alt="Left image" width="100" height="100"></b-img>
          </b-col>
          <b-col cols="7">
            <div class="title">{{ items.artistName }}</div>
            <div class="songTitle">{{ items.trackName }}</div>
            <b-row>
              <b-col cols="6">
                <div class="badge">{{ items.primaryGenreName }}</div>
              </b-col>
              <b-col cols="6" class="mt-5">
                <b-img src="/currency.png" alt="Center image" height="16" width="16"></b-img>
                <span style="color: #f5b014"> {{ items.trackPrice }}</span>
              </b-col>
            </b-row>

            <!-- <div style="margin-left: 100px">
             
            </div> -->
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal v-model="modalSearch" centered title="Search" hide-footer hide-header no-stacking>
      <!-- <div class="container"> -->
      <div class="modalTitle modalTitles text-center mb-5">Search</div>
      <b-row class="mb-2">
        <b-col cols="2"> </b-col>
        <b-col cols="8">
          <b-form-input v-model="text" placeholder="Artist/Album/Title" class="form-style"></b-form-input>
        </b-col>
        <b-col cols="2"> </b-col>
      </b-row>
      <b-row>
        <b-col cols="2"> </b-col>
        <b-col cols="8">
          <b-button pill block class="searchs" @click="getSong">Search</b-button>
        </b-col>
        <b-col cols="2"> </b-col>
      </b-row>
      <!-- <b-button variant="link" class="closeBtn top-right" @click="modalSearch = false"> &times; </b-button> -->

      <!-- <b-form @submit="loginSubmit"> -->
      <!-- <b-form-group id="input-group-1" label="Email" label-for="input-1">
          <b-form-input id="input-1" v-model="loginForm.email" type="email" placeholder="Enter your email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-input-group class="mb-2">
            <b-form-input
              id="input-2"
              :type="passwordField"
              v-model="loginForm.password"
              placeholder="Enter your password"
              v-on:keyup.enter="loginSubmit"
            ></b-form-input>
            <b-input-group-append>
              <b-button @click="hideAndShowPass" variant="outline-dark" size="sm">
                <b-icon :icon="icons"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-button type="button" variant="danger" @click="loginSubmit"><b-spinner v-show="showSpinner" class="mr-2" small></b-spinner>Log in</b-button> -->
      <!-- </b-form> -->
      <!-- </div> -->
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      text: "",
      listSong: [],
      modalSearch: false
    }
  },
  mounted() {
    this.getSong()
  },
  methods: {
    async getSong() {
      await this.$axios
        .get(`https://itunes.apple.com/search?term=${this.text}&limit=4`)
        .then((response) => {
          console.log("list country", response.data.results)
          this.listSong = response.data.results
          // this.$toast.success('Register Success.', {
          //   // optional options Object
          // })
          this.modalSearch = false
        })
        .catch((err) => {
          console.log(err)
          // this.$toast.open({
          //   message: err,
          //   type: 'error',
          // })
          this.modalSearch = false
        })
    }
  }
}
</script>

<style scoped>
.bg {
  font-family: "Roboto", sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* background-image: linear-gradient(to bottom, #712bda, #a45deb); */
  background-color: #f8fafc;
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
  width: 255px;
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

.bar {
  /* width: 340px; */
  height: 60px;
  margin: 0 0 39px;
  padding: 18px 15px 22.2px;
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
}

.Cards {
  width: 360px;
  height: auto;
  margin: 36px 15px 20px;
  padding: 12px 12px 11px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
}

.title {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #334155;
}

.songTitle {
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #334155;
}

.badge {
  width: auto;
  height: 20px;
  margin-top: 50px;
  padding: 5px 13px 4px;
  border-radius: 10px;
  background-color: #10b981;
}

.searchResult {
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  color: #7b34dd;
}
</style>
