export const DISTANCE_TO_ANDROMEDA_LIGHT_YEARS = 2537000;

export interface Unit {
    name: string,
    conversion: number
}

// Mapping from base unit to light-years
export const UNIT_MAPPING: Array<Unit> = [
    {name: 'Miles / Hour', conversion: 6.706e+8},
    {name: 'Kilometers / Hour', conversion: 2.998e+8},
    {name: 'Light-years / Hour', conversion: 0.00011415525}
];