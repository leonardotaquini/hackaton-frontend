import { Button } from '@/components/shadcn/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='h-screen grid place-items-center'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl text-center'> 404 | Not Found</h2>
        <p className='text-xs text-center'>Could not find requested resource</p>
        <Button variant={'secondary'} className='mx-auto'>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  )
}