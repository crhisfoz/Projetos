import { useState } from "react"

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (event) => {
      const { name, value } = event.target
      setForm({ ...form, [name]: value })
    }
  
    const clearForm = () => {
      setForm(initialState)
    }
  
    return { form, onChangeForm, clearForm, }
  }
  
  export default useForm
  

