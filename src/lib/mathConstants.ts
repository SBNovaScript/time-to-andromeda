export const DISTANCE_TO_ANDROMEDA_LIGHT_YEARS = 2537000;

export const SPEED_OF_LIGHT_METERS_PER_SECOND = 299792458;
export const SPEED_OF_LIGHT_METERS_PER_HOUR = SPEED_OF_LIGHT_METERS_PER_SECOND * 60 * 60;
export const LIGHT_YEAR_IN_METERS = SPEED_OF_LIGHT_METERS_PER_HOUR * 24 * 365;


export interface Unit {
    name: string,

    // The distance of the base unit (e.g. no time) in one light year.
    oneLightYear: number,

    // How fast one unit goes in one year.
    baseSpeed: number
}

// Mapping from base unit to light-years
export const UNIT_MAPPING: Array<Unit> = [
    {
        name: 'Miles / Hour',
        oneLightYear: (LIGHT_YEAR_IN_METERS / 1000) * 0.621371,
        baseSpeed: 24 * 365
    },
    {
        name: 'Kilometers / Hour',
        oneLightYear: LIGHT_YEAR_IN_METERS / 1000,
        baseSpeed: 24 * 365
    },
    {
        name: 'Speed of Light',
        oneLightYear: 1,
        baseSpeed: 1
    },
    {
        name: 'Light-years / Hour',
        oneLightYear: 1,
        baseSpeed: 24 * 365
    },
    {
        // 1000 Kilometers / Second
        name: 'Nuclear Propulsion',
        oneLightYear: LIGHT_YEAR_IN_METERS / 1000,
        baseSpeed: 1000 * 60 * 60 * 24 * 365
    }
];