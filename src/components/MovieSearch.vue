<script setup>
import {computed, reactive, ref} from 'vue'
import {Search} from '@element-plus/icons-vue'
import {SEARCH_MOVIES} from '@/graphql-operations'
import {useQuery, useResult} from '@vue/apollo-composable'

const searchFor = ref('')
const variables = ref({
  query: searchFor.value
})
const searchQuery = useQuery(SEARCH_MOVIES, variables)
const searchMovies = useResult(searchQuery.result, [], (data) => data?.searchMovies)

const state = reactive({
  movies: computed(() => {
    return searchMovies.value
  })
})

const search = () => {
  console.log(`searching... ${searchFor.value}`)
  variables.value = { query: searchFor.value }
}

</script>
<template>
  <div>
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
    <el-row>
    <pre>
      Movies:
      ------
      {{ state.movies }}
    </pre>
    </el-row>
  </div>
</template>