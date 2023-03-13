<template>
  <content-header title="Kamar" />
  <content>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">kamar</h3>
          </div>
          <div class="card-body">
            <table class="table table-responsive table-striped table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Room Image</th>
                  <th>Number Room</th>
                  <th>Room ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(lr, index) in list_room" :key="lr.room_id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <!-- <img
                      v-if="ls.image !== null"
                      :src="api_url2 + '/images/' + ls.image"
                      width="150"
                    />
                    <button
                      v-else
                      class="btn btn-sm btn-warning"
                      @click="Edit(ls)"
                      data-bs-toggle="modal"
                      data-bs-target="#student_cover_modal"
                    >
                      <i class="fas fa-image fa-fw"></i>
                    </button> -->
                  </td>
                  <td>{{ lr.room_number }}</td>
                  <td>{{ lr.room_type_id }}</td>
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
            <button class="btn btn-sm btn-success">
              <i class="fas fa-plus fa-fw"></i>
              Tambah Kamar
            </button>
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
      room_id: "",
      room_number: "",
      room_type_id: "",
      list_room: [],
    };
  },
  methods: {
    getData: function () {
      axios.get("/room").then((res) => {
        if (res.data.status !== 0) {
          this.list_room = res.data;
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
  