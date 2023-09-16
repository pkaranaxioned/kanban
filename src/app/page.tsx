import Image from 'next/image'
import Columns from '../components/columns'

export default function Home() {
  return (
    <div className="flex items-center gap-5 p-24">
      <Columns status="todo" />
      <Columns status="inprogress" />
      <Columns status="done" />
    </div>
  )
}
