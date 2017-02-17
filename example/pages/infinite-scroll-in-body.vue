<template>
  <div class="page-infinite">
    <h1 class="page-title">Infinite Scroll In Body</h1>
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
    <div class="page-infinite-wrapper" ref="wrapper">
      <p v-show="viewHistory" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中1...
      </p>
      <ul class="page-infinite-list" v-infinite-scroll-in-body="{loadMore:loadMore,loadHistory:loadHistory}" infinite-scroll-in-body-disabled="loading" infinite-scroll-in-body-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component infinite {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        viewHistory: false,
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },

    methods: {
      fixedPos() {
        var nodes = document.getElementsByClassName('page-infinite-wrapper');
        var scrollTop = nodes[0].scrollTop;
        nodes[0].scrollTop = scrollTop + 500;
      },
      loadHistory() {
        this.viewHistory = true;
        setTimeout(() => {
          let first = this.list[0];
          console.log(first);
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(first - i);
          }
          this.viewHistory = false;
          this.fixedPos();
        }, 500);
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>
