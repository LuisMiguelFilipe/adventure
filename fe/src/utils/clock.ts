import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

/**
 * we store unix milliseconds 
 **/

// plugins //

dayjs.extend(utc);
dayjs.extend(relative);

// now //
export const getNow = (): number => {
    return dayjs().valueOf();
};

// to day.Dayjs
export const toDayjs = (timestamp: number|undefined): dayjs.Dayjs|undefined => {
    return timestamp === undefined
        ? undefined
        : dayjs(timestamp);
}

// from day.Dayjs

export const toHumanFormat = (datetime: dayjs.Dayjs): string => {
    return datetime.fromNow();
}

export const toIsoString = (dayjs: dayjs.Dayjs|undefined): string|undefined => {
    return dayjs?.toISOString() ?? undefined;
}
