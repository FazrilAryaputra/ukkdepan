<template>
  <content-header title="Tipe Kamar" />
  <content>
    <div class="row">
      <div class="col-6">
        <form
          class="card"
          method="POST"
          @submit.prevent="() => save(data)"
          enctype="multipart/form-data"
        >
          <div class="card-header">
            <h3 class="card-title">Tambah Tipe Kamar</h3>
          </div>
          <div>
            <div class="m-3">
              <label for="room_type_name" class="form-label"
                >Nama Tipe Kamar</label
              >
              <input
                type="text"
                v-model="data.room_type_name"
                id="room_type_name"
                class="form-control"
              />
            </div>

            <div class="m-3">
              <label for="price" class="form-label">Harga</label>
              <input
                type="number"
                v-model="data.price"
                id="price"
                class="form-control"
              />
            </div>

            <div class="m-3">
              <label for="description" class="form-label">Deskripsi</label>
              <textarea
                v-model="data.description"
                id="description"
                cols="30"
                rows="10"
                class="form-control"
              ></textarea>
            </div>

            <div class="m-3">
              <label for="image" class="form-label">Foto</label>
              <input
                type="file"
                accept="image/*"
                v-on:change="(event) => imageHandler(event.target.files[0])"
                id="image"
                class="form-control"
              />
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-success" @click="save()">
              Tambah Tipe Kamar
            </button>
          </div>
        </form>
      </div>
    </div>
  </content>
</template>

<script>
import axios from "@/lib/axios";

/**
 * Contoh axios upload image
 * 
 * let token = localStorage.getItem('<value_token>');
 * 
 * axios.post('/<endpoint_here>', <variable_send_data>, {
 *  headers: {
 *      Authorization: `Bearer ${token}`, // perlu pake buanget kalo memang endpoint API pake auth.
        'Content-Type': 'multipart/form-data', // ini penting buat upload/update/delete image!
        'Content-Type': 'application/json' // ini bisa dipake kalo memang ga memerlukan upload/update/delete image.
 *  }
 * })
 * .then((res) => res.json()) // untuk mem-parse hasil response.
 * .then((res) => setState(res.data.data)) // or something tergantung response yang didapat.
 * .catch((err) => console.log(err)); // harus di console dulu biar tau kalo ada error, kalo gaada ya yauda bebas mau dijadiiin apa, misal notifikasi.
 */

export default {
  name: "form tipe kamar",
  data() {
    return {
      data: {
        room_type_name: "",
        price: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    imageHandler(event) {
      this.data.image = event;
      console.log(this.data.image);
    },
    async save(data) {
      let token = localStorage.getItem("Authorization");

      let form = new FormData();
      form.append("room_type_name", data.room_type_name);
      form.append("price", data.price);
      form.append("description", data.description);
      form.append("image", data.image);

      await axios
        .post("/roomtype", form, {
          headers: {
            Authorization: `Bearer ${token}`, // perlu pake buanget kalo memang endpoint API pake auth.
            "Content-Type": "multipart/form-data", // ini penting buat upload/update/delete image!
          },
        })
        .then((result) => {
          console.log(result.data);
          this.$router.push("/tipekamar");
        })
        .catch((err) => console.log(err));
    },
    // save: function () {
    //   let token = {
    //     headers: {
    //       Authorization: "Bearer" + localStorage.getItem("Authorization"),
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };
    //   let form = new FormData();
    //   form.append("room_type_name", this.room_type_name);
    //   form.append("price", this.price);
    //   form.append("description", this.desc);
    //   form.append("image", this.image);
    //   axios.post("/roomtype", form, token).then((response) => {
    //     this.$router.push('/tipekamar')
    //   });
    // },
  },
};
</script>