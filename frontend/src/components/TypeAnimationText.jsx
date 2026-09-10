import { TypeAnimation } from "react-type-animation"

const TypeAnimationText = () => {
  return (
    <div>
      <TypeAnimation
      sequence={[
        'To KJ&SK Leave Management System', // Types 'Note Manager app'
        1000,                  // Waits 1s
        '',
        1000,
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      className='md:text-4xl text-xl'
    />
    </div>
  )
}

export default TypeAnimationText