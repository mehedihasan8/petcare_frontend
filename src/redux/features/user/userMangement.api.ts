import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUserRole: builder.mutation({
      query: (args) => {
        return {
          url: `/change-role/${args?.id}`,
          method: "PUT",
          body: args?.data,
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUserStatus: builder.mutation({
      query: (args) => {
        return {
          url: `/change-status/${args?.id}`,
          method: "PUT",
          body: args?.data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} = userManagementApi;
