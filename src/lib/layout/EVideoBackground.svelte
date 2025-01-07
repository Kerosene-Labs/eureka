<script lang="ts">
  interface Props {
    src: string;
  }

  let { src }: Props = $props();
</script>

<video {src} autoplay loop muted class="fullscreen-video"></video>

<style lang="postcss">
  .fullscreen-video {
    width: 100%; /* Optional: Adjust width to fit viewport */
    height: 100vh; /* Force the video to be 100% of viewport height */
    object-fit: cover; /* Ensures the video covers the entire area */
    position: fixed; /* Optional: Fix it to the viewport */
    top: 0;
    left: 0;
    z-index: -1; /* Optional: Send it to the background */
    @apply dark:opacity-20;
  }
</style>
