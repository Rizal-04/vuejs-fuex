<template>
  <div
    style="background-color: rgb(245, 245, 245); display: flex; justify-content: center; padding: 0px; min-height: 100vh; max-width:446px; width:100%;"
  >
    <navbar navName="Vouchers" />
    <div
      style="width: 100%; padding: 0px; display: flex; flex-direction: column; align-items: center; margin-top: 60px;"
    >
      <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading>
      <div
        class="card"
        style="display: flex; justify-content: center; align-items: center; flex-direction: column; background-color: white; width: 90%; margin: 10px 0px;"
        v-for="(data, index) in vochers"
        :key="index"
      >
        <img :src="data.image" style="width: 100%;" />
        <div
          style="display: flex; justify-content: space-between; align-items: center; flex-direction: row; width: 90%; height:50px;"
        >
          <p>
            Kode : <b>{{ data.code }}</b>
          </p>
          <button tabindex="0" type="button" @click="copyText(index)">
            salin
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
