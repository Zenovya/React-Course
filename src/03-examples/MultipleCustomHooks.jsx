import { useCounter, useFetch } from "../hooks";
import Loading from "./Loading";
import PokemonCard from "./PokemonCard";

const MultipleCustomHooks = () => {
  const { count, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  return (
    <>
      {isLoading ? <Loading /> : <PokemonCard {...data} />}

      <button
        className="btn btn-sm btn-primary text-white mt-2 fw-bold"
        onClick={decrement}
      >
        Anterior
      </button>
      <button
        className="btn btn-sm btn-primary text-white mt-2 fw-bold"
        onClick={increment}
      >
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHooks;
