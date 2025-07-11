import { Counter, CounterResponse } from 'counterapi';
import { useEffect, useState } from 'react';

const counter = new Counter({
    workspace: 'portfoliov3'
})

interface IViews extends CounterResponse{
    data: {
        up_count: number
    }
}

// async function getCurrentCount(): Promise<number | null> {
//   try {
//     const result = await counter.get('visitors-counter') as IViews;
//     const views = result?.data.up_count
//     return views
//   } catch (error) {
//     console.error('Error getting count:', error);
//     throw error;
//   }
// }

async function incrementCount(): Promise<number | null> {
  try {
    const result = await counter.up('visitors-counter') as IViews;
    if (result && result?.data.up_count) {
        const views = result?.data.up_count
        return views
    }
    return null
  } catch (error) {
    console.error('Error getting count:', error);
    throw error;
  }
}

export default function Visitor() {
    const [views,setViews] = useState<number | null>(0)
    
    useEffect(() => {
        incrementCount().then((res) => setViews(res))
        // getCurrentCount().then((res) => setViews(res))
    }, [])

  return (
    <div>
      <p className='text-[#a1a1a1]'>visitor #{views}</p>
    </div>
  );
}