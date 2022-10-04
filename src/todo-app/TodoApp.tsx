import React from 'react'
import { Navbar, SideBar } from '../ui'

export const TodoApp = () => {
  return (
    <>
      <Navbar/>
      <div className='grid grid-cols-2 gap-11'>
        <SideBar/>
        <div className='mt-20 pl-48'>TodoApp</div>
      </div>
    </>
  )
}
