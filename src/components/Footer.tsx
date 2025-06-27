// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-6 px-4 mt-16'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-lg font-semibold tracking-wide'>
          © {new Date().getFullYear()} Ivan P - Hack Club
        </p>

        <div className='flex gap-6 text-xl'>
          <a href='https://github.com/IvanDeveloper10' target='_blank' rel='noopener noreferrer' className='hover:text-cyan-400 transition-all duration-300'>
            <FaGithub />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-purple-400 transition-all duration-300'>
            <FaLinkedin />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-pink-400 transition-all duration-300'>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
