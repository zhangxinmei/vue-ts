<template>
  <div class="page">
    <ul>
      <li class="list" v-for="(item,index) in listOptions" :key="item.id" @click="clickList(item,index)">{{item.text}}</li>
    </ul>
    <div class="date">
      <van-datetime-picker v-model="currentDate" type="datetime" @confirm="confirm" :min-date="minDate" :max-date="maxDate" v-show="showDate" />
    </div>
    <div class="date">
      <van-picker show-toolbar title="菜单" :columns="column2" @confirm="onConfirm" v-show="showPicker" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DatetimePicker, Picker, Toast } from "vant";
import "vant/lib/vant-css/index.css";
interface Pick {
  text: string;
  id: string | number;
  selected: boolean;
}
@Component({
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Picker.name]: Picker
  }
})
export default class Page extends Vue {
  private showDate: boolean = false;
  private showPicker: boolean = false;
  private pickerDates2: Pick[] = [];
  private listOptions = [
    {
      text: "选项一",
      id: 1
    },
    {
      text: "选项三",
      id: 2
    },
    {
      text: "选项四",
      id: 3
    }
  ];
  private column1 = ["杭州", "宁波", "温州", "嘉兴", "湖州"];
  private column2 = [
    {
      text: "杭州",
      id: 0
    },
    {
      text: "宁波",
      id: 2
    },
    {
      text: "温州",
      id: 3
    }
  ];
  private minHour: number = 10;
  private maxHour: number = 20;
  private minDate: any = new Date(1000, 1, 1);
  private maxDate: any = new Date(3000, 10, 1);
  private currentDate: any = new Date(1995, 1, 1);
  private confirm() {
    this.showDate = false;
  }
  private onConfirm(val: any) {
    this.showPicker = false;
    console.log("val", val);
  }
  private created() {
    for (let i = 0; i < 5; i++) {
      let now = new Date();
      now.setTime(now.getTime() + 3600 * 1000 * 24 * i);
      let month1 = now.getMonth() + 1;
      let monthRel = month1 < 10 ? `0${month1}` : `${month1}`;
      let day1 = now.getDate();
      let dayRel = day1 < 10 ? `0${day1}` : `${day1}`;
      console.log("dayRel", dayRel);
      this.pickerDates2.push({
        text: `${monthRel}-${dayRel}`,
        id: dayRel,
        selected: false
      });
    }
    console.log("pickerDates2", this.pickerDates2);
  }
  private clickList(item: any, index: number) {
    switch (index) {
      case 0:
        this.showDate = true;
        break;
      case 1:
        this.showPicker = true;
        break;
      case 2:
        Toast.loading({
          mask: true,
          message: "加载中..."
        });
    }
  }
}
</script>

<style lang="scss">
.list {
  bottom: 1px solid #ccc;
}
.date {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
