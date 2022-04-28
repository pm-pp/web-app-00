import { Grid } from "@chakra-ui/react";

import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeSection from "./components/SomeSection";
import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
      <CTASection />
      <SomeSection />
    </Grid>
  );
};

export default Home;
