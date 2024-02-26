import React, { useEffect, useState } from "react";
import { useRankings } from "../store/rankings";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface Props {
  actual: string;
}

const Scoreboard: React.FC<Props> = (props) => {
  const { rankings } = useRankings();
  const [filteredRankings, setFilteredRankings] = useState<{ name: string; score: number }[]>([]);

  useEffect(() => {
    const { actual } = props;

    const filteredRankings = rankings[actual as keyof typeof rankings].map((score, index) => ({
      name: `#${index + 1}`,
      score
    }));

    setFilteredRankings(filteredRankings);
  }, [rankings, props]);

  return (
    <div className="mb-10 w-1/2 mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredRankings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#fe6091" strokeWidth={2} dot={{ stroke: "#fe6091", strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Scoreboard;
