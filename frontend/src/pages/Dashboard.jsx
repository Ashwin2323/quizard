import {Card} from '@/components/ui/Card'
import { Button } from '../components/ui/button'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CreateQuiz from './CreateQuiz'


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
            {/* <Button onClick={()=>{navigate('/user/create')}} className='bg-green-500 text-base'><Plus size={23} />Create New Quiz</Button> */}
            <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className='bg-green-500 text-base'><Plus size={23} />Create New Quiz</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
            <CreateQuiz/>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
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
