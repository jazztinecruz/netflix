import { SVG } from "@/core/types/react";

type Props = {
  Icon: SVG;
  color?: "black" | "white";
};

const Symbol = ({ Icon, color = "white" }: Props) => {
  return <Icon className={`w-5 h-5 lg:w-7 lg:h-7 text-${color}`} />;
};

export default Symbol;
