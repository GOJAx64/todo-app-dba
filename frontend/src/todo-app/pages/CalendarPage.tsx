import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';

import { addHours } from 'date-fns';

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
      culture='es'
      messages={ getMessagesES() }
      style={{ 
        height: '100vh',  
        width: '100vw', 
        padding: 16,
      }}
      className="bg-slate-50"
    />
  )
}
