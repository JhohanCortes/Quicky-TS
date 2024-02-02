import create from 'zustand';

interface boardState {
  ranking: number[]; // Especifica el tipo de elementos que contendrá el array
  addScore: (value: number) => void; // Asegúrate de especificar el tipo de retorno
}

export const useRankings = create<boardState>((set) => ({
  ranking: [],
  addScore: (value: number) => set((state) => ({
    ranking: [...state.ranking, value].sort((a, b) => a - b), // Sort in ascending order
    
    })),
    
}));
