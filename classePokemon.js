// Pokémon
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, base_experience, height, weight, legendary, firstAppearance, abilities, stats) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
    return Pokemon;
}());
// Exemplo de utilização da classe Pokémon
var ditto = new Pokemon(132, "Ditto", 101, 3, 40, false, "1996-06-01", ["limber", "imposter"], [
    { base_stat: 48, stat: "hp" },
    { base_stat: 48, stat: "attack" },
    { base_stat: 48, stat: "defense" },
]);
// Teste para ver os dados do Pokémon Ditto
console.log(ditto);
