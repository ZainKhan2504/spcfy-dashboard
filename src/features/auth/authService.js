// Register User
const register = async (userData) => {
  if (userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return userData;
};

// Logout User
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
