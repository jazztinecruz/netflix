"use client";

import get from "@/core/libraries";
import { useQuery } from "react-query";

const Sample = () => {
  const { data } = useQuery("popular", () => get.movies.popular());

  return <div>Sample</div>;
};

export default Sample;
