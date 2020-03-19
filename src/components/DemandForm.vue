<template>
    <div class="relative">
        <loading-transition :loading="loading" />
        <callout-message
            variant="success"
            v-if="resultFormStatus === 'success' && resultMessageVisible"
            @close="handleResultMessageClose"
            class="w-full mb-6"
        >
            Děkujeme za odeslání formuláře.
        </callout-message>
        <callout-message
            variant="error"
            v-if="resultFormStatus === 'error' && resultMessageVisible"
            @close="handleResultMessageClose"
            class="mb-6"
        >
            Formulář se nepodařilo odeslat. Zkuste to prosím později…
        </callout-message>

        <form name="demand-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
            <div class="flex flex-wrap">
                <div class="w-full">
                    <input-text
                        class="mb-4 pt-2"
                        label="Jméno a příjmení"
                        v-model="fields.fullname"
                        id="fullname"
                        :errors="errorFields.fullname"
                    >
                    </input-text>
                </div>
                <div class="w-full mt-2 md:pr-4 md:w-12/24">
                    <input-text
                        class="mb-4"
                        label="E-mail"
                        v-model="fields.email"
                        id="email"
                        :errors="errorFields.email"
                    >
                    </input-text>
                </div>
                <div class="w-full mt-2 md:w-12/24">
                    <input-text
                        class="mb-4"
                        label="Telefon"
                        v-model="fields.phone"
                        id="phone"
                    >
                    </input-text>
                </div>
                <div class="w-full mt-2 mb-4">
                    <input-textarea
                        label="Popište nám prosím váš projekt nebo potřeby…"
                        v-model="fields.message"
                        rows="4"
                        id="message"
                    />
                </div>
                <div class="w-full mb-4 md:mb-6 relative">
                    <label for="files"
                           class="group cursor-pointer flex items-center justify-between w-full text-sm placeholder-gray-200 border border-solid form-input rounded xl:h-13 xl:text-base"
                           :class="[fields.files ? 'text-black' : 'text-gray-200', errorFields.files && errorFields.files.messages ? 'border-red-500' : 'border-gray-200' ]"
                    >
                        <span class="p-3">
                            {{ fields.files ? `Soubory přiloženy (${fields.files.length})` : 'Přiložit soubory (max. 10MB)' }}
                        </span>
                        <span class="self-stretch bg-gray-100 h-full inline-flex items-center rounded-r text-gray-600 p-4 group-hover:text-gray-900 transition duration-150 ease-in-out">Vybrat...</span>
                    </label>
                    <input type="file" id="files" name="files" class="absolute w-full inset-y-0 opacity-0" @change="onFileChange" multiple>
                    <div class="text-left text-red-600 text-sm" v-if="errorFields.files && errorFields.files.messages">
                       <div v-for="error in errorFields.files.messages">{{ error }}</div>
                    </div>
                    <div v-for="(filename, index) in staticFileFields" :key="filename" class="hidden">
                        <label :for="filename">Soubor {{ index }} </label>
                        <input type="file" :name="filename" :id="filename" >
                    </div>
                </div>
                <div class="w-full">
                    <input-text
                        class="mb-4"
                        label="Představu o rozpočtu"
                        v-model="fields.budget"
                        id="budget"
                        name="budget"
                    >
                    </input-text>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full mb-8 text-sm md:w-15/24 lg:w-16/24 xl:w-17/24 md:pr-8 xl:text-base">
                    Můžete také zavolat: <strong>+420&nbsp;775&nbsp;300&nbsp;500</strong><span class="md:block"> (PO-PÁ 8-17).</span>
                </div>
                <div class="w-full mb-4 md:w-9/24 lg:w-8/24 xl:w-7/24">
                    <div class="flex justify-center md:justify-end">
                        <project-button tag="button">Odeslat</project-button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  import axios from "axios";
  import EmailValidator from 'email-validator';

  import {toFormData} from './utils';
  import InputText from "./Input/InputText";
  import ProjectButton from './ProjectButton'
  import CalloutMessage from './CalloutMessage'
  import InputTextarea from "./Input/InputTextarea";
  import LoadingTransition from './LoadingTransition.vue';

  export default {
      components: {
          InputText,
          InputTextarea,
          ProjectButton,
          CalloutMessage,
          LoadingTransition
      },
      data() {
          return {
              errorFields: {},
              resultFormStatus: null,
              resultMessageVisible: false,
              loading: false,
              fields: {
                  fullname: '',
                  email: '',
                  phone: '',
                  message: '',
                  files: null,
                  budget: null,
              },
              staticFileFields: Array.from({length: 10}, (v, i) => 'files' + i),
          }
      },
      methods: {
          onFileChange(e) {
              const files = e.target.files || e.dataTransfer.files;
              if (files && files.length) {
                  this.fields.files = files;
              }
          },
          encode(data) {
              return toFormData(data);
          },
          validate() {
              this.errorFields = {};
              const {fullname, email, files} = this.fields;
              if (!fullname || /^\s+$/.test(fullname)) {
                  this.$set(this.errorFields, 'fullname', {messages: ['Hodnota musí být vyplněná']})
              }
              if (!email) {
                  this.$set(this.errorFields, 'email', {messages: ['Hodnota musí být vyplněná']})
              } else if (!EmailValidator.validate(email)) {
                  this.$set(this.errorFields, 'email', {messages: ['E-mail není ve správném formátu']})
              }
              if (files && files.length > 10) {
                this.$set(this.errorFields, 'files', {messages: ['Je možné současně nahrát pouze 10 souborů']})
              }
              return Object.entries(this.errorFields).length === 0
          },
          handleSubmit() {
              if (this.validate()) {
                  this.loading = true;
                  const axiosConfig = {
                      header: {"Content-Type": "multipart/form-data"}
                  };
                  axios.post(
                      "/",
                      this.encode({
                          "form-name": "demand-form",
                          ...this.fields
                      }),
                      axiosConfig
                  ).then((response) => {
                      if (response && response.status === 200) {
                          this.resultFormStatus = 'success';
                          this.fields = {};
                      } else {
                          this.resultFormStatus = 'error';
                      }
                  }).catch(() => {
                      this.resultFormStatus = 'error';
                  }).then(() => {
                      this.resultMessageVisible = true;
                      this.loading = false;
                  });
              }
          },
          handleResultMessageClose() {
              this.resultMessageVisible = false;
          },
      }
  }
</script>
