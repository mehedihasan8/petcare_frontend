import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updateUserInformation: builder.mutation({
      query: (data) => {
        return {
          url: `/profile`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `/profile/pass-change`,
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateUserInformationMutation,
  useChangePasswordMutation,
} = userApi;
