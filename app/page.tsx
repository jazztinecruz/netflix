import Collection from "@/core/components/collection";
import { GENRE_NAME } from "@/core/enums";
import { Page } from "@/core/types/react";

const Home: Page = () => {
  return (
    <div className="space-y-6">
      <Collection title={GENRE_NAME.Fantasy} />
      <Collection title={GENRE_NAME.Action} />
      <Collection title={GENRE_NAME.Adventure} />
      <Collection title={GENRE_NAME.Comedy} />
      <Collection title={GENRE_NAME.Romance} />
    </div>
  );
};

export default Home;
