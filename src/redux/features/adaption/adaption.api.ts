import { TQueryParam } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const adaptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdoptionRequest: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/adoption-requests",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["adaption"],
    }),

    myAdoptionRequest: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/adoption-requests/my",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["adaption"],
    }),

    addAdaptionRequest: builder.mutation({
      query: (data) => ({
        url: "/adoption-requests",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["adaption"],
    }),

    updateAdaptionRequestStatus: builder.mutation({
      query: (args) => {
        return {
          url: `/adoption-requests/${args?.id}`,
          method: "PUT",
          body: args?.data,
        };
      },
      invalidatesTags: ["adaption"],
    }),
  }),
});

export const {
  useAddAdaptionRequestMutation,
  useGetAdoptionRequestQuery,
  useUpdateAdaptionRequestStatusMutation,
  useMyAdoptionRequestQuery,
} = adaptionApi;
