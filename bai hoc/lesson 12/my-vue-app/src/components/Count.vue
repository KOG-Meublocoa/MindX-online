<template>
    <button @clicks="handleClick">Dem:{{ state.count }}</button>
</template>
<script>
import {reactive} from "vue"
const count = reactive({count : 0});

const handleClick = () => {
    state.count++;
};
</script>