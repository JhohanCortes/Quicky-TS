import { useRankings } from "../store/rankings";
import { useEffect, useState } from "react";

const Scoreboard = () => {
  const { ranking } = useRankings();
  const [filteredRankings, setFilteredRankings] = useState<number[]>([]);

  useEffect(() => {
    // Filtrar rankings para obtener solo aquellos con valores entre 0 y 9
    // Puedes ajustar la lógica del filtro según tus necesidades
    const filtered = ranking.filter(item => item >= 0 && item <= 9);
    setFilteredRankings(filtered);
  }, [ranking]);

  return (
    <div className="flex items-center justify-center mb-10">
        <table className="w-[200px]">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b bg-primary text-white text-center text-sm font-normal">
                Ranking
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRankings.map((item, index) => (
              <tr key={index}>
                <td className="py-1 px-4 border-b text-center text-sm">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default Scoreboard;
