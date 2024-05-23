<template>
  <main class="bg-gray p-4 rounded-lg max-w-screen-lg">
    <div class="flex jobs-center justify-between mb-4">
      <h1 class="text-20 lg:text-2xl font-semibold">Experiences</h1>
      <JobFormModal :job-form="jobForm" @add-experience="addExperience" />
    </div>
    <!-- experience cards -->
    <div class="flex flex-col gap-y-4">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="flex jobs-start justify-between gap-x-4 pb-4 relative group"
        :class="{ 'border-b border-gray-200': job.id !== jobs.length - 1 }"
      >
        <div class="w-16 h-16">
          <img
            class="w-full h-full object-cover rounded-md"
            src="https://srv.carbonads.net/static/30242/676f94fdaf1e8ed0c1efa0d1d9930081e9b4c599"
            :alt="job.company"
          />
        </div>
        <ul class="w-full">
          <li class="font-semibold">{{ job.jobTitle }}</li>
          <li class="text-14">{{ job.company }}</li>
          <li class="text-14 text-gray-100">
            {{ job.startDate.month + " " + job.startDate.year }} -
            {{ job.endDate.month + " " + job.endDate.year }}
          </li>
          <li class="text-14 text-gray-100">{{ job.location }}, {{ job.type }}</li>
          <li class="text-14 my-2">{{ job.description }}</li>
          <li>
            <div class="flex items-center flex-wrap gap-2">
              <div class="w-4 h-4">
                <img
                  class="w-full h-full object-cover"
                  src="/icons/diamond.svg"
                  alt="skill icon"
                />
              </div>
              <div v-for="skill in job.skills" class="capitalize">{{ skill }}</div>
            </div>
          </li>
        </ul>

        <div
          class="w-10 h-10 p-2 absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
          @click="handleDelete(job.id)"
        >
          <img
            class="w-full h-full object-cover"
            src="/icons/trash.svg"
            alt="delete icon"
          />
        </div>
      </div>
    </div>
    <!-- if no data found -->
    <div class="w-full max-w-sm h-auto mx-auto" v-show="!jobs.length">
      <h2 class="text-lg font-medium text-center">NO data found</h2>
      <img
        class="w-full h-full object-cover"
        src="/images/nodata.webp"
        alt="no data found"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JobFormModal from "@/components/Jobs/Modal.vue";
import type { IJobForm } from "@/types";

const initialJobForm = () => ({
  id: Date.now(),
  startDate: { month: "", year: "" },
  endDate: { month: "", year: "" },
  jobTitle: "",
  company: "",
  location: "",
  type: "",
  skills: [],
  description: "",
});

const jobForm = ref<IJobForm>(initialJobForm());

const jobs = ref<IJobForm[]>([]);

const addExperience = () => {
  jobs.value.push({ ...jobForm.value });
  jobForm.value = initialJobForm(); // Reset the form
};
function handleDelete(id: number | string) {
  const filteredJobs = jobs.value.filter((job) => job.id != id);
  jobs.value = filteredJobs;
}
</script>
