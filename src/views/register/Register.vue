<template>
  <div
    class="flex justify-center items-center min-h-screen"
    style="background-color: red; max-width: 450px; width: 100%"
  >
    <div class="flex flex-col h-screen justify-around ">
      <div>
        <h1 class="text-2xl text-white">Daftar</h1>
        <span class="text-white">Silahkan Lengkapi data berikut</span>
      </div>
      <div>
        <div
          v-if="identifier.isEmail === true"
          style="margin: 25px 0px 25px 0px"
        >
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <b-field>
                  <b-input
                    type="email"
                    placeholder="Email"
                    v-model="dataForm.checkingUser.email"
                  >
                  </b-input>
                </b-field>
                <div class="buttons">
                  <b-button
                    class="rounded-full"
                    :loading="property.checkingUser.isLoading"
                    @click="confirm"
                    type="is-danger"
                    expanded
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <b-modal v-model="property.modal.showModalAlreadyExist" :width="300">
          <div class="card rounded-xl">
            <div class="card-content ">
              <div class="flex flex-col jutify-center items-center">
                <div class=" w-20 h-20 mb-2">
                  <img src="../../assets/icons/button.jpg" alt="" />
                </div>
                <div class=" mb-4">
                  <h1 style="color:red;">Email Sudah Tersedia</h1>
                </div>
              </div>
              <div class="buttons">
                <b-button class="rounded-full" type="is-danger" expanded
                  >Oke</b-button
                >
              </div>
            </div>
          </div>
        </b-modal>

        <b-modal v-model="property.modal.showModalOtp" :width="300">
          <div class="card rounded-xl">
            <div class="card-content ">
              <div class="flex flex-col jutify-center items-center">
                <div class=" mb-4">
                  <b-field>
                    <b-input type="text"></b-input>
                  </b-field>
                </div>
              </div>
              <div class="buttons">
                <b-button class="rounded-full" type="is-danger" expanded
                  >Oke</b-button
                >
              </div>
            </div>
          </div>
        </b-modal>

        <div
          v-if="identifier.isEmail === false"
          style="margin: 25px 0px 25px 0px"
        >
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <b-field>
                  <b-input
                    type="text"
                    v-model="dataForm.register.firstName"
                    placeholder="Nama Depan"
                  >
                  </b-input>
                </b-field>
                <b-field>
                  <b-input
                    type="text"
                    v-model="dataForm.register.lastName"
                    placeholder="Nama Belakang"
                  >
                  </b-input>
                </b-field>
                <b-field>
                  <b-input
                    type="email"
                    v-model="dataForm.register.email"
                    placeholder="Email"
                  >
                  </b-input>
                </b-field>
                <div class="buttons">
                  <b-button
                    class="rounded-full"
                    :loading="property.register.isLoading"
                    @click="handleRegister"
                    type="is-danger"
                    expanded
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <span class="text-white">Sudah Punya Akun?</span>
          <span class="text-white cursor-pointer" @click="routePageLogin"
            >Masuk</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
