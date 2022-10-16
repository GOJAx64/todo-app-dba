import { Card, TitleHeader, FormNotes } from '../../components';

export const NotesPage = () => {
    
    return (
        <div className='flex-1'>
            <div className='flex '>
                <div className='w-1/2 h-screen border-x border-slate-300 px-5 py-5  bg-slate-100'>
                    <TitleHeader title={ 'Notas' }/>
                    <div className='h-5/6 overflow-y-auto scrollbar-hide'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <FormNotes/>
            </div>
        </div>
  )
}
