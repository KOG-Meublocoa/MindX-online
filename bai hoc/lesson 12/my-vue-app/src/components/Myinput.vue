//Vue gom ca hai huong vao mot thuoc tinh
//v-model la ong noi hai chieu giua o nhap va state: chu di qua ong theo ca hai huong    
<template>
    <input v-model="state.value"/>  
    <p>Ban da nhap :{{ state.value }}</p>
</template>

<script setup>
import {reactive} from 'vue';
const state =reactive({value: "MindX School"})

</script>