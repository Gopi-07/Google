<template>
  <el-form ref="formRef" :model="Validate">
    <el-container>
      <el-card class="card">
        <el-header class="head"> <el-image :src="url" class="img" /></el-header>
        <p
          style="
            padding: 1px;
            text-align: center;
            font-size: x-large;
            font-family: 'Times New Roman', Times, serif;
            font-weight: bold;
            font-size: x-large;
            margin-top: 2%;
          "
        >
          Welcome
        </p>
        <el-button type="" round class="btn1" @click="router.push('/Accounts')"
          ><el-icon><UserFilled /></el-icon
          ><span style="margin-left: 5%">{{ $route.params.id }}</span
          ><el-icon style="margin-left: 9%"><ArrowDown /></el-icon>
        </el-button>

        <el-main class="body">
          <el-form-item
            prop="pwd"
            :rules="[{ required: true, message: '', min: 7 }]"
          >
            <el-input
              :type="checked ? 'text' : 'password'"
              placeholder="Enter Your Password"
              v-model="Validate.pwd"
              style="
                width: 325px;
                margin-top: 1%;
                height: 50px;
                border-radius: 4px;
              "
            ></el-input>
            <el-checkbox v-model="checked"
              ><b>Show password</b></el-checkbox
            ></el-form-item
          >
        </el-main>

        <el-footer class="footer">
          <el-row>
            <el-button
              type="primary"
              text
              link
              @click="router.push(`/forgotPassword/${$route.params.id}`)"
              ><b>Forgot password?</b></el-button
            >
            <el-button
              type="primary"
              style="margin-left: 37%; width: 75px"
              @click="validate(formRef)"
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
    </el-row></el-form
  >
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import type { FormInstance } from "element-plus";

import { useRouter } from "vue-router";
import { ref, reactive } from "vue";

const formRef = ref<FormInstance>();
const Validate = reactive({
  pwd: "",
});
const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const checked = ref(false);
const lan = ref("English (United Kingdom)");
const langs = ref([
  "English (United Kingdom)",
  "Português(Portugal)",
  "தமிழ்",
  "Chinese",
  "English (United States)",
]);
const validate = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
      router.push(`/mainPage`);
      ElMessage({
        message: "Logged in successfully",
        type: "success",
      });
      router.push(`/mainPage`);
    } else {
      console.log("error submit!");
      ElMessage({
        message: "Enter correct password",
        type: "warning",
      });
      return false;
    }
  });
};
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
