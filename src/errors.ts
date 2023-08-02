export class PokemonNotFound extends Error {
  constructor() {
    super("pokemon-not-found");
  }
}

export class GenerationNotFound extends Error {
  constructor() {
    super("generation-not-found");
  }
}
