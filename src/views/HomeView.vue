<template>
  <div>
    <!-- 外层容器 -->
    <el-container>
      <!-- 上半区域：顶栏 -->
      <el-header class="layout-header"><h1>
        酷鲨商城运营管理平台
      </h1></el-header>
      <!-- 下半区域 -->
      <el-container class="layout-body">
        <!-- 下半区域的左侧边栏 -->
        <el-aside class="layout-aside">
          <el-menu
              :default-active="$router.currentRoute.path"
              router
              class="el-menu-vertical-demo"
              background-color="#222"
              text-color="#fff"
              active-text-color="#fff">
            <!-- 首页 -->
            <el-menu-item index="/sys-admin/index">
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </el-menu-item>
            <!-- 临时页面 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>临时页面</span>
              </template>
              <el-menu-item index="2-1" >
                <i class="el-icon-circle-plus"></i>
                <span>添加管理员</span>
              </el-menu-item>
              <el-menu-item index="2-2" >
                <i class="el-icon-s-operation"></i>
                <span>管理员列表</span>
              </el-menu-item>
              <el-menu-item index="2-3" >
                <i class="el-icon-circle-plus"></i>
                <span>添加品牌</span>
              </el-menu-item>
              <el-menu-item index="2-4" >
                <i class="el-icon-s-operation"></i>
                <span>品牌列表</span>
              </el-menu-item>
              <el-menu-item index="2-5" >
                <i class="el-icon-circle-plus"></i>
                <span>添加相册</span>
              </el-menu-item>
              <el-menu-item index="2-6" >
                <i class="el-icon-s-operation"></i>
                <span>相册列表</span>
              </el-menu-item>
              <el-menu-item index="2-7" >
                <i class="el-icon-circle-plus"></i>
                <span>添加属性模板</span>
              </el-menu-item>
              <el-menu-item index="2-8" >
                <i class="el-icon-s-operation"></i>
                <span>属性模板列表</span>
              </el-menu-item>
              <el-menu-item index="2-9" >
                <i class="el-icon-circle-plus"></i>
                <span>添加属性</span>
              </el-menu-item>
              <el-menu-item index="2-10" >
                <i class="el-icon-s-operation"></i>
                <span>属性列表</span>
              </el-menu-item>
            </el-submenu>
            <!-- 商品管理 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="3-1" >
                <i class="el-icon-s-operation"></i>
                <span>SPU台账</span>
              </el-menu-item>
              <el-menu-item index="3-2" >
                <i class="el-icon-circle-plus"></i>
                <span>新增SPU</span>
              </el-menu-item>
            </el-submenu>
            <!-- 订单管理 -->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="4-1" >
                <i class="el-icon-s-operation"></i>
                <span>SPU台账</span>
              </el-menu-item>
              <el-menu-item index="3-2" >
                <i class="el-icon-circle-plus"></i>
                <span>新增SPU</span>
              </el-menu-item>
            </el-submenu>
            <!-- 营销管理-->
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>临时页面</span>
              </template>
              <el-menu-item index="2-1" >
                <i class="el-icon-circle-plus"></i>
                <span>添加管理员</span>
              </el-menu-item>
              <el-menu-item index="2-2" >
                <i class="el-icon-s-operation"></i>
                <span>管理员列表</span>
              </el-menu-item>
              <el-menu-item index="2-3" >
                <i class="el-icon-circle-plus"></i>
                <span>添加品牌</span>
              </el-menu-item>
              <el-menu-item index="2-4" >
                <i class="el-icon-s-operation"></i>
                <span>品牌列表</span>
              </el-menu-item>
              <el-menu-item index="2-5" >
                <i class="el-icon-circle-plus"></i>
                <span>添加相册</span>
              </el-menu-item>
              <el-menu-item index="2-6" >
                <i class="el-icon-circle-plus"></i>
                <span>相册列表</span>
              </el-menu-item>
            </el-submenu>
            <!-- 商家管理-->
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>临时页面</span>
              </template>
              <el-menu-item index="2-1" >
                <i class="el-icon-circle-plus"></i>
                <span>添加管理员</span>
              </el-menu-item>
              <el-menu-item index="2-2" >
                <i class="el-icon-s-operation"></i>
                <span>管理员列表</span>
              </el-menu-item>
              <el-menu-item index="2-3" >
                <i class="el-icon-circle-plus"></i>
                <span>添加品牌</span>
              </el-menu-item>
              <el-menu-item index="2-4" >
                <i class="el-icon-s-operation"></i>
                <span>品牌列表</span>
              </el-menu-item>
              <el-menu-item index="2-5" >
                <i class="el-icon-circle-plus"></i>
                <span>添加相册</span>
              </el-menu-item>
              <el-menu-item index="2-6" >
                <i class="el-icon-circle-plus"></i>
                <span>相册列表</span>
              </el-menu-item>
            </el-submenu>
            <!-- 权限管理-->
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>临时页面</span>
              </template>
              <el-menu-item index="2-1" >
                <i class="el-icon-circle-plus"></i>
                <span>添加管理员</span>
              </el-menu-item>
              <el-menu-item index="2-2" >
                <i class="el-icon-s-operation"></i>
                <span>管理员列表</span>
              </el-menu-item>
              <el-menu-item index="2-3" >
                <i class="el-icon-circle-plus"></i>
                <span>添加品牌</span>
              </el-menu-item>
              <el-menu-item index="2-4" >
                <i class="el-icon-s-operation"></i>
                <span>品牌列表</span>
              </el-menu-item>
              <el-menu-item index="2-5" >
                <i class="el-icon-circle-plus"></i>
                <span>添加相册</span>
              </el-menu-item>
              <el-menu-item index="2-6" >
                <i class="el-icon-circle-plus"></i>
                <span>相册列表</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 下半区域的右侧主体 -->
        <el-main class="layout-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.layout-header {
  background: #1684b0
}

.layout-header h1 {
  color: #fff;
  line-height: 60px;
}

.layout-body {
  position: absolute;
  right: 0px;
  left: 0px;
  top: 60px;
  bottom: 0px

}

.layout-aside {
  background: #222;
}

.layout-aside i {
  color: #fff !important;
}

.layout-main {

}

.el-menu-item.is-active{
  background: #2c3e50!important;
}

</style>

<script>

</script>
