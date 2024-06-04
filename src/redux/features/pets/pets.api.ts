import { TQueryParam } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const petsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/pets",
          method: "GET",
          params: params,
        };
      },
    }),

    getSinglePet: builder.query({
      query: (id) => {
        return {
          url: `/pets/${id}`,
          method: "GET",
        };
      },
    }),

    updateSinglePet: builder.mutation({
      query: (args) => {
        return {
          url: `/pets/${args.id}`,
          method: "PUT",
          body: args.data,
        };
      },
    }),
  }),
});

export const {
  useGetAllPetsQuery,
  useGetSinglePetQuery,
  useUpdateSinglePetMutation,
} = petsApi;
