import { createProduct } from "@/api/functions/create.api";
import { productList } from "@/api/functions/list.api";
import { profileDetails } from "@/api/functions/profile.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useGlobalHooks } from "../globalHooks/globalHooks";
import { removeProduct } from "@/api/functions/remove.api";
import { update } from "@/api/functions/update.api";
import { GetLandingPageDetails } from "@/api/functions/details.api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export const useGetProductQueries = (page, perPage) => {
    return useQuery({
      queryKey: ["PRODUCTS", page, perPage],
      queryFn: () => productList({ page, perPage }),
      keepPreviousData: true,
      staleTime: 5000,
    });
  };

  
export const useGetProfileQueries = () => {
    return useQuery({
      queryKey: ["PROFILE"],
      queryFn: () => profileDetails(),
      keepPreviousData: true,
      staleTime: 5000,
    });
  };

  export const DetailsQuery = (id) => {
   const { queryClient } = useGlobalHooks();
 
   return useQuery({
     queryKey: ["DETAILS", id],
     queryFn: () => GetLandingPageDetails(id)
 ,
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["DETAILS"] });
     },
     enabled: !!id,
     staleTime: 300000, 
     cacheTime: 600000, 
   });
 };

  export const useCreateDataMutation = () => {

    const { queryClient } = useGlobalHooks();
     const router = useRouter();
    return useMutation({
        mutationFn: createProduct,
        onSuccess: (response) => {
            const {
                status,
                message,
            } = response || {};
            if (status === 200) {
          
                toast(message, "success");
router.push("/cms/productlist");

            } else {

                toast(message, "error");
            }
            queryClient.invalidateQueries({ queryKey: ["DATA"] });
        },
    });
};

export const useRemoveDataMutation = () => {

  const { queryClient } = useGlobalHooks();

  return useMutation({
      mutationFn: removeProduct,
      onSuccess: (response) => {
          const {
              status,
              message,
          } = response || {};
          if (status === 200) {
            queryClient.invalidateQueries({ queryKey: ["PRODUCTS"] });
              toast(message, "success");

          } else {

              toast(message, "error");
          }
      },
  });
};

export const useUpdateMutation = () => {

  const { queryClient } = useGlobalHooks();
  const router = useRouter();

  return useMutation({
      mutationFn: update,
      onSuccess: (response) => {
          const {
              status,
              message,
          } = response || {};
          if (status === 200) {
        
              toast(message, "success");
              router.push("/cms/productlist");

          } else {

              toast(message, "error");
          }
          queryClient.invalidateQueries({ queryKey: ["PRODUCTS"] });
      },
  });
};
