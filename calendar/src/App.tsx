import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';

import "./App.css"

interface CalendarProps {
  value?: Date,
  onChange?: (date: Date) => void,
}

interface CalendarRef {
  getDate: () => Date,
  setDate: (date: Date) => void,
}

const InternalCalendar: React.ForwardRefRenderFunction<CalendarRef, CalendarProps> = (props, ref) => {
  const {
    value = new Date(),  // value的参数设置为 date的初始值
    onChange
  } = props;

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [date, setDate] = useState(value);

  // 自定义ref的内容
  useImperativeHandle(ref, () => {
    return {
      getDate: () => date,
      setDate: (date: Date) => setDate(date)
    }
  });

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();  // 该月的第一天是星期几
  }

  const lastDateOfLastMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  }

  const lastDayOfThisMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDay();
  }

  const renderDays = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    const lastDate = lastDateOfLastMonth(date.getFullYear(), date.getMonth());

    // 填充上个月
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`gray-${i}`} className='day gray'>{lastDate - firstDay + i + 1}</div>);
    }

    // 先渲染 day-1 个 empty 块
    // for (let i = 0; i < firstDay; i++) {
    //   days.push(<div key={`empty-${i}`} className='empty' />);
    // }

    // 再渲染 daysCount 个 day 块
    for (let i = 1; i <= daysCount; i++) {
      // bind多用于确保函数内的this指向预期的对象，避免在回调中出现this指向全局对象或上下文的问题
      // 这行代码允许onChange函数根据用户的选择执行相应的逻辑，如更新应用的状态或显示更多关于这一天的信息
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i));
      if (i === date.getDate()) {  // 渲染时检查这一天是否为当前日期，把当前日期加个active样式
        days.push(<div key={i} className='day active' onClick={clickHandler}>{i}</div>);
      } else {
        days.push(<div key={i} className='day' onClick={clickHandler}>{i}</div>);
      }
    }

    const leftDays = 6 - lastDayOfThisMonth(date.getFullYear(), date.getMonth());

    // 填充下个月
    for (let i = 0; i < leftDays; i++) {
      days.push(<div key={`next-gray-${i}`} className='day gray'>{i + 1}</div>);
    }

    return days;
  }


  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>{date.getFullYear()}年{date.getMonth() + 1}月</div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        {weeks.map((d) => (
          <div key={d} className='day'>{d}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
}

// 转发出ref的内容
const Calendar = React.forwardRef(InternalCalendar);
const Test = () => {
  const calendarRef = useRef<CalendarRef>(null);

  useEffect(() => {
    console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date('2024-3-30'));
    }, 3000);
  }, []);

  return (
    <>
      <Calendar value={new Date('2024-3-30')} onChange={(date: Date) => console.log(date.toLocaleDateString())} />
      <Calendar ref={calendarRef} value={new Date('2024-6-24')} />
    </>
  )
}

export default Test;