<template>
    <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
        <div class="flex flex-wrap">
            <div class="w-full">
                <input-text
                        class="mb-4"
                        label="Jméno a příjmení"
                        v-model="fields.fullname"
                        id="name"
                        :errors="errorFields.fullname"
                >
                </input-text>
            </div>
            <div class="w-full md:pr-4 md:w-12/24">
                <input-text
                        class="mb-4"
                        label="Email"
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
            <div class="w-full">
                <textarea class="w-full px-3 pt-3 mb-4 text-sm placeholder-gray-200 border border-gray-200 form-textarea rounded xl:text-base xl:mb-8" rows="4" placeholder="Popište nám prosím váš projekt nebo potřeby…" v-model="fields.description"></textarea>
            </div>
            <div class="w-full">
                <label for="exampleFileUpload"
                       class="flex items-center w-full p-3 mb-4 text-sm placeholder-gray-200 border border-solid form-input border-gray-200 rounded xl:h-13 xl:text-base md:mb-6 xl:mb-8"
                       :class="[fields.files ? 'text-black' : 'text-gray-200']"
                >
                     {{ fields.files ? `Soubory přiloženy (${fields.files.length})` : 'Přiložit soubory (max. 10MB)' }}
                </label>
                <input type="file" id="exampleFileUpload" class="absolute invisible" @change="onFileChange" multiple>
            </div>
            <div class="w-full">
                <input-text
                        class="mb-4"
                        label="Představu o rozpočtu"
                        v-model="fields.budget"
                        id="files"
                >
                </input-text>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="w-full mb-4 text-sm md:w-17/24 xl:w-18/24 md:pr-8 xl:text-base">
                Můžete také zavolat: <strong>+420&nbsp;775&nbsp;300&nbsp;500</strong><span class="md:block"> (PO-PÁ 8-17).</span>
            </div>
            <div class="w-full mb-4 md:w-7/24 xl:w-6/24">
                <button class="w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 ease-in-out rounded-full hover:shadow-lg bg-gradient-r-blue-green active">Odeslat</button>
            </div>
        </div>
    </form>
</template>

<script>
  import axios from "axios";
  import { toFormData } from './utils';
  import InputText from  "./Input/InputText";

  export default {
    components: {
      InputText
    },
    data () {
      return {
        errorFields: {},
        fields: {
          fullname: '',
          email: '',
          phone: '',
          description: '',
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
        const { fullname, email } = this.fields;
        if (!fullname) {
          this.$set(this.errorFields, 'fullname', { messages: ['Hodnota musí být vyplněná'] })
        }
        if (!email) {
          this.$set(this.errorFields, 'email', { messages: ['Hodnota musí být vyplněná'] })
        }
        return Object.entries(this.errorFields).length === 0
      },
      handleSubmit () {
        if (this.validate()) {
          const axiosConfig = {
            header: { "Content-Type": "multipart/form-data" }
          };
          axios.post(
            "/",
            this.encode({
              "form-name": "contact-form",
              ...this.fields
            }),
            axiosConfig
          );
        }
      }
    }
  }
</script>
