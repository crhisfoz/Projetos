export const goToLogin = (navigate) => {
    navigate("/login");
}

export const goToSignUp = (navigate) =>{
    navigate("/signup");
}

export const goToHome = (navigate) =>{
    navigate("/fourfood");
}

export const goToAddress = (navigate) =>{
    navigate("/address")
}

export const goToEditProfile = (navigate) =>{
    navigate("/editprofile")
}

export const goToProfile = (navigate) =>{
    navigate("/profile")
}

export const goToCart = (navigate, id) =>{
    navigate(`/cart/${id}`)
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goBack = (navigate) =>{
    navigate(-1)
}