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
        </FormItem>
      </FormField>
      <FormField name="type">
        <FormItem>
          <FormLabel>Employment type*</FormLabel>
          <Select v-model="form.type">
            <SelectTrigger class="bg-gray">
              <SelectValue class="text-gray-100" placeholder="Please select" />
            </SelectTrigger>
            <SelectContent class="bg-gray text-white">
              <SelectGroup>
                <SelectItem
                  v-for="employmentType in employmentTypes"
                  :key="employmentType.value"
                  :value="employmentType.value"
                  class="bg-gray"
                >
                  {{ employmentType.label }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      </FormField>
      <FormField name="company">
        <FormItem>
          <FormLabel>Company*</FormLabel>
          <FormControl>
            <Input v-model="form.company" class="bg-gray" placeholder="Ex: Amazon" />
          </FormControl>
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
        </FormItem>
      </FormField>
      <div class="flex items-center justify-between gap-4">
        <FormField name="startDate">
          <FormItem class="w-full">
            <FormLabel>Months*</FormLabel>
            <Select v-model="form.startDate.month">
              <SelectTrigger class="bg-gray">
                <SelectValue class="text-gray-100" placeholder="Please select" />
              </SelectTrigger>
              <SelectContent class="bg-gray text-white">
                <SelectGroup>
                  <SelectItem
                    v-for="month in months"
                    :key="month"
                    :value="month"
                    class="bg-gray"
                  >
                    {{ month }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormItem>
        </FormField>
        <FormField name="endDate">
          <FormItem class="w-full">
            <FormLabel>Year*</FormLabel>
            <Select v-model="form.startDate.year">
              <SelectTrigger class="bg-gray">
                <SelectValue class="text-gray-100" placeholder="Please select" />
              </SelectTrigger>
              <SelectContent class="bg-gray text-white">
                <SelectGroup>
                  <SelectItem
                    v-for="year in years"
                    :key="year"
                    :value="year + ''"
                    class="bg-gray"
                  >
                    {{ year }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
          <TagsInput v-model="form.skills" class="bg-gray">
            <TagsInputItem
              v-for="item in form.skills"
              :key="item"
              :value="item"
              class="bg-blue"
            >
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>
            <TagsInputInput placeholder="Add skills..." />
          </TagsInput>
        </FormItem>
      </FormField>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { unref } from "vue";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormItem, FormControl, FormField, FormLabel } from "@/components/ui/form";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

import { months, years, employmentTypes } from "@/static";

import type { IJobForm } from "@/types";

interface Props {
  jobForm: IJobForm;
}
const { jobForm } = defineProps<Props>();

const form = unref(jobForm);
</script>
