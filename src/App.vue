<template>
  <div id="app">
    <div class="header">
      <h1 class="title">Refresh & Infinite</h1>
    </div>
    <scroller :on-refresh="refresh"
              :on-infinite="infinite"
              style="padding-top: 44px;">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}" :key="index">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: []
    }
  },
  mounted: function () {
      for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking');
      }
      this.top = 1;
      this.bottom = 20;
    },
   methods: {
      refresh: function (done) {
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking');
          }
          self.top = self.top - 10;
          done();//执行成功时执行
        }, 1500)
      },

      infinite: function (done) {
        var self = this
        setTimeout(function () {
          var start = self.bottom + 1;
          for (var i = start; i < start + 10; i++) {
            self.items.push(i + ' - keep walking, be 2 with you.');
          }
          self.bottom = self.bottom + 10;
          done();
        }, 1500)
      }
    }
}
</script>

<style>
 html, body {
      margin: 0;
    }
    * {
      box-sizing: border-box;
    }
    .row {
      width: 100%;
      height: 50px;
      padding: 10px 0;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      color: #444;
      background-color: #fff;
    }
    .grey-bg {
      background-color: #eee;
    }
    .header {
      position: fixed;
      top: 0;
      left: 0;
      height: 44px;
      width: 100%;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
      background-color: #fff;
      z-index: 1000;
      color: #666;
    }

    .header > .title {
      font-size: 16px;
      line-height: 44px;
      text-align: center;
      margin: 0 auto;
    }
</style>
