<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size: 16px;">
      <el-breadcrumb-item :to="{ path: '/' }">
        <i class="el-icon-s-promotion"></i> 后台管理
      </el-breadcrumb-item>
      <el-breadcrumb-item>相册列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-divider></el-divider>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="description" label="简介"></el-table-column>
      <el-table-column prop="sort" label="排序序号" width="180"></el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    loadAlbumList() {
      let url = 'http://localhost:9080/albums';
      console.log('url = ' + url);

      this.axios.get(url).then((response) => {
        let jsonResult = response.data;
        if (jsonResult.state == 20000) {
          this.tableData = jsonResult.data;
        }
      });
    }
  },
  mounted() {
    this.loadAlbumList();
  }
}
</script>