<template>
  <div
    class="flex justify-center items-center min-h-screen"
    style="background-color: rgb(251, 82, 82); max-width: 450px; width: 100%;"
  >
    <div
      class="flex flex-col h-screen justify-around"
      v-if="confirmEmail === false"
    >
      <div>
        <h1 class="text-2xl text-white">Forgot Password</h1>
        <span class="text-white">Masukan alamat email pemulihan akun: </span>
      </div>
      <div>
        <div style="margin: 25px 0px 25px 0px">
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <b-field>
                  <b-input
                    type="email"
                    v-model="dataForm.email"
                    placeholder="Email Confirmation"
                  />
                </b-field>
                <div class="buttons">
                  <b-button
                    class="rounded-full"
                    type="is-danger"
                    expanded
                    :loading="property.isLoading"
                    @click="requestForgotPassword"
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col h-screen justify-around"
      v-if="confirmEmail === true"
    >
      <div>
        <h1 class="text-2xl text-white">Forgot Password</h1>
        <span class="text-white">Masukan password baru: </span>
      </div>
      <div>
        <div style="margin: 25px 0px 25px 0px">
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <div style="padding: 0px 0px 10px 0px">
                  <b-input
                    type="text"
                    placeholder="New Password"
                    v-model="dataForm.newPasssword"
                  >
                  </b-input>
                </div>
                <div style="padding: 0px 0px 10px 0px">
                  <b-input
                    type="password"
                    placeholder="Confirm Password"
                    v-model="dataForm.confirmPassword"
                  >
                  </b-input>
                </div>
                <div class="buttons">
                  <b-button
                    class="rounded-full"
                    type="is-danger"
                    expanded
                    :loading="property.isLoading"
                    @click="changePassword"
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="showModelOtp" :width="300" :can-cancel="false">
      <div class="card rounded-xl">
        <div class="card-content ">
          <div class="flex flex-col jutify-center items-center">
            <div class=" mb-4">
              <p>
                Kode verifikasi anda telah terkirim di email:
              </p>
              <b-field>
                <b-input
                  type="text"
                  v-model="codeOtp"
                  placeholder="Masukan verifikasi kode"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="buttons">
            <b-button
              class="rounded-full"
              :loading="property.isLoading2"
              @click="validationCode"
              type="is-danger"
              expanded
              >Oke</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal v-model="emailNotFound" :width="300" :can-cancel="false">
      <div class="card rounded-xl">
        <div class="card-content ">
          <div class="flex flex-col jutify-center items-center">
            <div class=" w-16 h-18 mb-2">
              <img src="../../assets/icons/button.jpg" alt="" />
            </div>
            <div class=" mb-4">
              <h1 style="color:red; font-size: 14px; padding: 5px 0px 5px 0px">
                {{ errorMessage }}
              </h1>
            </div>
          </div>
          <div class="buttons">
            <b-button
              class="rounded-full"
              type="is-danger"
              expanded
              @click="(errorMessage = ''), (emailNotFound = false)"
              >Oke</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" />
