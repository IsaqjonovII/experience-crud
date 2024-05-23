<template>
  <Select v-model="model">
    <SelectTrigger class="bg-gray">
      <SelectValue class="text-gray-100" :placeholder />
    </SelectTrigger>
    <SelectContent class="bg-gray text-white">
      <SelectGroup>
        <SelectItem
          v-for="option in options"
          :key="option.value"
          :value="String(option.value)"
          class="bg-gray"
        >
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  options: {
    value: string | number;
    label: string | number;
  }[];
  placeholder: string;
}
defineProps<Props>();
const model = defineModel();
</script>
