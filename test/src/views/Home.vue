<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld :msg="msgCon" />
    <Test :msg="testData" />
    <div class="parent">
      <div class="float-div">float</div>
      <div>no float</div>
    </div>
    <button @click="showPopUp">click</button>
    <van-popup v-model="show">内容</van-popup>
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <van-datetime-picker v-model="currentDate" type="datetime" @confirm="confirm" :min-date="minDate" :max-date="maxDate" v-show="showDate" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Test from "@/components/Test.vue";
import { Popup, Checkbox, DatetimePicker } from "vant";
import "vant/lib/vant-css/index.css";
@Component({
  components: {
    HelloWorld,
    Test,
    [Popup.name]: Popup,
    [Checkbox.name]: Checkbox,
    [DatetimePicker.name]: DatetimePicker
  }
})
export default class Home extends Vue {
  private testData = {
    title1: "hello",
    title2: "world"
  };
  private msgCon = "hello world";
  private show: boolean = false;
  private checked: boolean = true;
  private minHour: number = 10;
  private maxHour: number = 20;
  private minDate: any = new Date(1000, 1, 1);
  private maxDate: any = new Date(3000, 10, 1);
  private currentDate: any = new Date(1995, 1, 1);
  private showDate: boolean = true;
  private confirm() {
    this.showDate = false;
  }
  private showPopUp() {
    this.show = true;
  }
  private created() {
    console.log(2222, process.env.NODE_ENV);
  }
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
