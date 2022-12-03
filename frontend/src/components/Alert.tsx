export const Alert = ({alert}:any) => {
  return (
    <div className={`${alert.error ? 'from-red-400 to-red-600': 'from-sky-400 to-sky-400'} 
        bg-gradient-to-br text-center p-3 uppercase text-white font-bold text-sm `}>
        { alert.msg }
    </div>
  )
}
