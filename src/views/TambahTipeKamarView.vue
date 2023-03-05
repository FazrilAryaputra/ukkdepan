<template>
  <content-header title="Tipe Kamar" />
  <content>
    <div class="row">
      <div class="col-6">
        <form class="card" method="POST" enctype="multipart/form-data">
          <div class="card-header">
            <h3 class="card-title">Tambah Tipe Kamar</h3>
          </div>
          <div>
              <div class="m-3">
                  <label for="room_type_name" class="form-label">Nama Tipe Kamar</label>
                  <input type="text" name="room_type_name" id="room_type_name" class="form-control" />
              </div>
              
              <div class="m-3">
                  <label for="price" class="form-label">Harga</label>
                  <input type="text" name="price" id="price" class="form-control" />
              </div>
              
              <div class="m-3">
                  <label for="description" class="form-label">Deskripsi</label>
                  <textarea name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
              </div>

              <div class="m-3">
                  <label for="image" class="form-label">Foto</label>
                  <input type="file" accept="image/*" name="image" id="image" class="form-control" />
              </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn-success">Tambah Tipe Kamar</button>
          </div>
        </form>
      </div>
    </div>
  </content>
</template>

<script>
import axios from "../lib/axios";

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

export default{
    data() {
        return{

        }
    }
}

</script>