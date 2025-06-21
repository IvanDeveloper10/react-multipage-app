import Greeting from '../components/Greeting';

export default function HomePage() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold text-center'>This Is My Page</h1>
      <Greeting name='HACKERS' />
    </div>
  );
}
