<template>
    <div class="relative">
        <loading-transition :loading="loading" />
        <callout-message
            v-if="resultFormStatus === 'success' && resultMessageVisible"
            variant="success"
            @close="handleResultMessageClose"
            class="w-full mb-6"
        >
            <span>Děkujeme za odeslání formuláře.</span>
        </callout-message>
        <callout-message
            v-if="resultFormStatus === 'error' && resultMessageVisible"
            variant="error"
            @close="handleResultMessageClose" class="mb-6"
        >
            Formulář se nepodařilo odeslat. Zkuste to prosím později…
        </callout-message>
        <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit.prevent="handleSubmit"
        >
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
                <div class="w-full mt-2 mb-4 xl:mb-8">
                    <input-textarea
                        label="Popište nám prosím váš projekt nebo potřeby…"
                        v-model="fields.message"
                        rows="4"
                        id="message"
                    />
                </div>
            </div>
            <input
                type="text"
                v-model="preventValue"
                class="hidden"
                id="contact-fill"
            >
            <div class="flex items-center justify-center">
                <project-button tag="button">Odeslat</project-button>
            </div>
        </form>
    </div>
</template>

<script>
  import axios from "axios";
  import EmailValidator from 'email-validator';

  import InputText from "./Input/InputText.vue";
  import InputTextarea from "./Input/InputTextarea";
  import ProjectButton from '../components/ProjectButton'
  import CalloutMessage from './CalloutMessage';
  import LoadingTransition from './LoadingTransition.vue';
  import {GAScripts} from "./utils";

  export default {
      components: {
          InputTextarea,
          InputText,
          ProjectButton,
          CalloutMessage,
          LoadingTransition
      },
      data() {
          return {
              scriptUpdated: false,
              loading: false,
              errorFields: {},
              resultFormStatus: null,
              resultMessageVisible: false,
              preventValue: '',
              fields: {
                  fullname: '',
                  email: '',
                  phone: '',
                  message: ''
              }
          }
      },
      methods: {
          encode(data) {
              return Object.keys(data)
                  .map(
                      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                  )
                  .join("&");
          },
          validate() {
              this.errorFields = {};
              const {fullname, email} = this.fields;
              if (!fullname || /^\s+$/.test(fullname)) {
                  this.$set(this.errorFields, 'fullname', {messages: ['Hodnota musí být vyplněná']})
              }
              if (!email) {
                  this.$set(this.errorFields, 'email', {messages: ['Hodnota musí být vyplněná']})
              } else if (!EmailValidator.validate(email)) {
                  this.$set(this.errorFields, 'email', {messages: ['E-mail není ve správném formátu']})
              }
              return Object.entries(this.errorFields).length === 0
          },
          handleSubmit() {
              if (this.validate() && this.preventValue === '') {
                  this.loading = true;
                  const axiosConfig = {
                      header: {"Content-Type": "application/x-www-form-urlencoded"}
                  };
                  axios.post(
                      "/",
                      this.encode({
                          "form-name": "contact-form",
                          ...this.fields
                      }),
                      axiosConfig
                  ).then((response) => {
                      if (response && response.status === 200) {
                          this.fields = {};
                          this.resultFormStatus = 'success';
                          if (!this.scriptUpdated) {
                              GAScripts();
                              this.scriptUpdated = true;
                          }
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
