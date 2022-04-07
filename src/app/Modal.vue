<template>
  <div>
    <Transition name="modal">
      <div v-if="modelValue" class="modal-mask">
        <div class="modal-wrapper">
          <div class="footer-leave">
            <div class="footer-leave-window">
              <p>
                Вы уверены, что хотите покинуть сайт и перейти на
                {{ altSocial }}?
              </p>
              <div class="footer-leave-window-agree button">
                <a @click="$emit('close')" class="button-select" href="#"
                  >Подтвердить</a
                >
              </div>
              <button
                @click="$emit('close')"
                class="footer-leave-window-close"
                type="submit"
              >
                <img src="../assets/footer/close.png" alt="close" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['modelValue', 'altSocial'],
  data() {
    return {};
  },
  methods: {},
};
</script>
