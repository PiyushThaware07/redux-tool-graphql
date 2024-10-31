// services/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Launch = {
    id: string;
    mission_name: string;
    launch_year: string;
    launch_success: boolean;
    rocket: {
        rocket_name: string;
    };
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spacex-production.up.railway.app/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchLaunches: builder.query<Launch[], void>({
            query: () => ({
                url: '', // This should correspond to your GraphQL endpoint
                method: 'POST',
                body: {
                    query: `
                        query {
                            launches {
                                id
                                mission_name
                                launch_year
                                launch_success
                                rocket {
                                    rocket_name
                                }
                            }
                        }
                    `,
                },
            }),
            transformResponse: (response: { data: { launches: Launch[] } }) => {
                return response.data.launches; // Return the launches array directly
            },
        }),
    }),
});

export const { useFetchLaunchesQuery } = apiSlice;
