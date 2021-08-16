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
            v-model="dataForm.fullName"
          />
        </font>
        <span class="font-medium">No Telp</span>
        <font style="background-color:  rgba(229, 231, 235);">
          <input
            class="w-full b-none py-1  rounded-sm	"
            style="border:none; outline:none; background-color:  rgba(229, 231, 235); padding:0px 0px 0px 10px;"
            placeholder="No Telp Yang Dapat Di Hubungi"
            v-model="dataForm.phoneNumber"
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
              v-model="dataForm.brand"
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
              v-model="dataForm.platNumber"
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
              <input
                class="py-1 mslasmclxska"
                placeholder="Liter"
                type="number"
                step="0.01"
                onkeypress="return event.charCode >= 48"
                min="1"
                v-model="liter"
              />
              <font class="py-1 mcoampMMP29328">
                <p style="text-align: center; color: white; padding: 0px 5px;">
                  <b>LITER</b>
                </p>
              </font>
            </div>
            <div style="padding: 0px 20px 0px 0px; display: flex">
              <input
                class="py-1 mslasmclxska"
                placeholder="Rupiah"
                v-model="dataForm.money"
                disabled
              />
              <font class="py-1 mcoampMMP29328">
                <p style="text-align: center; color: white; padding: 0px 5px;">
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
                v-model="dataForm.vocherCode"
              />
            </font>
            <p
              style="align-items: center; font-size: 17px; padding-left: 50px; cursor: pointer;"
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
              <p style="font-size: 18px; text-align: right;">
                Rp.
                {{
                  dataForm.money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}
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
                {{ adminFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }}
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
                {{
                  details.discount
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}
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
                {{
                  details.payTotal
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}
              </p>
            </div>
          </div>
          <hr class="tebal" />
          <div class="nlacairnfcfiuea823">
            <label class="container" v-if="farAway === false">
              <input
                type="checkbox"
                checked="checked"
                @click="farAway = true"
              />
              <span class="checkmark"></span>
              <p style="font-size:12px; line-height: normal;">
                Saya Dalam Keadaan Darurat Atau Jauh Dari Stasiun Pengisian
                Bahan Bakar
              </p>
            </label>
            <label class="container2" v-if="farAway === true">
              <input type="checkbox2" @click="farAway = false" />
              <img src="@/assets/icons/tick.png" class="checkmark2" />
              <p style="font-size:12px; line-height: normal;">
                Saya Dalam Keadaan Darurat Atau Jauh Dari Stasiun Pengisian
                Bahan Bakar
              </p>
            </label>
          </div>
          <b-button
            tabindex="0"
            type="button"
            style="width: 100%; background-color: rgb(251, 0, 0); color: white; top: 0px"
          >
            <span>PILIH METODE PEMBAYARAN</span>
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
