import { Dayjs } from 'dayjs';
import { CalendarProps } from './calendar';

interface MonthCalendarProps extends CalendarProps {

}

function getAllDays(date: Dayjs) {
    const startDate = date.startOf('month');  // 当前月份的第一天
    const day = startDate.day();  // 当前月份的第一天所在星期几的索引 (5)

    const daysInfo: Array<{ date: Dayjs, currentMonth: boolean }> = new Array(6 * 7);

    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            // dayjs的subtract方法，用于计算当前日期的-1,-2,-3的日期
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false  // 添加一个属性标识是否是当前月份的
        }
    }

    for (let i = day; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day');  // 当前日期

        daysInfo[i] = {
            date: calcDate,
            currentMonth: calcDate.month() === date.month()
        }
    }

    return daysInfo;
}

const MonthCalendar = (props: MonthCalendarProps) => {

    function renderDays(days: Array<{ date: Dayjs, currentMonth: boolean }>) {
        const rows: Array<number> = [];
        for (let i = 0; i < 6; i++) {
            const row = [];
            for (let j = 0; j < 7; j++) {
                const item = days[i * 7 + j];
                row[j] = <div key={item.date.format('YYYY-MM-DD')} className="calendar-month-body-cell">{item.date.date()}</div>
            }
            row.push(row);
        }
        return rows.map(row => <div className='calendar-month-body-row'>{row}</div>)
    }

    const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const allDays = getAllDays(props.value);

    return (
        <div className="calendar-month">
            <div className="calendar-month-week-list">
                {weekList.map((week) => (
                    <div key={week} className="calendar-month-week-list-item">
                        {week}
                    </div>
                ))}
            </div>
            <div className="calendar-month-body">
                {renderDays(allDays)}
            </div>
        </div>
    );
}

export default MonthCalendar;