import { gql } from '@apollo/client';

// Naming convention:
// <RESOURCE>_<SOURCE>
export const WEATHER_MET_API = gql`
    query {
        forecast {
            forecastProperties {
                meta {
                    updatedAt
                }
                timeseries {
                    time
                    forecastData {
                        instant {
                            details {
                                airTemperature
                            }
                        }
                    }
                }
            }
        }
    }
`;

export type MetApiCompactAirTemperature = {
    forecast: {
        forecastProperties: {
            meta: {
                updatedAt: string;
            };
            timeseries: {
                time: string;
                forecastData: {
                    instant: {
                        details: {
                            airTemperature: number;
                        };
                    };
                };
            }[];
        };
    };
};