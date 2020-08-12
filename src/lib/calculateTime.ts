import {DISTANCE_TO_ANDROMEDA_LIGHT_YEARS, Unit} from './mathConstants';

const findTimeToAndromeda = (speed: number, unit: Unit) => {
    return  (DISTANCE_TO_ANDROMEDA_LIGHT_YEARS * unit.oneLightYear) / (speed * unit.baseSpeed);
}

export default findTimeToAndromeda;