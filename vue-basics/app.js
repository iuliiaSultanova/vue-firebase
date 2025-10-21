const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
    };
  },
  methods: {
    toggleShowBooks() {
        this.showBooks = !this.showBooks;
    }
  }
});

app.mount("#app");
