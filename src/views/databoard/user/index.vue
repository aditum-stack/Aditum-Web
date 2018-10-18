<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>

      <!--userId-->
      <el-table-column label='ID' width="95" align="center">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>

      <!--userAccountName-->
      <el-table-column label="用户名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.communityId}}</span>
        </template>
      </el-table-column>

      <!--userName-->
      <el-table-column label="昵称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.communityName}}</span>
        </template>
      </el-table-column>

      <!--userSex-->
      <el-table-column label="性别" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.communityAddress}}</span>
        </template>
      </el-table-column>

      <!--userEmail-->
      <el-table-column label="邮箱" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.communityLon}}</span>
        </template>
      </el-table-column>

      <!--userLocation-->
      <el-table-column label="所在位置" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.communityLat}}</span>
        </template>
      </el-table-column>

      <!--userPhoneNumber-->
      <el-table-column label="电话号码" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.customerId}}</span>
        </template>
      </el-table-column>

      <!--userGmtCreate-->
      <el-table-column label="注册时间" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.groupId}}</span>
        </template>
      </el-table-column>

      <!--userLastLogin-->
      <el-table-column label="最后登录" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
      </el-table-column>

      <!--userLoginCount-->
      <el-table-column label="访问次数" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.deviceSum}}</span>
        </template>
      </el-table-column>

      <!--isUserDeleted-->
      <el-table-column label="启用状态" width="110" align="center" class-name="status-col">
        <template slot-scope="scope">
          <el-tag :type="scope.row.deviceOnline | statusFilter">{{scope.row.isUserDeleted}}</el-tag>
        </template>
      </el-table-column>

      <!--userRole-->
      <el-table-column label="权限" width="100" align="center" class-name="status-col">
        <template slot-scope="scope">
          <el-tag :type="scope.row.deviceOffline | statusFilter">{{scope.row.userRole}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Actions" min-width="200" align="center" prop="created_at">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <router-link>
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { getCommunityList } from '@/api/databoard'

  export default {
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getCommunityList().then(response => {
          console.log('res' + response.data.data)
          this.list = response.data.data
          this.listLoading = false
        })
      }
    }
  }
</script>
