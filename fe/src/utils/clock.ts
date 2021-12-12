import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);

export const getNow = (): number => {
    const utcNow = dayjs.utc();
    return utcNow.unix() * 1000 + utcNow.millisecond();
};

export const fromNow = (datetime: dayjs.Dayjs) => {
    datetime.fromNow();
}
