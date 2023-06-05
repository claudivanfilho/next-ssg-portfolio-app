"use client";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Title,
  Filler,
  RadialLinearScale,
  RadarController,
} from "chart.js";

ChartJS.register(RadarController, RadialLinearScale, LineElement, Filler, PointElement, Title);

import { Pokemon } from "@/models";

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  const labels = pokemon.stats.map((stat) => stat.stat.name.replace("special", "sp")) || [];
  const values = pokemon.stats.map((stat) => stat.base_stat) || [];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: "rgba(128, 90, 213, 0.6)",
        borderColor: "rgb(128, 90, 213)",
        data: values,
        fill: true,
      },
    ],
  };

  return (
    <div className="mb-10 lg:mb-0" data-testid="pokemon-stats">
      <Chart
        type="radar"
        data={data}
        options={{ responsive: true, plugins: { legend: { display: false } } }}
      />
    </div>
  );
};

export default PokemonStats;
