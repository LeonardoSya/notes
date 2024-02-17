import dayjs from 'dayjs';
import Calendar from './calendar/calendar';

export default function App() {
  return (
    <div className="App">
      {/* 给Calendar组件加一个value的props，也就是当前日期 这样MonthCalendar可以根据传入的value拿到当前月份的信息 */}
      <Calendar value={dayjs('2024-3-30')} />
    </div>
  );
}