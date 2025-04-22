<template>
  <div class="container p-[20px] bg-black w-full">
    <div class="content p-[40px]">
      <div class="box red">1</div>
      <div class="box blue">2</div>
      <div class="box green">3</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.content {
  display: flex;
  gap: 10px;
  border: #fff solid 2px;
  border-radius: 20px;
}
.box {
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.red {
  width: 150px;
  background-color: red;
  height: auto;
  min-height: 180px;
}
.blue {
  width: 150px;
  background-color: blue;
  height: auto;
  min-height: 180px;
}
.green {
  width: auto;
  flex-grow: 1;
  min-width: 150px;
  background-color: green;
  height: auto;
  min-height: 180px;
}
</style>
