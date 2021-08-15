<template>
  <div
    class="flex flex-col min-h-screen"
    style=" max-width: 450px; width: 100%"
  >
    <navbar navName="Buat Pesanan" />
    <div class="pt-16 px-4">
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
        <div class="flex flex-row ">
          <font style="padding: 10px 0px 0px 0px">
            <img
              src="@/assets/icons/pngegg.png"
              alt="icon"
              class="w-4 h-6 ml-4"
            />
          </font>
          <span class="saknjkdnfkjd">{{ location }}</span>
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
              v-model="select.jenisKendaraan"
            >
              <option value="" disabled hidden>Pilih Tipe Kendaraan</option>
              <option value="Mobil">Car</option>
              <option value="Motor">Motor</option>
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
              placeholder="*Contoh H 81287 HH"
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
              v-model="select.jenisBahanbakar"
            >
              <option value="" disabled hidden>Pilih Tipe Bahan Bakar</option>
              <option value="pertamax">Pertamax</option>
              <option value="Pertalite">Pertalite</option>
            </select>
          </div>
          <p style="font-size: 16px; padding-top: 8px;">
            Pembelian
          </p>
          <div class="akjdfnjndckj0129">
            <div style="padding: 0px 20px 0px 0px; display: flex">
              <input class="py-1 mslasmclxska" placeholder="Liter" />
              <font class="py-1 mcoampMMP29328">
                <p style="text-align: center; color: white;"><b>LITER</b></p>
              </font>
            </div>
            <div style="padding: 0px 20px 0px 0px; display: flex">
              <input class="py-1 mslasmclxska" placeholder="Rupiah" />
              <font class="py-1 mcoampMMP29328">
                <p
                  style="text-align: center; color: white; padding: 0px 5px 0p 5px;"
                >
                  <b>RUPIAH</b>
                </p>
              </font>
            </div>
          </div>
        </div>
        <div class="aNCjNKQNd0030">
          <p style="font-size: 18px;">Kode Vocher</p>
          <div style="display: flex; padding: 10px;">
            <font
              style="background-color:  rgba(229, 231, 235); width: 280px; height: 50px;"
            >
              <input
                class="w-full b-none py-1  rounded-sm	"
                style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
                placeholder="Masukan Kode Vocher / Promo"
              />
            </font>
            <p
              style="align-items: center; font-size: 17px; padding-left: 50px;"
            >
              USE
            </p>
          </div>
        </div>
        <div class="nlaenifni3912">
          <p style="font-size: 18px;">Detail Pembayaran</p>
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Liter</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">Rp. 0,00</p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Biaya layanan</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">Rp. 1.500,00</p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Promo</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">Rp. 0,00</p>
            </div>
          </div>
          <hr class="tebal" />
          <div style="display: flex; padding: 10px 0px;">
            <div style="width: 50%;">
              <p style="font-size: 18px;">Total Pembayaran</p>
            </div>
            <div style="width: 50%;">
              <p style="font-size: 18px; text-align: right;">Rp. 0,00</p>
            </div>
          </div>
          <hr class="tebal" />
        </div>
      </div>
      <br /><br /><br />
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" />
