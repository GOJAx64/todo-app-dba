import { Calendar, dateFnsLocalizer  } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours, parse, startOfWeek, format, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [
  {
    title: 'Tarea 4',
    start: new Date(),
    due: addHours( new Date(), 2),
    description: 'Este es el deber prueba',
    bgColor: '#1E293B',
    user: {
      _id: '123',
      name: 'Alberto'
    }
  },
  {
    title: 'Tarea 3',
    start: new Date(),
    due: addHours( new Date(), 48),
    description: 'Este es el deber prueba',
    bgColor: '#1E293B',
    user: {
      _id: '123',
      name: 'Alberto'
    }
  },
]

export const CalendarPage = () => {
  return (
    <Calendar
      localizer={ localizer }
      events={ myEventsList }
      startAccessor="due"
      endAccessor="due"
      style={{ 
        height: '100vh',  
        width: '100vw', 
        padding: 16,
      }}
      className="bg-slate-50"
    />
  )
}
