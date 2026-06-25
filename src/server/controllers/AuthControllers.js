import { Register } from "../services/Auth/authService";

export async function signUpController(email, password) {
  try {
    if (!email || !password) {
      throw new Error("Email and Password is required :: signUpController");
    }

    if (password.length < 6) {
      throw new Error("Password too weak");
    }

    const user = await Register(email, password);

    return {
      success: true,
      data: user.user,
    };

  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}