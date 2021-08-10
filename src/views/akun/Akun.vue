<template>
  <div
    class="flex flex-col min-h-screen"
    style=" background-color: rgba(243, 244, 246); max-width: 448px; width: 100%"
  >
    <div
      class="flex flex-col"
      style="display: flex; justify-content: flex-start; flex-direction: column; width: 100%; height: 170px; color: white;"
    >
      <div
        style="display: flex; justify-content: center; padding: 0px; min-height: 100vh;"
      >
        <div
          style="width: 100%; height:50px; padding: 5px; max-width: 446px; position: fixed; top: 0px; display: flex; justify-content: flex-start; background-color: white; box-shadow: rgb(185, 185, 185) 0px 0px 2px 1px;"
        >
          <p class="flex justify-center items-center font-normal text-black	">
            Akun
          </p>
        </div>
        <div
          style="width: 100%; padding: 0px; display: flex; background-color: white; flex-direction: column; align-items: center; margin-top: 60px;"
        >
          <div
            style="display: flex; justify-content: space-around; align-items: center; flex-direction: row; height: 150px; border-width: 1px; border-style: ridge; width: 100%;"
          >
            <div
              style="display: flex; justify-content: center; align-items: center; width: 30%;"
            >
              <img
                src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                style="max-width: 80px; height: 80px; border-radius: 50%;"
              />
            </div>
            <div class="text-black" style="width: 70%;">
              <p>Nama Lengkap</p>
              <p>Email</p>
            </div>
          </div>
          <div
            style="width: 100%; display: flex; justify-content: space-evenly; flex-direction: column; min-height: 150px; align-items: center;"
          >
            <b-button
              type="is-primary"
              style="max-width:410px; width:100%;"
              expanded
            >
              <span class="flex justify-between space-x-2">
                <img
                  class=""
                  src="@/assets/icons/facebook.svg"
                  width="25"
                  height="25"
                />
                <p>FOLLOW US ON FACEBOOK</p>
              </span>
            </b-button>
            <b-button
              type="is-danger"
              style="max-width:410px; width:100%;"
              expanded
            >
              <span class="flex justify-between space-x-1">
                <img
                  class=""
                  src="@/assets/icons/instagram.svg"
                  width="25"
                  height="25"
                />
                <p>FOLLOW US ON INSTAGRAM</p>
              </span>
            </b-button>
          </div>
          <div>
            <b-button>LOG OUT</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
