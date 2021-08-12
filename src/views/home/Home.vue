<template>
  <div
    class="flex flex-col min-h-screen"
    style=" background-color: rgba(229, 231, 235); max-width: 450px; width: 100%"
  >
    <div
      class="flex flex-col p-7 "
      style="display: flex; justify-content: flex-start; flex-direction: column; background-color: rgb(251, 82, 82); width: 100%; height: 170px; color: white;"
    >
      <div>
        <h1 class="text-white mb-4">Selamat Datang</h1>
        <span class="text-white">Username</span>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div
        style="margin-top: -60px; display: flex; align-items: center; justify-content: space-evenly; flex-direction: row; background-color: rgb(255, 255, 255); width: 90%; height: 130px; border-radius: 10px; font-size: 11px; color: gray;"
      >
        <div
          @click="handleRoute('/pilih-lokasi')"
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px; cursor:pointer;"
          >
            <img src="@/assets/icons/bensin.svg" width="25" />
          </div>
          <p>Isi Bensin</p>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            @click="konsultasibengkel"
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px; cursor:pointer;"
          >
            <img src="@/assets/icons/konsultasi.svg" width="25" />
          </div>
          <p>Konsultasi</p>
        </div>
        <div
          @click="handleRoute('/vouchers')"
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px; cursor:pointer;"
          >
            <img src="@/assets/icons/kupon.svg" width="25" />
          </div>
          <p>Voucher</p>
        </div>
      </div>
    </div>
    <div
      style="margin-top: 15px; display: flex; align-items: flex-start; justify-content: center; flex-direction: column; background-color: rgb(255, 255, 255); width: 100%; height: 170px;"
    >
      <div
        style="background-color: yellow; display: flex; justify-content: center; align-items: center; width: 30%; max-height: 25px; color: white;"
      >
        <p>Segera hadir</p>
      </div>
      <div
        style="margin-top: 15px; display: flex; align-items: center; justify-content: space-evenly; flex-direction: row; background-color: rgb(255, 255, 255); width: 100%; height: 100%; font-size: 11px; color: gray;"
      >
        <div
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px;"
          >
            <img src="@/assets/icons/tambalBan.svg" width="25" />
          </div>
          <p>Tambal Ban</p>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px;"
          >
            <img src="@/assets/icons/serviceUmum.svg" width="25" />
          </div>
          <p>Service Umum</p>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px;"
          >
            <img src="@/assets/icons/keranjang.svg" width="25" />
          </div>
          <p>Beli & Pasang</p>
        </div>
        <div
          style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
        >
          <div
            class="card rounded-xl mb-2"
            style="width: 100%; display: flex; justify-content: center; align-items: center; border-radius: 10px; min-width: 45px; height: 45px; max-width: 45px;"
          >
            <img src="@/assets/icons/danger.svg" width="25" />
          </div>
          <p>Darurat</p>
        </div>
      </div>
    </div>

    <!-- //carousel -->
    <div
      style="background-color: white; width: 100%; margin-top: 15px; display: flex; justify-content: center;"
    >
      <div
        style="height: 300px; max-width: 400px; background: none; margin-top: 20px; flex-grow: 1;"
      >
        <b-carousel>
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
              <section class="hero is-medium">
                <b-image class="image" :src="carousel.image"></b-image>
              </section>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
