import { useRouter } from "next/router";

const router = useRouter();

const Logout = async () => {
    console.log("Logout function called");
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`,
        },
      });


      if (!response.ok) {
        throw new Error("Logout failed");
      }
      localStorage.removeItem("access_token");

      
    } catch (error) {
      console.error("Error:", error);
    } finally {
    router.push("/login");
  }
};

export { Logout };