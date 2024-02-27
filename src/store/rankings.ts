import create from 'zustand';

interface RankingsState {
  rankings: {
    clicksPerSecond: number[];
    shootTest: number[];
    reCenter: number[];
    holdBall: number[];
    holdingBall: number[];
    horizontalHold: number[];
    // Puedes añadir más rankings aquí si es necesario
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
    holdBall: [1, 55, 100, 50, 70],
    holdingBall: [],
    horizontalHold: [],
    // Puedes inicializar más rankings aquí si es necesario
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
