export type EnergyType = {
  mana: 'nmana';
  stamina: 'stamina';
};

export default interface Energy {
  type_: EnergyType;
  amount: number;
}