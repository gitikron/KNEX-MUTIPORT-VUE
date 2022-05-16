<template>
  <div>
    <button @click="get()">GET</button>
    <br /><br />
    <input type="number" placeholder="0" /><button @click="getByID(1)">
      getByID
    </button>
    <br /><br />
    <input type="text" placeholder="user_id" v-model="NewUser.user_id" />
    <input type="text" placeholder="display" v-model="NewUser.display" />
    <input type="text" placeholder="img" v-model="NewUser.img" />
    <input type="text" placeholder="fullName" v-model="NewUser.fullName" />
    <input type="text" placeholder="form" v-model="NewUser.form" />
    <button @click="post(this.NewUser)">getByID</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StockDarleneIndex",

  data() {
    return {
      NewUser: {
        user_id: "",
        display: "",
        img: "",
        fullName: "",
        form: "",
      },
    };
  },
  methods: {
    async get() {
      try {
        let response = await axios.get("http://localhost:3000/user");
        console.log({ GET: response.data });
      } catch (error) {
        console.log(error);
      }
    },
    async getByID(ID) {
      try {
        let getByID = await axios.get(`http://localhost:3000/user/${ID}`);
        console.log({ GETBYID: getByID.data });
      } catch (error) {
        console.log(error);
      }
    },
    async post(data) {
      let CreateUser = { user_id:data.user_id, display:data.display, img:data.img, fullName:data.fullname, form:data.form };
      try {
        let response = await axios.post(
          "http://localhost:3000/user",
          CreateUser
        );
        console.log({ GET: response.data });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
