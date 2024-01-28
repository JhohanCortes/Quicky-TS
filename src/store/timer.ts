import { create } from "zustand";

interface TimerState  {
    timer: number
}


export const useTimer = create<TimerState>(() => ({
    timer: 10
}))