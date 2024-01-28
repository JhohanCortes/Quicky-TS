import { useTimer } from "../store/timer"

const Timer = () => {

const timer = useTimer( state => state.timer)
  return (
    <div>Timer: {timer}</div>
  )
}

export default Timer