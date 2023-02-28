<template>
  <el-form ref="formRef" :model="mailValidate">
    <el-container>
      <el-card class="card">
        <el-header class="head"> <el-image :src="url" class="img" /></el-header>
        <p
          style="
            text-align: center;
            margin-top: 3%;
            font-size: x-large;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          Sign In
        </p>
        <h3 style="text-align: center">Use your Google Account</h3>
        <el-main class="body">
          <el-form-item
            prop="mail"
            :rules="[{ required: true, message: '', min: 10 }]"
          >
            <el-input
              type="email"
              placeholder="Email or phone"
              v-model="mailValidate.mail"
              style="
                width: 325px;
                margin-top: 2%;
                border-radius: 4px;
                height: 50px;
              "
              required
            ></el-input
          ></el-form-item>

          <el-button
            type="primary"
            text
            link
            style="margin-left: 1%"
            @click="router.push('/forgotEmail')"
            >Forgot email?</el-button
          >

          <p style="margin-top: 17%; font-size: medium">
            Not your computer? Use Guest mode to sign in privately.<span>
              <el-link
                :underline="false"
                href="https://support.google.com/chrome/answer/6130773?hl=en-GB"
                >Learn more</el-link
              >
            </span>
          </p>
        </el-main>

        <el-footer class="footer">
          <el-row>
            <el-button type="primary" text link @click="router.push('/Signup')"
              ><b>Create Account</b></el-button
            >
            <el-button
              type="primary"
              style="margin-left: 39%; width: 75px"
              @click="validate(formRef)"
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

      <el-col :span="3" offset="0" style="margin-left: 5%; margin-top: 16px">
        <el-button type="" text plain size="small">Help</el-button>
        <el-button type="" text plain size="small">Privacy</el-button>
        <el-button type="" text plain size="small">Terms</el-button>
      </el-col>
    </el-row></el-form
  >
</template>

<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";

const formRef = ref<FormInstance>();
const router = useRouter();
const url =
  "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw";

const mailValidate = reactive({
  mail: "",
});

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
      router.push(`/Password/${mailValidate.mail}`);
    } else {
      console.log("error submit!");
      ElMessage({
        message: "Enter mail id correctly",
        type: "warning",
      });
      return false;
    }
  });
};
</script>

<style scoped>
.card {
  margin-left: 39%;
  margin-top: 6%;
  width: 29%;
  height: 530px;

  border-radius: 2%;
}
.head {
  margin-top: 2%;
  text-align: center;
  margin-bottom: 0%;
}
.body {
  margin-left: 5%;
}
.footer {
  margin-top: 3%;
  margin-left: 6%;
}
.img {
  width: 35%;
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
