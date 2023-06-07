'use client'

async function formSubmit(event) {
  // event.preventDefault()

  const formData = new FormData(event.target)
  const object = Object.fromEntries(formData)
  const json = JSON.stringify(object)

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      // 'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: json
  })
  const result = await response.json()
  if (result.success) {
    console.log('success!', result)
    // clearForm(event)
  }
}

export default function Form() {
  return (
    <form onSubmit={formSubmit}>
      <div className='w-full flex flex-col pb-4'>
        <label
          htmlFor='name'
          // class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          className='block mb-1 text-dark'
        >
          Name
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlSpace='preserve'
              viewBox='0 0 52 52'
              width='1em'
              height='1em'
            >
              <path d='M50 43v2.2c0 2.6-2.2 4.8-4.8 4.8H6.8C4.2 50 2 47.8 2 45.2V43c0-5.8 6.8-9.4 13.2-12.2l.6-.3c.5-.2 1-.2 1.5.1 2.6 1.7 5.5 2.6 8.6 2.6s6.1-1 8.6-2.6c.5-.3 1-.3 1.5-.1l.6.3C43.2 33.6 50 37.1 50 43zM26 2c6.6 0 11.9 5.9 11.9 13.2S32.6 28.4 26 28.4s-11.9-5.9-11.9-13.2S19.4 2 26 2z' />
            </svg>
          </div>
          <input
            type='text'
            id='name'
            name='name'
            minLength={2}
            maxLength={80}
            placeholder='Your Name'
            required
            autoComplete='off'
            content='Teste'
            // class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            className='border border-dark bg-light text-dark text-sm rounded-lg 
      block w-full pl-10 p-2.5'
          />
        </div>
        <label
          htmlFor='email'
          // class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          className='block mb-1 mt-4 text-dark'
        >
          Email
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlSpace='preserve'
              viewBox='0 0 52 52'
              width='1em'
              height='1em'
            >
              <path d='M24.9 30.1c.6.6 1.5.6 2.1 0l22.6-21c.4-.8.3-2.1-1.3-2.1l-44.7.1c-1.2 0-2.2 1.1-1.3 2.1l22.6 20.9z' />
              <path d='M50 17.3c0-1-1.2-1.6-2-.9L30.3 32.7c-1.2 1.1-2.7 1.7-4.3 1.7s-3.1-.6-4.3-1.6L4.1 16.4c-.8-.7-2-.2-2 .9C2 17 2 40 2 40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17.3z' />
            </svg>
          </div>
          <input
            type='email'
            id='email'
            name='email'
            minLength={5}
            maxLength={150}
            placeholder='your@email'
            required
            autoComplete='off'
            // class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            className='border border-dark bg-light text-dark text-sm rounded-lg 
      block w-full pl-10 p-2.5'
          />
        </div>

        <label
          htmlFor='message'
          // class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          className='block mb-1 mt-4 text-dark'
        >
          How can I create value for you?
        </label>
        <div className='relative'>
          <textarea
            rows={4}
            minLength={10}
            maxLength={600}
            id='message'
            name='message'
            placeholder='Your message here'
            required
            // class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            className='border border-dark bg-light text-dark text-sm rounded-lg 
      block w-full p-2.5'
          />
        </div>
      </div>
      <div className='flex flex-col justify-between mt-4 gap-4'>
        <button
          type='submit'
          className='w-full bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
      border-2 border-solid border-transparent
      hover:bg-light hover:text-dark hover:border-dark
      focus:border-pink-700 focus:bg-dark/80'
        >
          Send
        </button>
        <button
          type='reset'
          className='w-full bg-dark/90 text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
      border-2 border-solid border-transparent
      hover:bg-red-800 hover:text-light hover:border-dark/80
      focus:border-dark/80 focus:bg-red-800'
        >
          Clear
        </button>
      </div>
    </form>
  )
}
