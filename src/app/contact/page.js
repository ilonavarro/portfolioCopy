import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'

export const metadata = {
  title: 'Contact',
  description: 'Generated by create next app'
}

export default function Contact() {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText className='mb-16'>Keep in touch!</AnimatedText>
        <div className='flex flex-col items-center'>
          <form>
            <div className='w-full flex flex-col pb-4'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your name here'
                className='border border-solid border-dark rounded px-2 bg-light w-full'
              />
            </div>
            <div className='w-full flex flex-col pb-4'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your best email here'
                className='border border-solid border-dark rounded px-2 bg-light w-full'
              />
            </div>
            <label htmlFor='message'>How can I create value for you?</label>
            <div>
              <textarea
                rows={4}
                name='message'
                placeholder='Your message here'
                className='border border-solid border-dark rounded px-2 bg-light w-full'
              />
            </div>

            <label
              htmlFor='email'
              // class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              className='block mb-1 text-dark'
            >
              Your Email
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  // class='w-5 h-5 text-gray-500 dark:text-gray-400'
                  className='w-5 h-5 text-dark'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
              </div>
              <input
                type='text'
                id='email'
                // class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                className='border border-dark bg-light text-dark text-sm rounded-lg 
                block w-full pl-10 p-2.5'
                placeholder='user@website'
              />
            </div>

            <button type='submit'>Send</button>
          </form>
        </div>
      </Layout>
    </main>
  )
}
