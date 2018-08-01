<template>
  <div class="home">
    <p>fssffsf
      <span class="text">啊哈电话</span>
    </p>
    <img src="../assets/logo.png">
    <HelloWorld :msg="msgCon" />
    <Test :msg="testData" />
    <div class="parent">
      <div class="float-div">float</div>
      <div>no float</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Test from "@/components/Test.vue";
@Component({
  components: {
    HelloWorld,
    Test
  }
})
export default class Home extends Vue {
  private testData = {
    title1: "hello",
    title2: "world"
  };
  private msgCon = "323344";
}
</script>

<style lang="scss">
@import "../styles/mixin.scss";
.home {
  p {
    color: red;
    .text {
      font-size: 16px;
      color: $red;
    }
  }
  .parent {
    @include clearfix;
    .float-div {
      float: left;
    }
  }
}
</style>
