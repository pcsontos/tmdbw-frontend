<script setup>
import {ref} from 'vue'
import {Search} from '@element-plus/icons-vue'

const searchFor = ref('')

const search = () => {
  console.log(`searching... ${searchFor.value}`)
}

</script>
<template>
  <el-row>
    <el-col :span="16">
      <el-input
          v-model="searchFor"
          placeholder="Movie Title (e.g. The Godfather)"
          class="input-with-select"
          clearable
          @keyup.enter="search"
      >
        <template #append>
          <el-button :icon="Search" @click="search"></el-button>
        </template>
      </el-input>
    </el-col>
  </el-row>

</template>