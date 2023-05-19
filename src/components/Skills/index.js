import Skill from './Skill'

export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <Skill x='0vw' y='-22vw' text='Figma' tooltip='Used to create designs' />
        <Skill x='0vw' y='0vw' text='Web' />
        <Skill x='-5vw' y='-10vw' text='CSS' />
        <Skill x='-23vw' y='2vw' text='HTML' />
        <Skill x='0vw' y='11vw' text='Javascript' />
        <Skill x='20vw' y='6vw' text='React JS' />
        <Skill x='-22vw' y='-15vw' text='Next JS' />
        <Skill x='15vw' y='-12vw' text='Wordpress' />
        <Skill x='30vw' y='-5vw' text='Git' />
        <Skill x='-20vw' y='18vw' text='Redux' />
        <Skill x='18vw' y='18vw' text='Tailwind CSS' />
        <Skill x='0vw' y='22vw' text='React Testing Library' />
        <Skill x='-18vw' y='11vw' text='Jest' />
        {/* cloud
        docker
         */}
      </div>
    </>
  )
}
