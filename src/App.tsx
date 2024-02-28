import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"250px 1fr"}
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem area={"nav"}>Nav</GridItem>
      <GridItem area={"main"}>Main</GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
};

export default App;
