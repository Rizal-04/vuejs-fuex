<template>
  <div
    class="flex flex-col min-h-screen"
    style=" background-color: rgba(243, 244, 246); max-width: 448px; width: 100%"
  >
    <navbar navName="LocationSelect" />
    <div
      style="margin-top: 50px; display: flex; align-items: center; width: 100%; flex-direction: column;"
    >
      <div
        style="display: flex; justify-content: center; align-items: center; flex-direction: row; width: 100%; background-color: white; border-width: 1px; min-height: 80px; border-style: ridge;"
      >
        <div
          style="width: 95%; display: flex; justify-content: center; align-items: center; flex-direction: row;"
        >
          <div
            style="display: flex; justify-content: center; align-items: center; background-color: rgba(255, 245, 0, 0.29); width: 100%; border-radius: 3px; max-height: 40px; height:30px;"
          >
            <p style="font-size: 11px; color: rgb(255, 144, 41); ">
              Untuk Saat Ini Karena PPKM, Kami Hanya Melayani Sekitaran Kota
              Semarang
            </p>
          </div>
        </div>
      </div>
      <div
        style="display: flex; justify-content: center; align-items: center; flex-direction: row; width: 100%; background-color: white; border-width: 1px; border-style: ridge;"
      >
        <div
          style="width: 95%; display: flex; justify-content: space-between; align-items: center; flex-direction: row; height:50px;"
        >
          <p>Kecamatan</p>
          <select style="background-color: white; border: 0px;"></select>
        </div>
      </div>
      <div
        style="display: flex; justify-content: center; align-items: flex-start; width: 100%; background-color: white; border-width: 1px; border-style: ridge; "
      >
        <div
          style="width: 95%; display: flex; justify-content: center; align-items: flex-start; flex-direction: column; height:80px;"
        >
          <p class="mb-4">Detail Alamat</p>
          <input
            placeholder="Nama Gedung, Jalan, Bangunan , RT/RW , No.Jalan"
            style="width: 95%; border: none; outline: none;"
          />
        </div>
      </div>
      <div
        style="display: flex; justify-content: center; align-items: center; width: 100%; position: fixed; height: 60px; bottom: 0px; max-width: 446px;"
      >
        <b-button
          tabindex="0"
          type="button"
          style="width: 90%; background-color: rgb(251, 0, 0); color: white;"
          @click="$router.push('/order/detail-order')"
        >
          <span>PILIH LOKASI INI</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
