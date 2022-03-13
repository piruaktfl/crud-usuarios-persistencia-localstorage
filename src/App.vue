<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Montserrat:wght@100;200;400;700;900&family=Ubuntu:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Fredoka', sans-serif;
}

.container {
  background-color: #d2d2d2;
  width: 100vw;
  height: 100vh;
}

input {
  padding: 0 10px;
  height: 38px;
  margin: 10px 0;
  border-radius: 4px;
  outline: none;
  border-color: transparent;
  background-color: #d2d2d2;

  &.error {
    border: 1px solid red;
  }
}

button {
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0 10px;
  height: 30px;
  border-radius: 7px;
  background-color: rgba($color: #4150d3, $alpha: .8);
  color: #fff;
  transition: .3s ease-in-out;
  margin: 4px;
}

button:hover {
  background-color: rgba($color: #4150d3, $alpha: 1);
}

.msg {
  padding: 5px;
  border-radius: 4px;
  background-color: rgba($color: #dd4c4c, $alpha: .7);
  margin: 10px 0;
}

.sucesso {
  padding: 5px;
  border-radius: 4px;
  margin: 10px 0;
  background-color: rgba($color: #35d335, $alpha: .7);
}

</style>
