<script lang="ts">
  interface Props {
    src: string;
  }

  let { src }: Props = $props();
</script>

<video {src} autoplay loop muted class="fullscreen-video"></video>

<style lang="postcss">
  .fullscreen-video {
    width: 100%;
    height: 100dvh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
    @apply dark:opacity-20;
  }
</style>
