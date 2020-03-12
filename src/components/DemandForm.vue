<template>
    <div>
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
                        class="mb-4"
                        label="Jméno a příjmení"
                        v-model="fields.fullname"
                        id="fullname"
                        :errors="errorFields.fullname"
                    >
                    </input-text>
                </div>
                <div class="w-full md:pr-4 md:w-12/24">
                    <input-text
                        class="mb-4"
                        label="E-mail"
                        v-model="fields.email"
                        id="email"
                        :errors="errorFields.email"
                    >
                    </input-text>
                </div>
                <div class="w-full md:w-12/24">
                    <input-text
                        class="mb-4"
                        label="Telefon"
                        v-model="fields.phone"
                        id="phone"
                    >
                    </input-text>
                </div>
                <div class="w-full mb-4 xl:mb-8">
                    <input-textarea
                        label="Popište nám prosím váš projekt nebo potřeby…"
                        v-model="fields.message"
                        rows="4"
                        id="message"
                    />
                </div>
                <div class="w-full">
                    <label for="files"
                           class="flex items-center w-full p-3 mb-4 text-sm placeholder-gray-200 border border-solid form-input border-gray-200 rounded xl:h-13 xl:text-base md:mb-6 xl:mb-8"
                           :class="[fields.files ? 'text-black' : 'text-gray-200']"
                    >
                        {{ fields.files ? `Soubory přiloženy (${fields.files.length})` : 'Přiložit soubory (max. 10MB)' }}
                    </label>
                    <input type="file" id="files" class="absolute invisible" @change="onFileChange" multiple>
                </div>
                <div class="w-full">
                    <input-text
                        class="mb-4"
                        label="Představu o rozpočtu"
                        v-model="fields.budget"
                        id="budget"
                        name="files"
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
  import {toFormData} from './utils';
  import InputText from "./Input/InputText";
  import ProjectButton from './ProjectButton'
  import CalloutMessage from './CalloutMessage'
  import InputTextarea from "./Input/InputTextarea";

  export default {
      components: {
          InputText,
          InputTextarea,
          ProjectButton,
          CalloutMessage
      },
      data() {
          return {
              errorFields: {},
              resultFormStatus: null,
              resultMessageVisible: false,
              fields: {
                  fullname: '',
                  email: '',
                  phone: '',
                  message: '',
                  files: null,
                  budget: null,
              }
          }
      },
      methods: {
          onFileChange(e) {
              const files = e.target.files || e.dataTransfer.files;
              if (files.length) {
                  this.fields.files = files;
              }
          },
          encode(data) {
              return toFormData(data);
          },
          validate() {
              this.errorFields = {};
              const {fullname, email} = this.fields;
              if (!fullname) {
                  this.$set(this.errorFields, 'fullname', {messages: ['Hodnota musí být vyplněná']})
              }
              if (!email) {
                  this.$set(this.errorFields, 'email', {messages: ['Hodnota musí být vyplněná']})
              }
              return Object.entries(this.errorFields).length === 0
          },
          handleSubmit() {
              if (this.validate()) {
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
                      } else {
                          this.resultFormStatus = 'error';
                      }
                  }).catch(() => {
                      this.resultFormStatus = 'error';
                  }).then(() => {
                      this.resultMessageVisible = true;
                  });
              }
          },
          handleResultMessageClose() {
              this.resultMessageVisible = false;
          },
      }
  }
</script>
