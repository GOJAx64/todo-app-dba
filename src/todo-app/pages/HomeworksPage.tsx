import { Card } from '../../components'

export const HomeworksPage = () => {
  return (
    <div>
      <h1 className='text-xl text-center font-bold'>
        Tareas
      </h1>
      <div className='flex'>
          <div className=''>
              <Card/>
              <Card/>
              <Card/>
              
          </div>
          <div className=''>
              Detalles
          </div>
      </div>
    </div>
  )
}
