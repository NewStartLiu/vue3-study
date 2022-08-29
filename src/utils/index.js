import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  onMounted(() => {
    window.addEventListener('mousemove', (e) => {
      console.log(e);
    });
  });
  onUnmounted(() => {
    window.removeEventListener('mouseover', () => {});
  });
}
