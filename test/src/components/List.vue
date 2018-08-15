<template>
    <ul>
      <li @click="$emit('confirm')" v-for="item in listOptions" :key="item.id">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class About extends Vue {
  private listOptions = [
    {
      text: "aa",
      id: 1
    },
    {
      text: "bb",
      id: 2
    },
    {
      text: "cc",
      id: 3
    }
  ];
}
</script>
