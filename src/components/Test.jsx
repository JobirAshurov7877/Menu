import '../index.scss'
import { CSSTransition } from 'react-transition-group'

const Test = ({ text, active }) => {
  return (
    <div>
      <CSSTransition
      in={active}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
      <div className="slide">
        {text}
      </div>
    </CSSTransition>
    </div>
  )
}

export default Test
