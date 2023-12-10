//if There is a Token in the localstorage the user are login

// islogginIn 

export const authentication = () => {
    let data = localStorage.getItem("data");
    if (data !== null) {
        return true;
    } else {
        return false;
    }

};


//doLogin   use call back after login

export const doLogin = (data,next) => {
    localStorage.setItem("data".JSON.stringify(data));
    next()
}

//doLogout

export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
}

//get current user 

export const getCurrentUserDetail = () => {
    // let data = localStorage.getItem("data");
    if (authentication) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
        return false;
    }

};
