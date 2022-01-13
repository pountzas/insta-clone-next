import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {open && (
        <p>open leme re</p>
      )}
    </div>
  )
}

export default Modal
