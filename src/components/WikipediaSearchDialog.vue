<script setup>

import { ref } from 'vue'
import { searchMovie, searchPageByPageId } from "@/rest-operations";

const listDialogVisible = ref(false)
const movies = ref(null)
const wikipage = ref(null)
const loading = ref({ listDialog: false, mainDialog: false })


const props = defineProps({
  visible: { type: Boolean, required: true, default: false },
  search: { type: String, required: true, default: '' }
})
const emit = defineEmits(['closed'])

const onOpened = async () => {
  console.log(`Search on Wikipedia... ${props.search}`)

  wikipage.value = null
  movies.value = null

  listDialogVisible.value = true
  loading.value.listDialog = true

  try {
    const { data } = await searchMovie(props.search)
    movies.value = data.query.search
  } catch (e) {
    console.log(e)
  } finally {
    loading.value.listDialog = false
  }
}

const selectMovie = async (currentRow) => {
  wikipage.value = null
  listDialogVisible.value = false
  loading.value.mainDialog = true
  const pageid = currentRow.pageid;
  if (!pageid) {
    return
  }

  try {
    const { data } = await searchPageByPageId(pageid)
    wikipage.value = data.query.pages[pageid]
  } catch (e) {
    console.log(e)
  } finally {
    loading.value.mainDialog = false
  }
}

</script>
<template>
  <el-dialog
    :model-value="props.visible"
    title="Wikipedia page"
    @closed="emit('closed')"
    @opened="onOpened"
  >
    <template #default>
      Search term: <pre>{{ props.search }}</pre>
      <template v-if="wikipage">
        <el-link
          :href="wikipage.fullurl"
          target="_blank"
          type="warning"
        >GOTO Wikipage
        </el-link>

        <div v-html="wikipage.extract" />
      </template>

      <el-dialog
        v-model="listDialogVisible"
        append-to-body
        title="Select page"
        width="50%"

      >
        <el-table
          v-loading="loading.listDialog"
          ref="singleTableRef"
          :data="movies"
          highlight-current-row
          style="width: 100%"
          table-layout="dixed"
          @current-change="selectMovie"
        >
          <el-table-column type="index" />
          <el-table-column
            label="PageId"
            prop="pageid"
            width="100"
          />
          <el-table-column
            label="Snippet"
            min-width="200"
            prop="snippet"
          >
            <template #default="scope">
              <div v-html="scope.row.snippet"></div>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="listDialogVisible = true"
        >
          Open Wikipedia pages list
        </el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
