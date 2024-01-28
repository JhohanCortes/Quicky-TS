import create from "zustand";

interface CounterState {
    count : number
    increment : (value: number) => void
}

export const useCounterScore = create<CounterState>((set) => ({
    count: 0,
    increment: (value: number) => set(state => ({
        count: state.count + value
    }))
}))