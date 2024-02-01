import create from 'zustand';

interface TimerState {
  time: number;
  initialTime: number;
  startTime: () => void;
  stopTime: () => void;
}

export const useTimer = create<TimerState>((set) => {
  let intervalId: NodeJS.Timeout;

  return {
    time: -1,
    initialTime: 10,
    startTime: () => {
      // Restablecer el valor de 'time' a 10 antes de iniciar el intervalo
      set({ time: 13 });

      intervalId = setInterval(() => {
        set((state) => {
          const newTime = Math.max(-1, state.time - 1);

          // Verificar si el tiempo llegó a 0 y detener el intervalo
          if (newTime === 0) {
            state.stopTime();
          }

          return { time: newTime };
        });
      }, 1000);
    },
    stopTime: () => {
      clearInterval(intervalId);
    },
  };
});