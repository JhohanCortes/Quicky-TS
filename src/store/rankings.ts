import create from 'zustand';

interface RankingsState {
  rankings: {
    clicksPerSecond: number[];
    shootTest: number[];
    reCenter: number[];
    holdBall: number[];
    holdingBall: number[];
    horizontalHold: number[];
    verticalHold: number[];
  }
  addScore: (ranking: keyof RankingsState['rankings'], value: number) => void;
  actual: string | boolean
  setActual: ( value:string )=>void
}

export const useRankings = create<RankingsState>((set) => ({
  rankings: {
    clicksPerSecond: [],
    shootTest: [],
    reCenter: [],
    holdBall: [],
    holdingBall: [],
    horizontalHold: [],
    verticalHold: [],
  },
  addScore: (ranking, value: number) =>
    set((state) => {
      const updatedRanking = [...state.rankings[ranking], value];
      return {
        rankings: {
          ...state.rankings,
          [ranking]: updatedRanking.slice(0, 20)
        }
      };
    }),
    actual: "clicksPerSecond",
    setActual:(value)=>{
      set({actual : value})
    }
}));
