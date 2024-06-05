<template>
  <div class="text-post-wrapper">
    <div class="text-post-header">
      <p class="text-post-title">Texto do post</p>
    </div>
    <div class="text-post-emoji-textbox">
      <textarea
        v-model="text"
        rows="4"
        placeholder="Aqui vai o texto descritivo"
      ></textarea>
      <div class="text-post-emoji-picker">
        <button @click="toggleEmojiPicker">&#128515;</button>
        <div v-show="showEmojiPicker" class="text-post-emoji-list">
          <span v-for="emoji in emojis" :key="emoji" @click="addEmoji(emoji)">{{
            emoji
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-post-wrapper {
  background-color: $white-100;
  border: 1px solid $gray-600;
  border-radius: 4px;

  .text-post-header {
    padding: 5px 10px;
    border-bottom: 1px solid $gray-600;

    .text-post-title {
      font-weight: 500;
      font-size: 16px;
      margin: 0px;
      text-align: start;
      color: $gray-300;
    }
  }

  .text-post-emoji-textbox {
    position: relative;
    padding: 10px;

    textarea {
      width: -webkit-fill-available;
      font-family: "Poppins", sans-serif;
      border: 1px solid $gray-700;
      border-radius: 4px;
      font-size: 16px;
      resize: none;
      padding: 0px;
      padding: 4px 20px 4px 4px;

      &:focus {
        outline: none;
        border: 1px solid $orange-200;
      }
    }
    .text-post-emoji-picker {
      position: absolute;
      top: 8px;
      right: 3px;

      button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }

      .text-post-emoji-list {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        background-color: #ffffffb4;
        border-radius: 5px;
        width: 200px;
        right: 10px;

        span {
          cursor: pointer;
          margin: 5px;
          transition: all 0.3s;

          &:hover {
            background-color: $white-100;
            border-radius: 5px;
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      showEmojiPicker: false,
      emojis: ["😀", "😂", "😍", "😊", "🥳", "🎉", "👍", "❤️", "🌟", "🔥"],
      text: "",
    };
  },
  methods: {
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    addEmoji(emoji) {
      this.text = this.text ? this.text + emoji : emoji;
      this.showEmojiPicker = false;
    },
  },
  props: {
    value: {
      type: String,
    },
  },
  created() {
    this.text = this.value;
  },
};
</script>
