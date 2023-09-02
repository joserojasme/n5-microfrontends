import { ContainerButtons } from "./styles";
import { Card, useGetCharactersHarryPotter } from "@n5/n5-container-mfe";

const Home = () => {
  const { results } = useGetCharactersHarryPotter();
  console.log(results);
  return (
    <ContainerButtons>
      {results.map((item: any) => (
        <Card
          key={item.id}
          title={item.name}
          description={`${item.house} - ${
            item.hogwartsStudent ? "Student" : "Not a student"
          }`}
          imgSrc={item.image}
        />
      ))}
    </ContainerButtons>
  );
};

export default Home;
