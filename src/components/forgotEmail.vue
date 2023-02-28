<template>
  <el-container>
    <el-card class="card">
      <el-header class="head"> <el-image :src="url" class="img" /></el-header>
      <p
        style="
          padding: 1px;
          text-align: center;
          font-size: x-large;
          font-family: Arial, Helvetica, sans-serif;

          margin-top: 2%;
        "
      >
        Find your email
      </p>
      <p
        style="
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 500;
          margin-top: -3%;
          font-size: medium;
          font-language-override: normal;
        "
      >
        Enter your phone number or recovery email
      </p>
      <el-main class="body">
        <el-input
          placeholder="Phone or email"
          v-model="mail"
          style="width: 325px; margin-top: 1%; height: 50px; border-radius: 4px"
        ></el-input>
      </el-main>

      <el-footer class="footer">
        <el-button
          type="primary"
          style="width: 75px"
          >Next</el-button
        >
      </el-footer>
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
      </el-dropdown>
    </el-col>

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

const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const mail = ref();
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
  margin-top: 5%;
  margin-left: 68%;
}
.body {
  margin-left: 5%;
}
.btn1 {
  width: 55%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
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
</style>
