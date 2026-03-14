<script setup lang="ts">
import Section from './SectionWrapper.vue';
import { ref } from 'vue';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const isSubmitting = ref(false);
const submitMessage = ref('');

async function handleSubmit() {
  isSubmitting.value = true;
  submitMessage.value = '';

  try {
    // TODO: Send via Resend
    console.log('Form data:', formData.value);
    submitMessage.value = 'Thank you! We\'ll be in touch soon.';
    
    // Reset form
    formData.value = { name: '', email: '', phone: '', message: '' };
  } catch (error) {
    submitMessage.value = 'Error submitting form. Please try again.';
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <Section id="Contact">
    <div class="flex flex-col items-center justify-center w-full mx-auto max-w-4xl mt-20">
      
      <form @submit.prevent="handleSubmit" class="w-full max-w-md border border-gray-200/50 p-6 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold text-white mb-8 text-center">Book Us</h1>
        <div class="mb-6">
          <label for="name" class="block text-slate-400 text-xs font-semibold mb-1">Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div class="mb-6">
          <label for="email" class="block text-slate-400 text-xs font-semibold mb-1">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div class="mb-6">
          <label for="phone" class="block text-slate-400 text-xs font-semibold mb-1">Phone (+36)</label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div class="mb-6">
          <label for="message" class="block text-slate-400 text-xs font-semibold mb-1">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="5"
            class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full px-6 py-3 bg-sky-600 border border-gray-200/50 shadow-sky-600 hover:shadow-lg hover:-translate-y-0.5 disabled:bg-gray-600 text-gray-950 font-semibold rounded-xl transition-colors"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Inquiry' }}
        </button>

        <p v-if="submitMessage" class="mt-4 text-center text-slate-200">{{ submitMessage }}</p>
      </form>
    </div>
  </Section>
</template>