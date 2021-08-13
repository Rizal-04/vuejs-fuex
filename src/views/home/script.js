export default {
  name: "Home",
  data() {
    return {
      carousels: [
        {
          text: "Slide 1",
          color: "danger",
          image:
            "https://cdn0-production-images-kly.akamaized.net/lgmktfp4I-p4H2xQ1XhKkFOKn5I=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3024986/original/098144600_1579251405-DANA_2020.jpg",
        },
        {
          text: "Slide 2",
          color: "danger",
          image:
            "https://assets-a1.kompasiana.com/items/album/2019/06/27/iklan-samsung-5d142aca097f360a5c1d0523.jpg",
        },
        {
          text: "Slide 3",
          color: "danger",
          image:
            "https://mahatekno.com/wp-content/uploads/2020/09/contoh-iklan-komersial.jpg",
        },
        {
          text: "Slide 4",
          color: "danger",
          image:
            "https://mahatekno.com/wp-content/uploads/2020/10/contoh-iklan-makanan-bahasa-jawa.jpg",
        },
        {
          text: "Slide 5",
          color: "danger",
          image:
            "https://img.cintamobil.com/crop/640x360/2021/01/19/cWC5a43e/trai-nghiem-mua-xe-resize-201225-03-3db2.png",
        },
      ],
    };
  },
  methods: {
    handleRoute(tujuan) {
      this.$router.push(tujuan);
    },
    konsultasibengkel() {
      window.open(
        `https://api.whatsapp.com/send?phone=6285842917951&text=Saya%20Mau%20Konsultasi%20Nih`
      );
    },
  },
};
