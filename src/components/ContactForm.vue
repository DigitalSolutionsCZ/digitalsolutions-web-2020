<template>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
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
            <div class="w-full mt-4">
                <textarea class="w-full form-textarea px-3 pt-3 mb-4 text-sm placeholder-gray-200 border border-gray-200 rounded xl:text-base xl:mb-8" rows="4" v-model="fields.description" placeholder="Popište nám prosím váš projekt nebo potřeby…"></textarea>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <project-button tag="button">Odeslat</project-button>
        </div>
    </form>
</template>

<script>
  import axios from "axios";
  import InputText from  "./Input/InputText";
  import ProjectButton from '../components/ProjectButton'

  export default {
    components: {
      InputText,
      ProjectButton
    },
    data () {
      return {
        errorFields: {},
        fields: {
          fullname: '',
          email: '',
          phone: '',
          description: ''
        }
      }
    },
    methods: {
      encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
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
            header: { "Content-Type": "application/x-www-form-urlencoded" }
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
