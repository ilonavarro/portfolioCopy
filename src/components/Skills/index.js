import Skill from './Skill'

export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div
        className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
      dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
      >
        <Skill x='0vw' y='-22vw' text='Figma' tooltip='Used to create designs' />
        <Skill x='-22vw' y='-15vw' text='Next JS' tooltip='React Framework' />
        <Skill x='0vw' y='-11vw' text='CSS' tooltip='CSS3 - Cascading Style Sheets' />
        <Skill x='15vw' y='-7vw' text='Docker' tooltip='Containers and CI/CD' />
        <Skill x='30vw' y='-5vw' text='Git' tooltip='Git, Github, Bitbucket and Gitlab' />
        <Skill x='0vw' y='0vw' text='Web' tooltip='Web Development' />
        <Skill x='20vw' y='6vw' text='React JS' tooltip='A Javascript library' />
        <Skill x='0vw' y='11vw' text='Javascript' tooltip='The language of the web' />
        <Skill
          x='18vw'
          y='18vw'
          text='Typescript'
          tooltip='JavaScript with syntax for types.'
        />
        <Skill x='-20vw' y='18vw' text='Redux' tooltip='State Container for JS' />
        <Skill x='0vw' y='22vw' text='React Testing Library' tooltip='Testing library' />
        <Skill
          x='22vw'
          y='-15vw'
          text='Wordpress'
          tooltip='The world&#39;s most popular Content Management System (CMS)'
        />
        <Skill x='-18vw' y='11vw' text='Jest' tooltip='Javascript testing framework' />
        <Skill
          x='-18vw'
          y='2vw'
          text='HTML'
          tooltip='HTML5 - HyperText Markup Language'
        />
        <Skill
          x='-24vw'
          y='-5vw'
          text='Cloud'
          tooltip='Vercel, OCI, AWS, GCP and Azure'
        />
      </div>
    </>
  )
}
