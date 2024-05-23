<template>
  <div>
    <Form class="flex flex-col gap-4">
      <FormField name="jobTitle">
        <FormItem>
          <FormLabel>Title*</FormLabel>
          <FormControl>
            <Input
              v-model="form.jobTitle"
              class="bg-gray"
              placeholder="Ex: Sr. Web developer"
            />
          </FormControl>
          <InputMessage v-if="validationErrors.jobTitle" class="text-red-500">
            {{ validationErrors.jobTitle }}
          </InputMessage>
        </FormItem>
      </FormField>
      <FormField name="type">
        <FormItem>
          <FormLabel>Employment type*</FormLabel>
          <CustomSelect
            v-model="form.type"
            placeholder="Please select"
            :options="employmentTypes"
          />
          <InputMessage v-if="validationErrors.type" class="text-red-500">
            {{ validationErrors.type }}
          </InputMessage>
        </FormItem>
      </FormField>
      <FormField name="company">
        <FormItem>
          <FormLabel>Company*</FormLabel>
          <FormControl>
            <Input v-model="form.company" class="bg-gray" placeholder="Ex: Amazon" />
          </FormControl>
          <InputMessage v-if="validationErrors.company" class="text-red-500">
            {{ validationErrors.company }}
          </InputMessage>
        </FormItem>
      </FormField>
      <FormField name="location">
        <FormItem>
          <FormLabel>Location*</FormLabel>
          <FormControl>
            <Input
              v-model="form.location"
              class="bg-gray"
              placeholder="Ex: Tashkent, Uzbekistan"
            />
          </FormControl>
          <InputMessage v-if="validationErrors.location" class="text-red-500">
            {{ validationErrors.location }}
          </InputMessage>
        </FormItem>
      </FormField>
      <div class="flex items-center justify-between gap-4">
        <FormField name="startDate">
          <FormItem class="w-full">
            <FormLabel>Month*</FormLabel>
            <CustomSelect
              v-model="form.startDate.month"
              placeholder="Please select"
              :options="months"
            />
            <InputMessage v-if="validationErrors.startDate" class="text-red-500">
              {{ validationErrors.startDate }}
            </InputMessage>
          </FormItem>
        </FormField>
        <FormField name="startDate">
          <FormItem class="w-full">
            <FormLabel>Year*</FormLabel>
            <CustomSelect
              v-model="form.startDate.year"
              :options="years"
              placeholder="Please select"
            />
            <InputMessage v-if="validationErrors.startDate" class="text-red-500">
              {{ validationErrors.startDate }}
            </InputMessage>
          </FormItem>
        </FormField>
      </div>
      <div class="flex items-center justify-between gap-4">
        <FormField name="startDate">
          <FormItem class="w-full">
            <FormLabel>Month*</FormLabel>
            <CustomSelect
              v-model="form.endDate.month"
              placeholder="Please select"
              :options="months"
            />
            <InputMessage v-if="validationErrors.endDate" class="text-red-500">
              {{ validationErrors.endDate }}
            </InputMessage>
          </FormItem>
        </FormField>
        <FormField name="startDate">
          <FormItem class="w-full">
            <FormLabel>Year*</FormLabel>
            <CustomSelect
              v-model="form.endDate.year"
              :options="years"
              placeholder="Please select"
            />
            <InputMessage v-if="validationErrors.endDate" class="text-red-500">
              {{ validationErrors.endDate }}
            </InputMessage>
          </FormItem>
        </FormField>
      </div>
      <FormField name="description">
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea v-model="form.description" class="bg-gray" />
          </FormControl>
        </FormItem>
      </FormField>
      <FormField name="skills">
        <FormItem>
          <FormLabel> Skills </FormLabel>
          <CustomTags v-model="form.skills" :tags="form.skills" />
        </FormItem>
      </FormField>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { unref } from "vue";
import { Input } from "@/components/ui/input"; // Adjust import according to your setup
import { Textarea } from "@/components/ui/textarea";
import { Form, FormItem, FormControl, FormField, FormLabel } from "@/components/ui/form";
import CustomSelect from "@/components/Form/Select.vue";
import CustomTags from "@/components/Form/Tags.vue";

import { months, years, employmentTypes } from "@/static";

import type { IJobForm } from "@/types";

interface Props {
  jobForm: IJobForm;
  validationErrors: Record<string, string>;
}

const { jobForm } = defineProps<Props>();
const form = unref(jobForm);
</script>
