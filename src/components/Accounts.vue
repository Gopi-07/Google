<template>
  <el-container>
    <el-card class="card">
      <el-header class="head"> <el-image :src="url" class="img" /></el-header>
      <p
        style="
          text-align: center;
          font-weight: bold;
          font-size: larger;
          font-family: 'Times New Roman', Times, serif;
          margin-top: 4%;
        "
      >
        Choose an account
      </p>

      <span v-for="mem in details">
        <el-container
          class="user"
          @click="router.push(`/Password/${mem.mail}`)"
        >
          <el-aside
            style="
              margin-top: 5%;
              width: min-content;
              margin-bottom: 0%;
              margin-left: 5%;
            "
            ><el-avatar :size="25" :src="circleUrl"
          /></el-aside>
          <el-main>
            <p
              style="
                margin-bottom: 0%;
                margin-top: -3%;
                font-size: large;
                font-size: medium;
                font-weight: bold;
              "
            >
              {{ mem.name }}
            </p>
            <p style="margin-top: 0%; margin-bottom: -2%">{{ mem.mail }}</p>
          </el-main>
        </el-container>
        <hr style="margin-top: 0%; margin-bottom: 0%" />
      </span>

      <!-- <el-container class="user" @click="router.push('/Password')">
        <el-aside
          style="
            margin-top: 6%;
            width: min-content;
            margin-bottom: 0%;
            margin-left: 5%;
          "
        >
          
          <el-avatar :size="35" :src="circleUrl" />
        </el-aside>
        <el-main>
          <p
            style="
              margin-bottom: 0%;
              margin-top: 1%;
              font-size: large;
              font-size: medium;
              font-weight: bold;
            "
          >
            Msd Gopi
          </p>
          <p style="margin-top: 0%; margin-bottom: -2%">msdgopi@gmail.com</p>
        </el-main></el-container
      >
     
      <hr style="margin-top: 0%; margin-bottom: 0%" />
      <el-container class="user" @click="router.push('/Password')">
        <el-aside
          style="
            margin-top: 3%;
            width: min-content;
            margin-bottom: 0%;
            margin-left: 5%;
          "
        >
        
          <el-avatar :size="35" :src="circleUrl" />
        </el-aside>
        <el-main>
          <p
            style="
              margin-bottom: 0%;
              margin-top: -3%;
              font-size: large;
              font-size: medium;
              font-weight: bold;
             
            "
          >
            Msd Hari
          </p>
          <p style="margin-top: 0%; margin-bottom: 0%">msdhari@gmail.com</p>
        </el-main></el-container
      >
      <hr style="margin-top: 0%; margin-bottom: 0%" /> -->

      <el-container class="user" @click="router.push('/')">
        <el-aside
          style="
            margin-top: 3%;
            width: min-content;
            margin-bottom: 0%;
            margin-left: 7%;
          "
        >
          <el-icon size="large"><User /></el-icon>
        </el-aside>
        <el-main>
          <p
            style="
              margin-bottom: -3%;
              margin-top: -3%;
              font-size: large;
              font-size: medium;
              font-weight: bold;
              margin-left: 2%;
            "
          >
            Use an another account
          </p>
        </el-main></el-container
      >
    </el-card>
  </el-container>

  <el-row>
    <el-col :span="3" offset="0" class="footer2">
      <el-dropdown v-model="lan" trigger="click">
        <span class="el-dropdown-link">
          {{ lan }}
          <el-icon><CaretBottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu
            ><span v-for="lang of langs">
              <el-dropdown-item @click="lan = lang">{{
                lang
              }}</el-dropdown-item></span
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown></el-col
    >

    <el-col :span="3" offset="0" style="margin-left: 5%; margin-top: 16px">
      <el-button type="" text plain size="small">Help</el-button>
      <el-button type="" text plain size="small">Privacy</el-button>
      <el-button type="" text plain size="small">Terms</el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const details = ref([
  { name: "Msd Gopi", mail: "msdgopi@gmail.com" },
  { name: "Msd Hari", mail: "hari@gmail.com" },
  { name: "Msd Naveen", mail: "naveen@gmail.com" },
]);
const lan = ref("English (United Kingdom)");
const langs = ref([
  "English (United Kingdom)",
  "Português(Portugal)",
  "தமிழ்",
  "Chinese",
  "English (United States)",
]);
</script>

<style scoped>
.head {
  margin-top: 4%;
  text-align: center;
  margin-bottom: 0%;
}

.card {
  /* text-align: center; */
  margin-left: 39%;
  margin-top: 6%;
  width: 29%;
  height: 500px;
  border-radius: 2%;
}

.img {
  width: 35%;
}
.footer {
  margin-top: 15%;
  margin-left: 5%;
}
.body {
  /* margin-top:1%; */
  margin-left: 5%;
}
.btn1 {
  width: 55%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}
.footer2 {
  margin-left: 39%;
  margin-top: 19px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.user:hover {
  color: rgb(77, 77, 229);
  cursor: pointer;
}
</style>
