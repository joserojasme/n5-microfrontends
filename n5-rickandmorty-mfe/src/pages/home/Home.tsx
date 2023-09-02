import { ContainerButtons } from "./styles";
import { Card, useGetCharactersRickAndMorty } from "@n5/n5-container-mfe";

const Home = () => {
  const { results } = useGetCharactersRickAndMorty();

  return (
    <ContainerButtons>
      {results?.map((item: any) => (
        <Card
          key={item.id}
          title={item.name}
          description={`${item.species} - ${item.status}`}
          imgSrc={item.image}
        />
      ))}
    </ContainerButtons>
  );
};

export default Home;
