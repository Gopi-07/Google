<template>
  <el-container style="opacity: 1">
    <!-- // main header -->
    <el-header style="margin-top: -1%; margin-left: -1.8%; width: 100%">
      <div class="h-6" />
      <el-row style="width: 1534px">
        <el-menu
          mode="horizontal"
          text-color="#fff"
          style="
            width: 1538px;
            margin-top: 0%;
            background-color: rgb(241, 244, 244);
          "
        >
          <el-menu-item
            index="1"
            v-show="isCollapse == true"
            @click="isCollapse = !isCollapse"
          >
            <el-icon style="color: #454545"><Expand /></el-icon
          ></el-menu-item>
          <el-menu-item
            v-show="isCollapse == false"
            index="1"
            @click="isCollapse = !isCollapse"
          >
            <el-icon style="color: #454545"><Fold /></el-icon
          ></el-menu-item>

          <el-menu-item index="3"
            ><el-image
              :src="url"
              style="margin-left: -45%; margin-top: -17%"
            ></el-image
          ></el-menu-item>
          <el-menu-item index="4">
            <el-input
              v-model="search"
              style="
                width: 700px;
                margin-left: 6%;
                height: 40px;
                margin-top: 2%;
                margin-bottom: 1%;
              "
              placeholder="Search mail"
              :prefix-icon="Search"
              :suffix-icon="Operation"
            ></el-input
          ></el-menu-item>
          <el-menu-item
            index="5"
            style="margin-left: 25%; color: #454545; margin-top: 0.2%"
          >
            <el-icon :size="25"><QuestionFilled /></el-icon>
          </el-menu-item>
          <el-menu-item
            index="6"
            style="margin-left: -1%; color: #454545; margin-top: 0.2%"
          >
            <el-icon :size="25"><Setting /></el-icon>
          </el-menu-item>
          <el-menu-item
            index="7"
            style="margin-left: -1%; color: #454545; margin-top: 0.2%"
          >
            <el-icon :size="25" @click="menu = !menu"><Grid /></el-icon>
          </el-menu-item>
          <el-menu-item
            index="8"
            style="margin-left: -1%; color: #454545; margin-top: 0.2%"
          >
            <el-avatar :size="29" @click="accounts = true"
              ><UserFilled
            /></el-avatar>
          </el-menu-item> </el-menu
      ></el-row>
    </el-header>

    <el-container>
      <!-- //content header -->
      <el-header style="margin-left: 12%">
        <el-row style="margin-left: -7%; margin-top: 2%">
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
          <el-icon style="margin-left: 2%"><RefreshLeft /></el-icon>
          <el-icon style="margin-left: 2%"><More /></el-icon>
        </el-row>
      </el-header>
      <!-- //content asider -->
      <el-aside
        @mouseenter="isCollapse = false"
        style="width: min-content; margin-left: -1%; margin-top: -3.8%"
        @mouseleave="isCollapse = true"
      >
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          style="margin-left: 0%; background-color: rgb(241, 244, 244)"
        >
          <el-menu-item
            index="0"
            style="margin-top: 0%"
            @click="visible = !visible"
          >
            <el-icon style="margin-right: 7%"><EditPen /></el-icon>
            <template #title>Compose </template>
          </el-menu-item>
          <el-menu-item index="1" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><Picture /></el-icon>
            <template #title>Inbox</template>
          </el-menu-item>
          <el-menu-item index="2" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><Star /></el-icon>
            <template #title>Starred</template>
          </el-menu-item>

          <el-menu-item index="3" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><clock /></el-icon>
            <template #title>Snoozed</template>
          </el-menu-item>

          <el-menu-item index="4" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><Promotion /></el-icon>
            <template #title>Sent</template>
          </el-menu-item>

          <el-menu-item index="5" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><document /></el-icon>
            <template #title>Drafts</template>
          </el-menu-item>
          <el-menu-item index="6" style="margin-top: 0%">
            <el-icon style="margin-right: 7%"><Setting /></el-icon>
            <template #title>More</template>
          </el-menu-item>
          <el-menu-item index="7" style="margin-top: 0%" @click="chat = !chat">
            <el-icon style="margin-right: 7%"><ChatLineSquare /></el-icon>
            <template #title>Chats</template>
          </el-menu-item>
          <el-menu-item index="8" style="margin-top: 0%" @click="space = true">
            <el-icon style="margin-right: 7%"><User /></el-icon>
            <template #title>Spaces</template>
          </el-menu-item>
          <!-- <el-menu-item index="9" style="margin-top: 0%" @click="meet = true">
            <el-icon style="margin-right: 7%"><VideoCamera /></el-icon>
            <template #title>Meet</template>
          </el-menu-item> -->
        </el-menu>
      </el-aside>

      <!-- //main content -->
      <el-main style="margin-left: 5.7%; margin-top: -32%">
        <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="
            width: 90%;
            position: fixed;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          <el-table-column width="40">
            <template #default="scope">
              <el-icon v-show="scope.row.select == true" size="16"
                ><CircleCheckFilled
              /></el-icon>
              <el-icon v-show="scope.row.select == false" size="16"
                ><CircleCheck
              /></el-icon>
            </template>
          </el-table-column>
          <el-table-column width="40">
            <template #default="scope">
              <el-icon v-show="scope.row.star == true" size="15"
                ><StarFilled
              /></el-icon>
              <el-icon v-show="scope.row.star == false"><Star /></el-icon>
            </template>
          </el-table-column>

          <el-table-column property="name" width="200" />
          <el-table-column width="1040">
            <template #default="scope"
              ><b>{{ scope.row.sub }}</b
              >-{{ scope.row.main }}</template
            >
          </el-table-column>
          <el-table-column width="90">
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

  <!-- Compose-dialog -->
  <el-dialog
    v-model="visible"
    style="
      width: 600px;
      height: 500px;
      margin-left: 58%;
      margin-top: 14%;
      border-radius: 9px;
    "
  >
    <el-row
      style="
        margin-top: -10.7%;
        background-color: rgb(225, 236, 236);
        margin-left: -3.6%;
        width: 600px;
        margin-right: 9%;
        /* margin-bottom: -4%; */
        height: 45px;
      "
      class="row"
    >
      <p
        style="
          margin-top: 3%;
          margin-left: 2.5%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        <b>New message</b>
      </p>
      <el-icon style="margin-top: 3%; margin-left: 65%"><Minus /></el-icon>
      <el-icon style="margin-top: 2.4%; margin-left: 5%"><TopRight /></el-icon>
      <el-icon style="margin-top: 3.7%; margin-left: -3.7%"
        ><BottomLeft
      /></el-icon>
      <el-icon style="margin-top: 3%; margin-left: 4%" @click="visible = false"
        ><Close /></el-icon
    ></el-row>
    <el-row>
      <p style="font-family: Arial, Helvetica, sans-serif">Recipients</p>
      <!-- <p style="margin-left: 89%; font-family: Arial, Helvetica, sans-serif">
        Cc Bcc
      </p> -->
    </el-row>
    <hr style="margin-top: -1%; opacity: 0.2" />
    <el-row style="margin-top: -1%">
      <p style="font-family: Arial, Helvetica, sans-serif; margin-top: 2%">
        Subject
      </p>
    </el-row>
    <hr style="margin-top: -1%; opacity: 0.2" />
    <el-row style="margin-top: 58%">
      <el-button
        type="primary"
        round
        style="width: 80px; background-color: blue"
        >Send<el-icon style="margin-left: 6%"><CaretBottom /></el-icon
      ></el-button>

      <span style="margin-left: 1%; margin-top: 1%"><b>A</b></span
      ><el-icon style="margin-top: 3%; margin-left: -2.6%" size="20"
        ><SemiSelect
      /></el-icon>

      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><Paperclip
      /></el-icon>
      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><Link
      /></el-icon>
      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><Picture
      /></el-icon>
      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><Lock
      /></el-icon>
      <!-- <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><Drive
      /></el-icon> -->
      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><EditPen
      /></el-icon>
      <el-icon size="20" style="margin-left: 3%; margin-top: 1%; color: black"
        ><MoreFilled
      /></el-icon>
      <el-icon size="16" style="margin-left: 39%; margin-top: 1%; color: black"
        ><Delete
      /></el-icon>
    </el-row>
  </el-dialog>

  <!-- Menu-dialog -->

  <el-dialog
    v-model="menu"
    style="
      width: 300px;
      height: 362px;
      margin-left: 80%;
      margin-top: 4%;
      border-radius: 9px;
    "
    :show-close="false"
  >
    <el-row style="margin-left: 11%; margin-top: -11%">
      <el-avatar :size="40"><UserFilled /></el-avatar>
      <el-image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
        style="width: 45px; height: 45px; margin-left: 22%"
      />
      <el-image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B6m58H3ZXRn2HrWDbZjpz3H3MHUpaMK7tg&usqp=CAU"
        style="width: 45px; height: 45px; margin-left: 17%"
      />
    </el-row>
    <el-row style="margin-top: -6%">
      <p
        style="
          margin-left: 10%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Account
      </p>
      <p
        style="
          margin-left: 18%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Search
      </p>
      <p
        style="
          margin-left: 17%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Maps
      </p>
    </el-row>

    <el-row style="margin-top: 5%">
      <el-image
        src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"
        style="width: 60px; height: 60px; margin-left: 9%"
      />
      <el-image
        src="https://img.freepik.com/premium-vector/google-play-logo_578229-280.jpg?w=2000"
        style="width: 60px; height: 60px; margin-left: 13%"
      />
      <el-image
        src="https://i0.wp.com/lensesview.com/wp-content/uploads/2020/12/gmail-new-icon-2.jpg?fit=840%2C507&ssl=1"
        style="width: 50px; height: 45px; margin-left: 10%; margin-top: 4%"
      />
    </el-row>
    <el-row style="margin-top: -6%">
      <p
        style="
          margin-left: 10%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Youtube
      </p>
      <p
        style="
          margin-left: 21%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Play
      </p>
      <p
        style="
          margin-left: 18%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Gmail
      </p>
    </el-row>
    <el-row style="margin-top: 5%">
      <el-image
        src="data:image/png;base64,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"
        style="width: 70px; height: 70px; margin-left: 8%"
      />
      <el-image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAllBMVEX///8ArEdbuXQAgy1eu3cAqDuh2LFOtWru+PFStm203b4AqkAplkgAjDNzx40AlDip2LWFyZd/zZgXsFHC48oDhS8ApjM8olju+PB+xpHU69pjvHu94MZIs2XJ5tH3+/iVz6RNrGmw4L9LvXEttV1WwHkVizlBuWlMr2cxm08Ao0FzwogAnj5Dpl/Q7dsPr06P06Td8uWjHj3zAAAC7ElEQVR4nO3djVLaQBSG4UDEGGLVKqaKWrRa608r9f5vrui0X4VkF0Kys5vZ97mD887ZNTNgSBIAAAAAAAAAAAAAAODJ7GyvOzPf02xvcp51Kz//6numrUx3smHnsoup77maGzsI8R7j0vdkTU2u3JQYDq96dkj2HO3Em6xf1+d17i5Fvut7uiZmDkss+B6vianD87E4Ia++52tg7HQr8j79ETlym2Lse74GSCGkEFIIKYQUQgohhZBCSCGkEFIIKYQUQgohhZBCxvnO1vqb4mX3+KDiZn9rjw/DdTXCTPHtpBwVVYdpC6df1rQIMcXsthzUapUiTe97l2J2V9SXaJsiPe1biu8jQ4nWKdJ72xkJL8XEcDq6SJHa7ovwUvwwHY8uUtiOSHApzsxL0UGK9KFHKS6NN0UnKSwnJLgUu25TPJKCFKQgBSlIQQpSkIIUpEhI8QEphBRCCiGFkEJIIaQQUggphBRCCiGFkEJIIaQQUggphBRCCiGFkEJIIbYUP92mCO0VL7YUT05TZGe+Z19hSzE4dZniwvfoq6wp2l8W5hTZxPfoq6wp2q+FMUX+7HvyCnuKgasU+U5474Jak+Kp5V4YUuTPe74Hr1qTou19sV+TIc+Ce6R4tzbF4vHi8NPWfn2uOgrtgeKvDVK0UBz7nq8BUggphBRCCiGFkEJIIaQQUggphBRCCiGFkEJIIaQQUggpxG2KUZ9+48BtivLF93wNuE0x9z1eE05TlH06H05TFHe+p2vEYYqiCO0bFHbuUozu+lXCnqLmFYMbGpWDa9+jNWVJUZxU3zu5qd+Bfi5qY05RzAP84N8lY4riJLISxhTR7YQxRXw7YUoR4U4YUkRZojZFjKcjqU0R507UpYh0J2pSRFuikiLeEqspIi6xkiLWG/PdUoqoSyyliPl0JEspIi/xIUXsJf6/8j/6Ekky58b856V8+/2DETux8HpbluVBeP/K5cWsZx9YAAAAAAAAAAAAAAAAiz9SoYxgNNvQKQAAAABJRU5ErkJggg=="
        style="width: 55px; height: 55px; margin-left: 10%"
      />
      <el-image
        src="https://strohlsf.com/wp-content/uploads/GoogleDrive/drivelogo@2x.png"
        style="width: 70px; height: 70px; margin-left: 7%"
      />
    </el-row>
    <el-row style="margin-top: -6%">
      <p
        style="
          margin-left: 15%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Meet
      </p>
      <p
        style="
          margin-left: 23%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Chat
      </p>
      <p
        style="
          margin-left: 20%;
          margin-top: 7%;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Drive
      </p>
    </el-row>
  </el-dialog>

  <!-- Chat-dialog -->

  <el-dialog
    v-model="chat"
    style="
      width: 200px;
      height: 500px;
      margin-left: 4%;
      margin-top: 9%;
      border-radius: 9px;
    "
    :show-close="false"
  >
    <el-row
      style="
        margin-top: -37%;
        background-color: rgb(225, 236, 236);
        margin-left: -12%;
        width: 198px;
        margin-right: 9%;
        height: 45px;
        border-radius: 5px;
      "
    >
      <el-icon style="margin-top: 6.6%; margin-left: 16%" size="20"
        ><ChatSquare
      /></el-icon>
      <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif">
        <b> New chat</b>
      </p>
    </el-row>
    <el-icon style="margin-top: 100.6%; margin-left: 35%" size="30"
      ><ChatSquare
    /></el-icon>
    <p style="margin-top: 6.6%; margin-left: 16%">No conversations</p>
    <el-link type="primary" style="margin-top: -10%; margin-left: 24%"
      >Start a chat</el-link
    >
  </el-dialog>

  <!-- Space-dialog -->

  <el-dialog
    v-model="space"
    style="
      width: 200px;
      height: 500px;
      margin-left: 4%;
      margin-top: 9%;
      border-radius: 9px;
    "
    :show-close="false"
  >
    <el-row
      style="
        margin-top: -37%;
        background-color: rgb(225, 236, 236);
        margin-left: -12%;
        width: 198px;
        margin-right: 9%;
        height: 45px;
        border-radius: 5px;
      "
    >
      <el-icon style="margin-top: 6.6%; margin-left: 16%" size="20"
        ><Plus
      /></el-icon>
      <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif">
        <b> New space</b>
      </p>
    </el-row>
    <el-icon style="margin-top: 100.6%; margin-left: 35%" size="30"
      ><Notebook
    /></el-icon>
    <p style="margin-top: 6.6%; margin-left: 21%">No spaces yet</p>
    <el-link type="primary" style="margin-top: -10%; margin-left: 10%"
      >Create or find a space</el-link
    >
  </el-dialog>

  <!-- Account-dialog -->

  <el-dialog
    v-model="accounts"
    style="
      width: 400px;
      height: 370px;
      margin-left: 73%;
      margin-top: 3.7%;
      border-radius: 15px;
    "
    :show-close="false"
  >
    <el-row style="margin-left: 1%; margin-top: -11%">
      <el-avatar :size="50" :src="circleUrl" />
      <p
        style="
          margin-left: 2%;
          margin-top: 2%;
          font-size: medium;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Msd Gopi
      </p>
      <p style="margin-left: -19%; margin-top: 7%">msdgopi@gmail.com</p>
    </el-row>
    <el-button
      plain
      style="border-radius: 5px; margin-left: 17%; margin-top: 5%; width: 250px"
      >Manage your Google account</el-button
    >
    <hr style="margin-top: 8%; opacity: 0.5" />
    <el-row style="margin-left: 4%; margin-top: 3.4%">
      <el-avatar :size="30" :src="circleUrl" />
      <p
        style="
          margin-left: 5%;
          margin-top: 0%;
          font-size: medium;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Msd Hari
      </p>
      <p style="margin-left: -18%; margin-top: 5%">msdhari@gmail.com</p>
    </el-row>
    <el-row style="margin-left: 4%; margin-top: 3%">
      <el-icon :size="20" style="margin-left: 2%; margin-top: 1.3%"
        ><Avatar
      /></el-icon>
      <el-icon :size="10" style="margin-left: -1.6%; margin-top: 1.9%"
        ><Plus
      /></el-icon>
      <p
        style="
          margin-left: 5%;
          margin-top: 1.9%;
          font-size: small;
          font-weight: 500;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Add another account
      </p>
    </el-row>
    <el-row style="margin-left: 4%; margin-top: 3%">
      <el-icon :size="20" style="margin-left: 2%; margin-top: 1.3%"
        ><RemoveFilled
      /></el-icon>
      <p
        style="
          margin-left: 5%;
          margin-top: 1.9%;
          font-size: small;
          font-weight: 500;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        Sign out of all accounts
      </p>
    </el-row>
    <hr style="margin-top: 5%; opacity: 0.3" />
    <el-row style="margin-left: 23%; margin-top: -3%">
      <el-link>Privacy policy</el-link>
      <p style="margin-left: 3%"><b>.</b></p>
      <el-link style="margin-left: 3%"> Terms of Service</el-link>
    </el-row>
  </el-dialog>

  <!-- Meet-dialog  -->

  <!-- <el-tooltip
    v-model="meet"
    style="
      width: 200px;
      height: 500px;
      margin-left: 4%;
      margin-top: 9%;
      border-radius: 9px;
    "
    :show-close="false"
  >
    <el-row
      style="
        margin-top: -37%;
        background-color: rgb(225, 236, 236);
        margin-left: -12%;
        width: 198px;
        margin-right: 9%;
        height: 45px;
        border-radius: 5px;
      "
    >
      <el-icon style="margin-top: 6.6%; margin-left: 16%" size="20"
        ><ChatSquare
      /></el-icon>
      <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif">
        <b> New chat</b>
      </p>
    </el-row>
    <el-icon style="margin-top: 100.6%; margin-left: 35%" size="30"
      ><ChatSquare
    /></el-icon>
    <p style="margin-top: 6.6%; margin-left: 16%">No conversations</p>
    <el-link type="primary" style="margin-top: -10%; margin-left: 24%"
      >Start a chat</el-link
    >
  </el-tooltip> -->

  <el-popover v-model="meet" placement="right" trigger="click">
    <template #reference>
      <el-icon style="margin-left: 0.6%; margin-top: 30%" class="meeet"
        ><VideoCamera
      /></el-icon>
    </template>
    <el-row
      style="
        margin-top: -9.6%;
        background-color: rgb(225, 236, 236);
        margin-left: -9.4%;
        width: 148px;
        margin-right: 9%;
        height: 45px;
        border-radius: 5px;
      "
    >
      <el-icon style="margin-top: 9.6%; margin-left: 16%" size="20"
        ><VideoCamera
      /></el-icon>
      <p style="margin-left: 7%; font-family: Arial, Helvetica, sans-serif">
        <b> New meet</b>
      </p>
    </el-row>
    <el-icon style="margin-top: 50.6%; margin-left: 42%" size="25"
      ><VideoCamera
    /></el-icon>
    <p style="margin-top: 5.6%; margin-left: 16%">No conversations</p>
    <el-link type="primary" style="margin-top: -10%; margin-left: 14%"
      >Start a new meet</el-link
    >
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElTable, spaceProps } from "element-plus";
// import { useRouter } from "vue-router";
import {
  Search,
  Operation,
  QuestionFilled,
  Delete,
  ChatLineSquare,
  Plus,
  RemoveFilled,
  VideoCamera,
} from "@element-plus/icons-vue";
import Space from "element-plus/es/components/space/src/space";

const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const space = ref(false);
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const activeIndex2 = ref("1");
const isCollapse = ref(false);

const meet = ref(false);
const visible = ref(false);
const menu = ref(false);
const accounts = ref(false);

const lan = ref("All");
const langs = ref(["All", "None", "Read", "Unread", "Starred", "Unstarred"]);

const chat = ref(false);
const search = ref("");
const tableData: User[] = [
  {
    date: "Jan 30",
    name: "Slack",
    sub: "No Attendance Logged",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: false,
  },
  {
    date: "Feb 10",
    name: "PhonePe",
    sub: "Microsoft Edge",
    main: "The new Microsoft Edge offers world-class compatibility with the web and extensions.",
    star: true,
    select: true,
  },
  {
    date: "Mar 30",
    name: "Skill-Lync",
    sub: "Paid Internship Program ",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Apr 30",
    name: "larsenturbo",
    sub: "Discover the new Microsoft Edge",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: true,
    select: false,
  },
  {
    date: "May 30",
    name: "MongoDB Team",
    sub: "Attack slow queries to improve your cluster performance",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: false,
  },
  {
    date: "June 30",
    name: "Swiggy",
    sub: "Need to hit ⏸ on the day?",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: true,
    select: false,
  },
  {
    date: "July 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Aug 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Sep 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Oct 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Nov 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Dec 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
  {
    date: "Jan 30",
    name: "Coursera",
    sub: "BITS Pilani's open eligibility criteria",
    main: "New messages from your Avow Solutions Inc coworkers",
    star: false,
    select: true,
  },
];

const url =
  "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png";
</script>

<style scoped>
.row:hover {
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.meeet:hover {
  cursor: pointer;
}
</style>
