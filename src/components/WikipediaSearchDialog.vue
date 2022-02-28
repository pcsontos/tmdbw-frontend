<script setup>

import { computed, ref } from 'vue'

const listDialog = ref(false)

const props = defineProps({
  visible: { type: Boolean, required: true, default: false }
})
const emit = defineEmits(['closed'])


</script>
<template>
  <el-dialog
    :model-value="props.visible"
    @closed="emit('closed')"
    title="Wikipedia page"
  >
    <template #default>
      <el-dialog
        v-model="listDialog"
        append-to-body
        title="Select page"
        width="30%"
      >
      </el-dialog>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="listDialog = true"
        >
          open the inner Dialog
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
