export default function AnimatedText({ children, className = '' }) {
  return (
    <>
      <div
        className={
          'w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'
        }
      >
        <h1
          className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        >
          {children.split(' ').map((word, index) => (
            <span key={word + '-' + index} className={'inline-block'}>
              {word}&nbsp;
            </span>
          ))}
        </h1>
      </div>
    </>
  )
}
