<template>
  <content-header title="Tipe Kamar" />
  <content>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">tipekamar</h3>
          </div>
          <div class="card-body">
            <table class="table table-responsive table-striped table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Type Room Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(lr, index) in list_room_type"
                  :key="lr.room_type_id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ lr.room_type_name }}</td>
                  <td>{{ lr.price }}</td>
                  <td>{{ lr.description }}</td>
                  <td>
                    <img
                      v-if="lr.image !== null"
                      :src="'http://localhost:8000/roomtype_image/' + lr.image"
                      width="150"
                    />
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-info"
                      @click="Edit(ls)"
                      data-bs-toggle="modal"
                      data-bs-target="#student_modal"
                    >
                      <i class="fas fa-pencil-alt fa-fw"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-danger"
                      @click="Delete(ls.room_id)"
                    >
                      <i class="fas fa-trash-alt fa-fw"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <router-link class="btn btn-sm btn-success" to="tambah_tipe_kamar"
              >tambah kamar</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </content>
</template>
  
<script>
import axios from "@/lib/axios";

export default {
  data: function () {
    return {
      room_type_id: "",
      room_type_name: "",
      price: "",
      description: "",
      image: "",
      list_room_type: [],
    };
  },
  methods: {
    getData: function () {
      axios.get("/roomtype").then((res) => {
        if (res.data.status !== 0) {
          this.list_room_type = res.data;
        } else {
          this.$store.commit("logout");
          this.$router.push("/login");
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
  
  
  
  