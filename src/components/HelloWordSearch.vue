<template id="HelloWordSearch">
  <ons-page id="tabbar-page">
    <ons-toolbar style="background: rgb(237, 24, 73) !important">
      <div class="left">
        <router-link to="/">
        <ons-toolbar-button style="color: white !important">
          <ons-icon  icon="md-arrow-left" class="ons-icon zmdi zmdi-arrow-left"></ons-icon>
        </ons-toolbar-button>
        </router-link>
      </div>
      <div class="center" style="color: white !important">Home</div>
    </ons-toolbar>

    <ons-card @click="detail">
        <div class="title" v-if="nameCountry !== ''" style="display: flex">
            <img v-bind:src="flag" style="height: 50px; width: 50px"> 
            <span style="margin-top: 15px; margin-left: 15px; font-weight: bold">  {{ nameCountry }}</span>
        </div>
    </ons-card>

    <ons-dialog direction="up">
        <ons-card @click="hideDetail">
            <div class="content" v-if="nameCountry !== ''" style="font-size: 28px">{{ nameCountry }}</div>
            <div class="content" v-else></div>
            <div class="content" v-if="flag !== ''">
                <img v-bind:src="flag" style="height: 50px; width: 50px">
            </div>
            <div class="content" v-else></div>
            <div class="content" v-if="subregionCountry !== ''">subregion: {{ subregionCountry }}</div>
            <div class="content" v-else></div>
            <div class="content" v-if="regionCountry !== ''">region: {{ regionCountry }}</div>
            <div class="content" v-else></div>
            <div class="content" v-if="timezoneCountry !== ''">timezone: {{ timezoneCountry }}</div>
            <div class="content" v-else></div>
            <div class="content" v-if="currencyCountry !== ''">currency: {{ currencyCountry }}</div>
            <div class="content" v-else></div>
            <div class="content" v-if="languagesCountry !== ''">language: {{ languagesCountry }}</div>
            <div class="content" v-else></div>
        </ons-card>
    </ons-dialog>

    <ons-dialog direction="up" id="errormodal" @click="hideDetailError">
        <div style="display: flex">
            <span><div class="content" style="margin-left: 80px; margin-top: 35px; font-weight: bold; color: rgb(237, 24, 73);">Maaf, data tidak ditemukan</div></span>
        </div>
    </ons-dialog>        

  </ons-page>
</template>

<script>
export default {
  name: 'HelloWordSearch',
  data () {
    return {
        dataCountry: [],
        nameCountry: '',
        regionCountry: '',
        timezoneCountry: '',
        subregionCountry: '',
        currencyCountry: '',
        languagesCountry: '',
        flag: ''
    }
  },

  mounted() {
      console.log(this.$route.params.parameter)
      let parameter = this.$route.params.parameter
      this.getData(parameter)
  },

  methods: {
      getData: function(parameter) {
        this.axios.get('https://restcountries.eu/rest/v2/name/' + parameter)
        .then((response) => {
            this.dataCountry = response.data

            if(this.dataCountry.length > 0){
                this.nameCountry = this.dataCountry[0].name
                this.regionCountry = this.dataCountry[0].region
                this.subregionCountry = this.dataCountry[0].subregion
                this.timezoneCountry = this.dataCountry[0].timezones[0]
                this.currencyCountry = this.dataCountry[0].currencies[0].name
                this.languagesCountry = this.dataCountry[0].languages[0].name
                this.flag = this.dataCountry[0].flag
            }else{
                
            }
        })
        .catch((err) => {
            var modal = document.getElementById('errormodal');
            modal.show();
        })
      },

      detail: function() {
          var modal = document.querySelector('ons-dialog');
          if(this.nameCountry !== ''){
              modal.show();
          }
      },

      hideDetail: function() {
          var modal = document.querySelector('ons-dialog');
          modal.hide();
      },

      hideDetailError: function() {
        //   var modal = document.getElementById('errormodal');
        //   modal.hide();
        //   return false
        this.$router.push({ name: 'HelloWorld' })
      }
  }
}  
</script>
<style>
    .toolbar--material toolbar{
        background: red !important
    }
    .dialog-container.dialog-container--material{
        width: 350px !important;
    }
</style>
