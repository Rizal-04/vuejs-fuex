<template>
  <div
    class="flex flex-col min-h-screen"
    style=" max-width: 450px; width: 100%"
  >
    <navbar navName="OrderDetail" />
    <div class="pt-16 px-4" v-if="notError === true">
      <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading>
      <!-- <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading> -->
      <p class="text-lg" style="font-size: 20px; color: #000">Identitas</p>
      <div class="pt-4 flex flex-col leading-10">
        <span class="font-medium">Atas Nama</span>
        <font style="background-color:  rgba(229, 231, 235);">
          <input
            v-model="dataForm.nama"
            class="w-full b-none py-1  rounded-sm	"
            style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
            disabled
          />
        </font>
        <span class="font-medium">No Telp</span>
        <font style="background-color:  rgba(229, 231, 235);">
          <input
            v-model="dataForm.notlp"
            class="w-full b-none py-1  rounded-sm	"
            style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
            disabled
          />
        </font>
        <span class="font-medium">Alamat</span>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row">
            <font style="padding: 10px 0px 0px 0px">
              <img
                src="@/assets/icons/pngegg.png"
                alt="icon"
                class="w-4 h-6 ml-4"
              />
            </font>
            <span class="saknjkdnfkjd">{{ location }}</span>
          </div>
          <p class="asjkadnnas" @click="isComponentModalActive = true">
            lihat
          </p>
        </div>
        <b-modal
          v-model="isComponentModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-label="Example Modal"
          aria-modal
        >
          <div class="card">
            <div class="card-content" style="max-width: 450px; width: 450px">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Alamat Lengkap</p>
                </div>
              </div>
              <div class="content">
                <p class="title is-6">
                  {{ dataForm.alamat }}
                </p>
                <small>{{ date }}</small>
              </div>
            </div>
          </div>
        </b-modal>
        <div style="padding-top: 70px; color: black">
          <p style="font-size: 20px; color: black">Kendaraan</p>
          <p style="padding: 16px 0px 5px 0px; font-size: 16px;">
            Tipe Kendaraan
          </p>
          <div>
            <input
              v-model="dataForm.vehicle"
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
              disabled
            />
          </div>
          <p style="font-size: 16px; padding-top: 8px;">
            Merek
          </p>
          <font style="background-color:  rgba(229, 231, 235);">
            <input
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
              v-model="dataForm.merk"
            />
          </font>
          <p style="font-size: 16px; padding-top: 8px;">
            Nomor Polisi / Plat
          </p>
          <font style="background-color:  rgba(229, 231, 235);">
            <input
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
              v-model="dataForm.plat"
            />
          </font>
        </div>
        <div class="aNCjNKQNd0030">
          <p style="font-size: 20px;">Pesanan</p>
          <p style="padding: 16px 0px 5px 0px; font-size: 16px;">
            Tipe Bahan Bakar
          </p>
          <font style="background-color:  rgba(229, 231, 235);">
            <input
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px; cursor: not-allowed"
              v-model="dataForm.bbm"
            />
          </font>
        </div>
        <div class="nlaenifni3912">
          <p style="font-size: 18px;">Detail Pembayaran</p>
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Liter</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">
                {{ ltr }} L / Rp.
                {{ satu.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }} L
              </p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Biaya layanan</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">
                Rp.
                {{ billService.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }}
              </p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Promo</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">
                Rp. {{ promo.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }}
              </p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Total Pembayaran</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">
                Rp.
                {{ payTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }}
              </p>
            </div>
          </div>
          <hr class="tebal mb-4" />
          <div
            :class="[
              orderStatus === 1
                ? 'bg-yellow-100 p-1 mt-1 text-yellow-500 text-sm'
                : orderStatus === 2
                ? 'bg-indigo-100 p-1 mt-1 text-blue-500 text-sm'
                : orderStatus === 3
                ? 'bg-green-100 p-1 mt-1 text-green-500 text-sm'
                : orderStatus === 4
                ? 'bg-red-100 p-1 mt-1 text-red-500 text-sm'
                : 'p-5 mt-4',
            ]"
            class="flex justify-center mb-3 pt-2 text-lg"
            style="height: 50px"
          >
            <span>{{ orderName }}</span>
          </div>
          <b-button
            tabindex="0"
            type="button"
            class="mb-4"
            style="width: 100%; background-color: rgb(251, 0, 0); color: white; top: 0px"
            v-if="orderBatal"
            @click="batalkanPesanan"
          >
            <span>Batalkan Pesanan</span>
          </b-button>
          <p
            style="padding-top: 25px; font-size: 13px; text-align: center; line-height: normal;"
          >
            Dengan Memesan Kami Anggap Anda Setuju Dengan Syarat & Ketentuan
            Bahan Bakar
          </p>
        </div>
      </div>
      <br />
    </div>
    <div class="contact-us full-screen mt-9" v-if="notError === false">
      <div class="wrapper wrapper-full-page section content">
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2 text-center">
                <h2 class="title text-danger">404 Not Found</h2>
                <h2 class="title">
                  Oops! {{ getLocation }} Page tidak tersedia.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer-demo">
        <div class="container">
          <nav class="pull-left">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
            </ul>
          </nav>
          <div class="copyright pull-right">
            &copy; 2021, made with
            <i class="fa fa-heart heart"></i> by Fuex admin
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" />
