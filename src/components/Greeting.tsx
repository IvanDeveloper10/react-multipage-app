type GreetingProps = {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return <h1 className='w-96 text-center'>Hello {name}!</h1>
}

export default Greeting;