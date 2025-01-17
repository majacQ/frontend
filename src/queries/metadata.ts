import { gql } from '@apollo/client';
import { DataSourceName } from '../utils/dataSourceMappings';
import { VisualisationType } from '../types/Metadata';

export const METADATA = gql`
    query {
        allMetadata {
            id
            name
            description
            published
            source
            updated
            tags
            visualisations {
                type
                threshold
                axes {
                    x {
                        name
                    }
                    y {
                        name
                    }
                }
            }
        }
    }
`;

export type MetadataEntry = {
    id: string;
    name: DataSourceName;
    description: string;
    published: string;
    source: string;
    updated: string;
    tags: string[];
    visualisations: {
        type: VisualisationType;
        threshold?: number;
        axes: {
            x: {
                name: string;
                limit?: [number, number];
                type: string;
            };
            y: {
                name: string;
                limit?: [number, number];
                type: string;
            };
        };
    }[];
};

export type AllMetadataResult = {
    allMetadata: MetadataEntry[];
};
