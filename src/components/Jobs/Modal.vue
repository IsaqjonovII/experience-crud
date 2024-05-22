<template>
  <Dialog v-model:open="isModalOpen">
    <DialogTrigger as-child>
      <button
        class="w-12 h-12 p-3 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <img class="w-full h-full object-cover" src="/icons/plus.svg" alt="plus icon" />
      </button>
    </DialogTrigger>
    <DialogContent
      class="w-full lg:max-w-screen-md h-svh max-h-[650px] bg-gray opacity-100 p-0"
    >
      <DialogHeader class="border-b border-gray-200">
        <DialogTitle class="p-5">Add experience</DialogTitle>
      </DialogHeader>
      <div class="h-full overflow-auto px-5">
        <div class="flex items-center bg-blue px-5 py-2">
          <div>
            <p>Notify network</p>
            <p class="text-gray-100">
              Turn on to notify your network of key profile changes (such as new job) and
              work anniversaries. Updates can take up to 2 hours. Learn more about
              <a href="#" class="text-blue-100">sharing profile changes.</a>
            </p>
          </div>
          <Switch id="notify-network" />
        </div>
        <div class="text-14 text-gray-100 my-4">* Indicates required</div>
        <CustomForm :job-form="jobForm" />
      </div>
      <DialogFooter class="flex justify-end px-5 py-2 border-t border-gray-200">
        <Button
          type="button"
          variant="primary"
          class="bg-blue-100 text-black px-4 py-2 rounded-full"
          @click="handleSubmit"
        >
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import CustomForm from "@/components/Jobs/Form.vue";
import type { IJobForm } from "@/types";

interface Props {
  jobForm: IJobForm;
}

defineProps<Props>();
const emit = defineEmits<{ "add-experience": [] }>();

const isModalOpen = ref(false);

const handleSubmit = () => {
  emit("add-experience");
  isModalOpen.value = false;
};
</script>
