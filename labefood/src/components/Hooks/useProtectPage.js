import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFourFood, goToLogin} from '../../routes/coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
        goToFourFood(navigate)
    } else {
        goToLogin(navigate)
    }
  }, [navigate])

  return
}

export default useProtectedPage
