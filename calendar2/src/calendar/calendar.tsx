import { CSSProperties, ReactNode, useState } from 'react';
import { Dayjs } from 'dayjs';
import MonthCalendar from './month-calendar';
import Header from './header';
import cs from 'classnames';
import './App.scss';


export interface CalendarProps {
    value: Dayjs,
    style?: CSSProperties,
    className?: string | string[],
    // 定制日期显示 会完全覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => ReactNode,
    // 定制日期单元格 内容会被添加到单元格内，只在全屏日历模式下生效
    dateInnerContent?: (currentDate: Dayjs) => ReactNode,
    // 国际化
    locale?: string;
    // 选择日期后触发的回调
    onChange?: (date: Dayjs) => void;
}

const Calendar = (props: CalendarProps) => {
    const {
        value,
        style,
        className
    } = props;

    const classNames = cs('calendar', className);

    return <div className={classNames} style={style}>
        <Header />
        <MonthCalendar {...props} />
    </div>
}

export default Calendar;