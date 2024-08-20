import PropTypes from "prop-types";

const PokemonCard = ({ id, name, sprites }) => {

  const newSprites = Object.entries(sprites)
    .map(([key, value]) => {
      return { key, value };
    })
    .filter(({ value }) => value !== null && typeof value !== 'object');

  return (
    <section style={{ height: 200 }}>
      <div className="card shadow">
        <div className="card-header">
          <h2 className="text-capitalize">
            #{id}- {name}
          </h2>
        </div>
        <div className="card-body">
        <div className="row col"></div>
          {sprites &&
            newSprites.reverse().map((sprite) => (
              <img
                key={sprite.value}
                className="img-thumbnail"
                src={sprite.value}
                alt={sprite.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.object.isRequired,
};

export default PokemonCard;
