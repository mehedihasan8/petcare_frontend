import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeta: builder.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMetaQuery } = metaApi;
