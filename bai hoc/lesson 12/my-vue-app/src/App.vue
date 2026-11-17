<script setup>
import Count from "./components/Count.vue"
import Myinput from "./components/Myinput.vue";

</script>

<template>
  <h1>Hello,World!</h1>
  <Count/>
  <Count/>
  <br/>
  <Myinput/>
  <br/>
  <Say :text="'Hello,World!'"/>
  <Say text ="Chuoi thuong thi khong can dau hai cham"/>
  <Box>
  <b>Noi dung dat giua hai the</b>
  </Box>
</template>