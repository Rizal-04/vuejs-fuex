<template>
  <div
    class="flex justify-center items-center min-h-screen"
    style="background-color: rgb(251, 82, 82); max-width: 450px; width: 100%;"
  >
    <div class="flex flex-col h-screen justify-around">
      <div>
        <h1 class="text-2xl text-white">Forgot Password</h1>
        <span class="text-white">Masukan password baru: </span>
      </div>
      <div>
        <div style="margin: 25px 0px 25px 0px">
          <div class="card rounded-xl">
            <div class="card-content">
              <div class="flex flex-col">
                <b-field>
                  <b-input type="email" placeholder="Email"> </b-input>
                </b-field>
                <b-field>
                  <b-input type="password" placeholder="new password">
                  </b-input>
                </b-field>
                <div class="buttons">
                  <b-button
                    class="rounded-full"
                    type="is-danger"
                    expanded
                    :loading="property.isLoading"
                    >Lanjut</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-modal v-model="emailNotFound" :width="300" :can-cancel="false">
        <div class="card rounded-xl">
          <div class="card-content ">
            <div class="flex flex-col jutify-center items-center">
              <div class=" w-16 h-18 mb-2">
                <img src="../../assets/icons/button.jpg" alt="" />
              </div>
              <div class=" mb-4">
                <h1
                  style="color:red; font-size: 14px; padding: 5px 0px 5px 0px"
                >
                  <!-- {{ errorMessage }} -->
                </h1>
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
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./style.css" />
