<template>
  <div class="observer"/>
</template>

<script>
export default {
  data: () => ({
    observer: null,
  }),
async mounted() {
    const options = {rootMargin: "0px",threshold: 1.0};
  
    this.observer = await new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>