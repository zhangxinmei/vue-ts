<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-button type="primary" @click="alertS">sss</v-button>
    <v-button type="default">fff</v-button>
    <v-button type="long">bbb</v-button>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <p>{{value1}}</p>
    <List @confirm="clickList"></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dayjs from "dayjs";
import VButton from "@/components/VButton.vue"; // @ is an alias to /src
import List from "@/components/List.vue";

@Component({
  components: {
    VButton,
    List
  }
})
export default class About extends Vue {
  private value1: any = "";
  private clickList(val: any) {
    console.log("val", val);
  }
  private created(): void {
    console.log("dayjs", dayjs(new Date()).format("YYYY-MM-DD"));
    console.log(
      "dayjs2",
      dayjs("2018-08-07T16:00:00.000Z").format("YYYY-MM-DD")
    );
  }
  private alertS() {
    console.log(333);
  }
}
</script>
