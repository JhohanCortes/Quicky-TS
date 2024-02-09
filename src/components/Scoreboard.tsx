import { useRankings } from "../store/rankings";
import { useEffect, useState } from "react";

interface Props {
  actual: string
}

const Scoreboard: React.FC<Props> = (props) => {
  const { rankings } = useRankings();
  const [filteredRankings, setFilteredRankings] = useState<number[]>([]);

  useEffect(() => {
    const { actual } = props;

    const filteredRankings = rankings[actual as keyof typeof rankings].filter(item => item);

    setFilteredRankings(filteredRankings);
    console.log(filteredRankings + "atención")
  }, [rankings]);


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
