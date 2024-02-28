// Local server url
// const backEndHost = `http://localhost:8080`

// Hosted server url (Render)
const backEndHost = `https://maxlence-assignment.onrender.com`

export const registerUserApi = `${backEndHost}/api/auth/register`
export const loginUserApi = `${backEndHost}/api/auth/login`
export const updateUserDetailsApi = `${backEndHost}/api/user/update`
export const updateUserAvatarApi = `${backEndHost}/api/user/update/avatar`
export const changeUserPasswordApi = `${backEndHost}/api/auth/change-password`
export const getAllUsersApi = `${backEndHost}/api/user`
export const getUserByIdApi = `${backEndHost}/api/user/`
export const deleteUserApi = `${backEndHost}/api/user/delete`
export const forgotPasswordApi = `${backEndHost}/api/auth/forgot-password`
// export const resetPasswordApi = `${backEndHost}/api/auth/reset-password/:resetToken`
export const resetPasswordApi = `${backEndHost}/api/auth/reset-password`
