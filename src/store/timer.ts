import { create } from "zustand";

interface TimerState {
  time: number;
  startTime: (value: number) => void; //Toda funcion retorna un void
}

export const useTimer = create<TimerState>((set) => ({
  time: 2,
  startTime: (value: number) => {
    const intervalId = setInterval(() => {
      set((state) => ({
        time: Math.max(0, state.time - 1), // Se asegura de que el tiempo nunca sea menor que 0
      }));
    }, 1000);
  },
}));
