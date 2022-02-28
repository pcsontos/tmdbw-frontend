<script setup>
import { computed, reactive, ref } from "vue"
import { Search } from "@element-plus/icons-vue"
import { SEARCH_MOVIES } from "@/graphql-operations"
import { useQuery, useResult } from "@vue/apollo-composable"
import { searchMovie } from '@/rest-operations'
import WikipediaSearchDialog from './WikipediaSearchDialog'

const searchFor = ref("")
const dialogVisible = ref(false)

const variables = ref({
  query: searchFor.value,
})
const searchQuery = useQuery(SEARCH_MOVIES, variables)
const searchMovies = useResult(
  searchQuery.result,
  [],
  (data) => data?.searchMovies
)

const state = reactive({
  movies: computed(() => {
    return searchMovies.value
  }),
})

const showDialog = () => {
  dialogVisible.value = true
}

const closedDialog = () => {
  dialogVisible.value = false
}

const search = () => {
  console.log(`searching... ${searchFor.value}`)
  variables.value = { query: searchFor.value }
}

const searchOnWiki = async (name) => {
  console.log(`Search on Wikipedia... ${name}`)
  try {
    const { data } = await searchMovie(name)
    console.log(data.query.search)
    showDialog()
  } catch (e) {
    console.log(e)
  }
}

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options)
  return dateTimeFormat.format(new Date(date))
}
</script>
<template>
  <div>
    <el-button
      type="text"
      @click="showDialog()"
    >open the outer Dialog
    </el-button
    >
    <el-row>
      <el-col :span="16">
        <el-input
          v-model="searchFor"
          clearable
          placeholder="Movie Title (e.g. The Godfather)"
          @keyup.enter="search"
        >
          <template #append>
            <el-button
              :icon="Search"
              @click="search"
            ></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="state.movies"
        :table-layout="'auto'"
        height="768px"
        stripe
        style="width: 100%"
      >
        <el-table-column
          label="ID"
          prop="id"
          width="100"
        />
        <el-table-column
          label="Name"
          prop="name"
          width="180"
        >
          <template #default="scope">
            <el-button
              type="text"
              @click="searchOnWiki(scope.row.name)"
            >
              {{ scope.row.name }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="Overview"
          prop="overview"
          width="600"
        />
        <el-table-column
          label="Release date"
          prop="releaseDate"
          width="100"
        >
          <template #default="scope">
            {{ formatDate(scope.row.releaseDate) }}
          </template>
        </el-table-column>
        <el-table-column
          label="Score"
          prop="score"
          width="100"
        />
        <el-table-column
          label="Votes"
          prop="votes"
          width="100"
        />
      </el-table>
    </el-row>
    <wikipedia-search-dialog
      :visible="dialogVisible"
      @closed="closedDialog"
    ></wikipedia-search-dialog>

  </div>
</template>
