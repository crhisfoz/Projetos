import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome, goToLogin} from '../../routes/coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      goToHome(navigate)
    } else {
        goToLogin(navigate)
    }
  }, [navigate])

  return
}

export default useProtectedPage
