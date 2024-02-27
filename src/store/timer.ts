import create from 'zustand';

interface TimerState {
  time: number;
  initialTime: number;
  startTime: () => void;
  stopTime: () => void;
  resetTime: () => void;
}

export const useTimer = create<TimerState>((set) => {
  let intervalId: NodeJS.Timeout;

  return {
    time: -1,
    initialTime: 10,
    startTime: () => {
      set({ time: 10 });

      // intervalId = setInterval(() => {
      //   set((state) => {
      //     const newTime = Math.max(-1, state.time - 1);

      //     if (newTime === 0) {
      //       state.stopTime();
      //     }

      //     return { time: newTime };
      //   });
      // }, 1000);
    },
    stopTime: () => {
      clearInterval(intervalId);
    },
    resetTime: () => {
      clearInterval(intervalId);
      set({ time: -1 })
    }
  };
});
