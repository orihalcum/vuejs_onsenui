<template id="HelloWorld">
  <ons-page id="tabbar-page">
    <ons-toolbar style="background: rgb(255, 0, 0) !important">
      <div class="center" style="color: white !important">Home</div>
      <div class="right">
        <ons-toolbar-button style="color: white !important">
          <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
        </ons-toolbar-button>
      </div>
    </ons-toolbar>

    <ons-card style="height: 570px !important">
      <ons-list>

          <ons-list-item class="input-items">
            <div class="left">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEdf00I9p2ocBSEI1OQLlR6JBPAvp_xKAH1JDBIkqDkgcPSW9">
            </div>
          </ons-list-item>

          <ons-list-item class="input-items">
            <label class="center">
              <v-ons-search-input id="name-input" float maxlength="20" placeholder="Search data" v-model="searchParam"></v-ons-search-input>
            </label>
            <div class="right">
              <ons-button class="button" v-on:click="searchDatanya" style="background: rgb(255, 0, 0) !important">
                <ons-icon icon="md-search" class="ons-icon zmdi zmdi-search"></ons-icon>
              </ons-button>
            </div>
          </ons-list-item>

        </ons-list-item>
      </ons-list>    
    </ons-card>
    
  </ons-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchParam: ''
    }
  },

  watch: {
    
  },

  methods: {
    searchDatanya: function() {
      let parameter = this.searchParam
      this.$router.push({ name: 'HelloWordSearch', params: {parameter: parameter} })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .toolbar--material toolbar{
        background: red !important
    }
</style>
