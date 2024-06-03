<template>
  <div class="emoji-textbox">
    <textarea v-model="text" rows="4" cols="50"></textarea>
    {{ text }}
    <div class="emoji-picker">
      <button @click="toggleEmojiPicker">&#128515;</button>
      <div v-show="showEmojiPicker" class="emoji-list">
        <span v-for="emoji in emojis" :key="emoji" @click="addEmoji(emoji)">{{
          emoji
        }}</span>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.emoji-textbox {
  position: relative;
}

.emoji-picker {
  position: absolute;
  top: 0;
  right: 0;
}

.emoji-list {
  display: flex;
  flex-wrap: wrap;
}

.emoji-list span {
  cursor: pointer;
  margin: 5px;
}
</style>
