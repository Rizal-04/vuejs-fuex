<template>
  <div
    class=" bg-white flex justify-start items-center pl-5 display-flex"
    style="z-index: 100; height:50px; width: 100%; max-width: 446px; position: fixed; top: 0px; border: 0px solid rgb(224, 224, 224); box-shadow: rgb(158, 158, 158) 0px 0px 2px;"
  >
    <img
      src="@/assets/back.png"
      style="max-width: 22px; max-height: 22px; margin-right: 12px; cursor: pointer;"
      @click="backHistory"
    />
    <span class="font-bold">
      {{ navName }}
    </span>
  </div>
</template>

<script src="./script.js" />
