<template>
  <button class="v-btn" :class="classType" @click="handleClickLInk">
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class VButton extends Vue {
  @Prop() private type!: string;
  @Emit("click")
  handleClickLInk(event: any) {}
  private showSlot: boolean = true;
  private mounted() {
    this.showSlot = this.$slots.default !== undefined;
  }
  get classType() {
    return [`v-btn-${this.type}`];
  }
}
</script>

<style lang="scss">
.v-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.v-btn-default {
  background: #f64c4c;
  color: #fff;
}
.v-btn-primary {
  background: #409eff;
  color: #fff;
}
.v-btn-long {
  background: #409eff;
  color: #fff;
  padding: 12px 100px;
}
</style>
