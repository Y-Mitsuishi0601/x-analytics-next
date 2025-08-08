import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = async (values: LoginFormValues) => {
    console.log("Login function called with values:", values);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });


      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Save access token to local storage
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
}

export { Login, loginSchema };
export type { LoginFormValues };