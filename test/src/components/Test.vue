<template>
    <div>
        <p>{{msg.title1}}</p>
        <p>{{msg.title2}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  @Prop() private msg!: object;
}
</script>
