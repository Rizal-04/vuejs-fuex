<template>
  <div
    class="flex justify-center items-center min-h-screen"
    style="background-color: rgb(251, 82, 82); max-width: 450px; width: 100%"
  >
    <div class="flex flex-col h-screen justify-around">
      <div>
        <h1 class="text-2xl text-white">Selamat Datang</h1>
        <span class="text-white">Silahkan Login untuk masuk ke akun anda</span>
      </div>
      <div>
        <div style="margin: 25px 0px 25px 0px">
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <b-field>
                  <b-input
                    type="email"
                    placeholder="Email"
                    v-model="dataForm.email"
                  >
                  </b-input>
                </b-field>
                <div class="buttons">
                  <b-button class="rounded-full" type="is-danger" expanded
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <span class="text-white">Belom Punya Akun?</span>
          <span class="text-white cursor-pointer" @click="routePageRegister"
            >Daftar</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
