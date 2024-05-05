import { GENRE_NAME } from "@/core/enums";
import { Page } from "@/core/types/react";

import Collection from "@/core/components/collection";
import Hero from "./_components/hero";

const Home: Page = () => {
  return (
    <div className="grid">
      <Hero />
      <div className="space-y-6 mt-[700px]">
        <Collection title={GENRE_NAME.Fantasy} />
        <Collection title={GENRE_NAME.Action} />
        <Collection title={GENRE_NAME.Adventure} />
        <Collection title={GENRE_NAME.Comedy} />
        <Collection title={GENRE_NAME.Romance} />
      </div>
    </div>
  );
};

export default Home;
