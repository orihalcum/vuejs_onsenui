<template id="HelloWordSearch">
  <ons-page id="tabbar-page">
    <ons-toolbar style="background: rgb(255, 0, 0) !important">
      <div class="left">
        <router-link to="/">
        <ons-toolbar-button style="color: white !important">
          <ons-icon  icon="md-arrow-left" class="ons-icon zmdi zmdi-arrow-left"></ons-icon>
        </ons-toolbar-button>
        </router-link>
      </div>
      <div class="center" style="color: white !important">Home</div>
      <div class="right">
        <ons-toolbar-button style="color: white !important">
          <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </ons-toolbar>

    <ons-card @click="detail">
      <div class="title">{{ nameCountry }}</div>
      <div class="content">
        <img v-bind:src="flag" style="height: 50px; width: 50px">
      </div>
      <div class="content">subregion: {{ subregionCountry }}</div>
      <div class="content">region: {{ regionCountry }}</div>
      <div class="content">timezone: {{ timezoneCountry }}</div>
      <div class="content">timezone: {{ currencyCountry }}</div>
      <div class="content">timezone: {{ languagesCountry }}</div>
    </ons-card>

    <ons-modal direction="up">
        <ons-card @click="hideDetail">
            <div class="content" style="font-size: 28px">{{ nameCountry }}</div>
            <div class="content">
                <img v-bind:src="flag" style="height: 50px; width: 50px">
            </div>
            <div class="content">subregion: {{ subregionCountry }}</div>
            <div class="content">region: {{ regionCountry }}</div>
            <div class="content">timezone: {{ timezoneCountry }}</div>
            <div class="content">timezone: {{ currencyCountry }}</div>
            <div class="content">timezone: {{ languagesCountry }}</div>
        </ons-card>
    </ons-modal>

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
            }
        })
      },

      detail: function() {
          var modal = document.querySelector('ons-modal');
          modal.show();
      },

      hideDetail: function() {
          var modal = document.querySelector('ons-modal');
          modal.hide();
      }
  }
}  
</script>
<style>
    .toolbar--material toolbar{
        background: red !important
    }
</style>
