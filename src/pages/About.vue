<template>
  <div class="About">
    <p>
      このサイトは
      <a
        :href="event"
        target="_blank"
        rel="noopener"
      >
        技術書展5
      </a>
      で頒布された「後悔しないためのVueコンポーネント設計」用のサンプルプロジェクトです。
    </p>
    <p>
      このサイトのソースコードは
      <a
        :href="repo"
        target="_blank"
        rel="noopener">
        {{repo}}
      </a>から自由にダウンロード/cloneしてお使いいただけます。
    </p>
    <router-link to="/">TOPへ</router-link>
  </div> 
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      repo: "https://github.com/nakajmg/testable-vue-component-sample",
      event: "https://techbookfest.org/event/tbf05",
    }
  },
}
</script>

<style lang="scss">
.About {
  max-width: 540px;
  margin: 2em auto;
}
</style>
