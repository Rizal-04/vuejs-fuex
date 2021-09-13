<template>
  <div
    class="flex min-h-screen"
    style=" background-color: rgba(243, 244, 246); max-width: 448px; width: 100%"
  >
    <navbar navName="Order" />
    <div
      style="width: 100%; padding: 0px; display: flex; background-color: white; flex-direction: column; align-items: center; min-height: 300px; margin-top: 55px; color:black"
    >
      <b-loading :is-full-page="isFullPage" v-model="isLoading"></b-loading>
      <div v-if="isEmpty === true">
        <div>
          <div class="flex justify-center items-center mt-7">
            <p class="title is-4">Belum ada pesanan</p>
          </div>
        </div>
      </div>
      <div style="margin: 0px 0px 100px; width: 95%;">
        <div v-for="orders in riwayatPesanan" :key="orders.id">
          <div
            class="card rounded-xl"
            style="display: flex; width: 100%; justify-content: center; max-height: 220px; margin: 10px 0px; align-items: center; min-height: 180px; flex-direction: column; cursor: pointer;"
            @click="orderDetail(orders.id)"
          >
            <div
              class="mb-5"
              style="font-size: 14px; display: flex; margin-top: 0px; width: 95%; justify-content: space-between; align-items: center; max-height: 40px; flex-direction: row;"
            >
              <p>Isi Bensin</p>
              <p>{{ orders.createDate }}</p>
            </div>
            <div
              class="mb-5"
              style="display: flex; width: 95%; justify-content: space-around; align-items: center; flex-direction: row;"
            >
              <div
                class="space-x-6"
                style="display: flex; justify-content: start; align-items: center; flex-direction: row; width: 80%;"
              >
                <img src="@/assets/icons/bensin.svg" style="max-width: 10%;" />
                <p style="font-size: 14px; font-weight: bold;">
                  {{ orders.fuelTypeId.tipeBensin }} - liter
                </p>
              </div>
              <p class="truncate" style="font-size: 14px; text-align: right; ">
                {{ orders.alamat }}
              </p>
            </div>
            <div
              style="font-size: 14px; display: flex; width: 95%; justify-content: space-between; align-items: center; max-height: 50px; flex-direction: row;"
            >
              <p>{{ orders.vehicleTypeId.tipeKendaraan }}</p>
              <div
                :class="[
                  orders.orderStatusId.orderStatusId === 1
                    ? 'bg-yellow-100 p-1 mt-1 text-yellow-500 text-sm'
                    : orders.orderStatusId.orderStatusId === 2
                    ? 'bg-indigo-100 p-1 mt-1 text-blue-500 text-sm'
                    : orders.orderStatusId.orderStatusId === 3
                    ? 'bg-green-100 p-1 mt-1 text-green-500 text-sm'
                    : orders.orderStatusId.orderStatusId === 4
                    ? 'bg-red-100 p-1 mt-1 text-red-500 text-sm'
                    : 'p-5 mt-4',
                ]"
                class="flex justify-center"
              >
                <span>{{ orders.orderStatusId.orderStatusName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-navigation />
  </div>
</template>

<script src="./script.js" />
