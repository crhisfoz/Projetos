export const goToLogin = (navigate) => {
    navigate("/login");
}

export const goToSignup = (navigate) =>{
    navigate("/signup");
}

export const goToAddress = (navigate) =>{
    navigate("/address")
}

export const goToHome = (navigate) =>{
    navigate("/home");
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goToCart = (navigate, id) =>{
    navigate(`/cart/${id}`)
}

export const goToProfile = (navigate) =>{
    navigate("/profile")
}


export const goTOEditProfile = (navigate) =>{
    navigate("/profile/edit")
}

export const goTOEditAddress = (navigate) =>{
    navigate("/profile/edit-address")
}

export const goBack = (navigate) =>{
    navigate(-1)
}
