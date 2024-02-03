import { useNavigate } from "react-router-dom"
import { Container } from "./styles"
import { IoIosArrowBack } from "react-icons/io"
import { useAuth } from '../../hooks/auth';



export function ButtonBack() {
  const navigate = useNavigate()
  const { back, setBack } = useAuth()

  const handleBack = () => {
    if (back === true) {
      navigate("/")
      setBack(false)
    } else {
      navigate(-1)
    }
  }

  return (
    <Container onClick={handleBack}>
      <IoIosArrowBack />
      Voltar
    </Container>
  )
}