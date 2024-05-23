<template>
  <TagsInput v-model="model" class="bg-gray">
    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag" class="bg-blue">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput :placeholder="placeholder ?? 'Add skills...'" />
  </TagsInput>
</template>

<script setup lang="ts">
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";

defineProps<{ tags: string[]; placeholder?: string }>();
const model = defineModel();
</script>
