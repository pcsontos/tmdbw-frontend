<script setup>
import {ref} from 'vue'
import {Search} from '@element-plus/icons-vue'

const searchFor = ref('')

const search = () => {
  console.log(`searching... ${searchFor.value}`)
}

</script>
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="mt-4">
        <el-input
            v-model="searchFor"
            placeholder="Movie Title (e.g. The Godfather)"
            class="input-with-select"
            clearable
        >
          <template #append>
            <el-button :icon="Search" @click="search"></el-button>
          </template>
        </el-input>
      </div>
    </el-col>
  </el-row>

</template>