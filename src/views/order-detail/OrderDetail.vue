<template>
  <div
    class="flex flex-col min-h-screen"
    style=" max-width: 450px; width: 100%"
  >
    <navbar navName="OrderDetail" />
    <div class="pt-16 px-4">
      <!-- <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading> -->
      <p class="text-lg" style="font-size: 20px; color: #000">Identitas</p>
      <div class="pt-4 flex flex-col leading-10">
        <span class="font-medium">Atas Nama</span>
        <font style="background-color:  rgba(229, 231, 235);">
          <input
            class="w-full b-none py-1  rounded-sm	"
            style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
            placeholder="Nama Lengkap"
          />
        </font>
        <span class="font-medium">No Telp</span>
        <font style="background-color:  rgba(229, 231, 235);">
          <input
            class="w-full b-none py-1  rounded-sm	"
            style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
            placeholder="No Telp Yang Dapat Di Hubungi"
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
            <span class="saknjkdnfkjd"></span>
          </div>
          <p class="asjkadnnas">
            ganti
          </p>
        </div>
        <div style="padding-top: 70px; color: black">
          <p style="font-size: 20px; color: black">Kendaraan</p>
          <p style="padding: 16px 0px 5px 0px; font-size: 16px;">
            Tipe Kendaraan
          </p>
          <div>
            <select
              style="background-color:  rgba(229, 231, 235); width: 100%; height: 40px; padding-left: 10px;"
            >
            </select>
          </div>
          <p style="font-size: 16px; padding-top: 8px;">
            Merek
          </p>
          <font style="background-color:  rgba(229, 231, 235);">
            <input
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
              placeholder="*Contoh Supra X 150"
            />
          </font>
          <p style="font-size: 16px; padding-top: 8px;">
            Nomor Polisi / Plat
          </p>
          <font style="background-color:  rgba(229, 231, 235);">
            <input
              class="w-full b-none py-1  rounded-sm	"
              style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
              placeholder="*Contoh H 81287 FX"
            />
          </font>
        </div>
        <div class="aNCjNKQNd0030">
          <p style="font-size: 20px;">Pesanan</p>
          <p style="padding: 16px 0px 5px 0px; font-size: 16px;">
            Tipe Bahan Bakar
          </p>
          <div>
            <select
              style="background-color:  rgba(229, 231, 235); width: 100%; height: 40px; padding-left: 10px;"
            >
            </select>
          </div>
          <p style="font-size: 16px; padding-top: 8px;">
            Pembelian
          </p>
          <div class="akjdfnjndckj0129">
            <div style="padding: 0px 20px 0px 0px; display: flex">
              <input
                class="py-1 mslasmclxska"
                placeholder="Liter"
                type="number"
                step="0.01"
                onkeypress="return event.charCode >= 48"
                min="1"
              />
              <font class="py-1 mcoampMMP29328">
                <p style="text-align: center; color: white; padding: 0px 5px;">
                  <b>LITER</b>
                </p>
              </font>
            </div>
            <div style="padding: 0px 20px 0px 0px; display: flex">
              <input class="py-1 mslasmclxska" placeholder="Rupiah" disabled />
              <font class="py-1 mcoampMMP29328">
                <p style="text-align: center; color: white; padding: 0px 5px;">
                  <b>RUPIAH</b>
                </p>
              </font>
            </div>
          </div>
        </div>
        <div class="nlaenifni3912">
          <p style="font-size: 18px;">Detail Pembayaran</p>
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Liter</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">
                Rp.
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
                Rp.
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
              </p>
            </div>
          </div>
          <hr class="tebal mb-4" />
          <b-button
            tabindex="0"
            type="button"
            class="mb-4"
            style="width: 100%; background-color: rgb(251, 0, 0); color: white; top: 0px"
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
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" />
