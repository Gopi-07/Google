<template>
  <el-container>
    <el-card class="card">
      <el-header class="head"> <el-image :src="url" class="img" /></el-header>
      <p
        style="
          margin-top: 2%;
          margin-left: 5%;
          text-align: center;
          font-size: x-large;
          font-family:Arial, Helvetica, sans-serif
          font-weight: bold;
          margin-bottom: 0%;
        "
      >
        Account recovery
      </p>
      <p
        style="
          text-align: center;
          margin-bottom: -3%;
          font-family: Arial, Helvetica, sans-serif;
          font-size: medium;
        "
      >
        To help keep your account safe,Google wants to
      </p>
      <p
        style="
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: medium;
        "
      >
        make sure it's really you trying to sign in
      </p>

      <el-button
        type=""
        round
        class="btn1"
        @click="router.push('/chooseAnotherAccount')"
        ><el-icon><UserFilled /></el-icon
        ><span style="margin-left: 5%">{{ $route.params.id }}</span
        ><el-icon style="margin-left: 9%"><ArrowDown /></el-icon>
      </el-button>

      <el-main class="body">
        <p
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-size:smaller
            font-weight: 500;
          "
        >
          An email with a verification code was just sent to
          {{ $route.params.id.slice(0, 2) }}****@gm*** **
        </p>

        <el-input
          type="text"
          placeholder="Enter code"
          v-model="code"
          style="width: 335px; margin-top: 1%; height: 50px; border-radius: 4px"
        ></el-input>
        <!-- 
        <el-input
          v-show="checked === true"
          type="text"
          placeholder="Enter Your Password"
          v-model="pwd"
          style="width: 335px; margin-top: 1%; height: 50px; border-radius: 4px"
        ></el-input>
        <el-checkbox v-model="checked"><b>Show password</b></el-checkbox> -->
      </el-main>

      <el-footer class="footer">
        <el-row>
          <el-button type="primary" text link @click=""
            ><b>Try another way</b></el-button
          >
          <el-button
            type="primary"
            style="margin-left: 43%; width: 75px"
            @click="login()"
            >Next</el-button
          >
        </el-row>
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
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const code = ref();
const lan = ref("English (United Kingdom)");
const langs = ref([
  "English (United Kingdom)",
  "Português(Portugal)",
  "தமிழ்",
  "Chinese",
  "English (United States)",
]);

const login = () => {
  ElMessage({
    message: "password sent to your mobile number successfully",
    type: "success",
  });
  router.push("/");
};
</script>

<style scoped>
.head {
  margin-top: 4%;
  text-align: center;
}

.card {
  /* text-align: center; */
  margin-left: 39%;
  margin-top: 4%;
  width: 29%;
  height: 550px;
  border-radius: 2%;
}

.img {
  width: 35%;
  margin-bottom: -5%;
}
.footer {
  margin-top: 7%;
  margin-left: 3%;
}
.body {
  margin-top: 3%;
  margin-left: 3%;
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
