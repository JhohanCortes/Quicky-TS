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
    <div className="container mx-auto mt-10">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Ranking</th>
          </tr>
        </thead>
        <tbody>
          {filteredRankings.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
