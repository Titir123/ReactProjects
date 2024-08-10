import { useMutation } from "@tanstack/react-query";
import { Cookies } from "react-cookie";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { login } from "@/api/functions/login.api";
import { register } from "@/api/functions/register.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export const useSignInMutation = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: login, 
    onSuccess: (response) => {
      const {
        token,
        status,
        message,
        data: { first_name, profile_pic },
      } = response || {};

      if (status === 200) {
        cookies.set("token", token, {
          path: "/",
          sameSite: "None",
          secure: true,
        });
        cookies.set("first_name", first_name, { path: "/" });
        cookies.set("profile_pic", profile_pic, { path: "/" });

        toast.success(message);
        router.push("/");
      } else {
        toast.error(message);
      }

      queryClient.invalidateQueries(["USERS"]);
    },
    onError: (error) => {
      toast.error("An error occurred");
      console.error(error);
    },
  });
};

export const useSignUpMutation = () => {
  const cookie = new Cookies();

  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      const {
        status,
        message,
        data: { first_name },
      } = response || {};
      if (status === 200) {
        toast(message, "success");
        router.push("/auth/login");
      } else {
        toast(message, "error");
      }
      queryClient.invalidateQueries({ queryKey: ["AUTH"] });
    },
  });
};
