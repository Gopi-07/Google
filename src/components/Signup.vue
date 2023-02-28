<template><el-form ref="formRef" :model="mailValidate">
  <el-container>
    <el-card class="card">
      <el-header class="head"> <el-image :src="url" class="img" /></el-header>
      <h2 style="text-align: center; margin-top: 15%; margin-left: -53%">
        Create your Google Account
      </h2>
      <el-container class="container">
        <el-aside class="body">
          <el-row style="margin-left: 4%">
            <el-input
              type="text"
              v-model="fname"
              placeholder="First name"
              style="width: 150px"
            ></el-input>
            <el-input
              type="text"
              v-model="lname"
              placeholder="Last name"
              style="width: 150px; margin-left: 2%"
            ></el-input>
          </el-row>
          <el-input
            type="text"
            v-model="mail"
            placeholder="Username"
            style="width: 308px; margin-left: 4%; margin-top: 6%"
            ><template #append> @gmail.com</template>
          </el-input>

          <el-button type="primary" link style="margin-top: 6%; margin-left: 4%"
            ><b>Use my current email address instead</b>
          </el-button>
          <el-row style="margin-left: 2%; margin-top: 13%">
            <el-input
              :type="checked ? 'text' : 'password'"
              v-model="pwd"
              placeholder="Password"
              style="width: 150px; margin-left: 2%"
            />
            <el-input
              :type="checked ? 'text' : 'password'"
              v-model="npwd"
              placeholder="Confirm"
              style="width: 150px; margin-left: 2%"
            />
          </el-row>
          <el-checkbox v-model="checked" style="margin-top: 2%; margin-left: 4%"
            ><b>Show password</b></el-checkbox
          >
        </el-aside>
        <el-main class="main"
          ><el-image :src="url1" class="img1"></el-image>
          <h4 style="margin-top: 0%; margin-left: 9%">
            One account. All of Google
          </h4>
          <h4 style="margin-top: -6%; margin-left: 22%">
            working for you.
          </h4></el-main
        >
      </el-container>

      <el-footer class="footer">
        <el-row>
          <el-button
            type="primary"
            text
            link
            style="margin-left: -3%"
            @click="router.push('/')"
            ><b>Sign in instead</b></el-button
          >
          <el-button
            type="primary"
            style="margin-left: 20.5%; width: 75px"
            @click="created()"
            >Next</el-button
          >
        </el-row>
      </el-footer>
    </el-card>
    
  </el-container>

  <el-row>
    <el-col class="footer2" :span="3" offset="0">
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

    <el-col :span="3" offset="0" style="margin-left: 23%; margin-top: 16px">
      <el-button type="" text plain size="small">Help</el-button>
      <el-button type="" text plain size="small">Privacy</el-button>
      <el-button type="" text plain size="small">Terms</el-button>
    </el-col>
  </el-row>
</el-form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ref } from "vue";

const url1 = "https://ssl.gstatic.com/accounts/signup/glif/account.svg";
const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const fname = ref("");
const lname = ref("");

const pwd = ref("");
const npwd = ref("");
const mail = ref("");
const checked = ref(false);

const lan = ref("English (United Kingdom)");
const langs = ref([
  "English (United Kingdom)",
  "Português(Portugal)",
  "தமிழ்",
  "Chinese",
  "English (United States)",
]);
const created = () => {
  ElMessage({
    message: "Account Created!!Login in your account",
    type: "success",
  });
  router.push("/");
};
</script>

<style scoped>
.card {
  margin-left: 28%;
  margin-top: 4%;
  width: 47%;
  height: 560px;

  border-radius: 2%;
}
.head {
  margin-top: -1%;
  margin-bottom: -6%;
  margin-left: -10%;
}
.body {
  margin-left: 10%;
  width: 50%;
  margin-top: 5%;
}
.footer {
  margin-top: -3%;
  margin-left: 1%;
}
.img {
  width: 30%;
  margin-bottom: -9%;
  margin-left: 6%;
}
.footer2 {
  margin-left: 28%;
  margin-top: 19px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.img1 {
  width: 250px;
  margin-left: -1%;
  margin-top: 12%;
}
.container {
  margin-left: -12%;
  margin-top: -4%;
}
.main {
  margin-left: -2%;
  width: max-content;
  margin-top: -7%;
}
</style>
