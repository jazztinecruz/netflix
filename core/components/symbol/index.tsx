type Props = {
  Icon: any;
  color?: "black" | "white";
};

const Symbol = ({ Icon, color = "white" }: Props) => {
  return <Icon className={`w-5 h-5 lg:w-8 lg:h-8 text-${color}`} />;
};

export default Symbol;
