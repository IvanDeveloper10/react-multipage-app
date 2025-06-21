export default function AboutPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>About Page</h1>
      <ul className='list-disc pl-6 space-y-2'>
        <li>✅ <strong>Three linked pages</strong>: Home, About, Users</li>
        <li>✅ <strong>Nested route</strong>: /users/[id]</li>
        <li>✅ <strong>At least 5 components</strong>: Container, Greeting, UserList, UserDetails, Layout</li>
        <li>✅ <strong>One component accepts children</strong>: Container</li>
        <li>✅ <strong>One component accepts props</strong>: Greeting</li>
        <li>✅ <strong>Nested component</strong>: Greeting inside Home, UserList inside Users</li>
        <li>✅ <strong>Component fetching data from API</strong>: UserList (and UserDetails)</li>
        <li>✅ <strong>3 hours logged with Hackatime</strong>: Editing and coding this project</li>
      </ul>
    </div>
  );
}