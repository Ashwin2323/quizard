import {Card} from '@/components/ui/Card'
import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate=useNavigate();
  function createNewQuizHandler(){

  }
  return (
    <div className="min-h-screen bg-gray-800 text-white p-10">
      <div className='mb-4 flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <h3 className='text-xl'>Welcome back, User!</h3>
          </div>
          <div>
            <Button onClick={()=>{navigate('/user/create')}} className='bg-green-500 text-base'><Plus size={23} />Create New Quiz</Button>
          </div>
      </div>
        <div className='flex justify-between gap-8'>
          <Card className='bg-blue-700 text-white border-none p-5 w-full'>
            <h1 className='text-xl'>Total Quizzes</h1>
            <h1 className='text-5xl font-semibold'>2333</h1>
          </Card>
          <Card className='bg-blue-700 text-white border-none p-5 w-full'>
            <h1 className='text-xl'>Average Score</h1>
            <h1 className='text-5xl font-semibold'>2333</h1>
          </Card>
          <Card className='bg-blue-700 text-white border-none p-5 w-full'>
            <h1 className='text-xl'>Accuracy</h1>
            <h1 className='text-5xl font-semibold'>80%</h1>
          </Card>
        </div>
    </div>
  )
}
