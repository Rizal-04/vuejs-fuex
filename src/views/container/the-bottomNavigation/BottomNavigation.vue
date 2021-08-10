<template>
  <div
    class=" bg-white flex justify-around"
    style="width: 100%; max-width: 446px; position: fixed; bottom: 0px; border: 0px solid rgb(224, 224, 224); box-shadow: rgb(158, 158, 158) 0px 0px 2px;"
  >
    <button
      class="m-4 flex flex-col justify-center items-center"
      @click="handleRoute('/home')"
    >
      <img src="@/assets/icons/home.svg" style="width: 18px; height: 20px;" />
      <b style="font-size: 11px;">Home</b>
    </button>
    <button
      class="m-4 flex flex-col justify-center items-center"
      @click="handleRoute('/order/history')"
    >
      <img
        src="@/assets/icons/pesanan.svg"
        style="width: 18px; height: 20px;"
      />
      <b style="font-size: 11px;">Pesanan</b>
    </button>
    <button
      class="m-4 flex flex-col justify-center items-center"
      @click="handleRoute('/help')"
    >
      <img src="@/assets/icons/help.svg" style="width: 18px; height: 20px;" />
      <b style="font-size: 11px;">Bantuan</b>
    </button>
    <button
      class="m-4 flex flex-col justify-center items-center"
      @click="handleRoute('/akun')"
    >
      <img
        src="@/assets/icons/account.svg"
        style="width: 18px; height: 20px;"
      />
      <b style="font-size: 11px;">Akun</b>
    </button>
  </div>
</template>
<script src="./script.js" />
