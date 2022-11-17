import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id=''>
      <div className = "container header__container">
      <h5>Hello, I am</h5>
      <h1>Name here</h1>
      <h5 className='text-light'> Job Title here </h5>
      <CTA />
      <HeaderSocials />
      </div>
    </section>
  )
}

export default Header