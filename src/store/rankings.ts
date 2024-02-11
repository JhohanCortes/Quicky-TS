import create from 'zustand';

interface RankingsState {
  rankings: {
    clicksPerSecond: number[];
    shootTest: number[];
    reCenter: number[];
    holdBall: number[];
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
    holdBall: [],
    // Puedes inicializar más rankings aquí si es necesario
  },
  addScore: (ranking, value: number) =>
    set((state) => {
      const updatedRanking = [...state.rankings[ranking], value].sort((a, b) => b - a).slice(0, 20);
      return {
        rankings: {
          ...state.rankings,
          [ranking]: updatedRanking
        }
      };
    }),
    actual: "clicksPerSecond",
    setActual:(value)=>{
      set({actual : value})
    }
}));
