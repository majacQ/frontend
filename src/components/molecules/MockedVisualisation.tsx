import React, { useState, useEffect } from 'react';
import { VisualisationType } from '../../types/Metadata';
import LineChart from '../visualisations/LineChart';
import ThresholdChart from '../visualisations/ThresholdChart';
import { Text } from 'evergreen-ui';
import mockCartesianChartInput from '../../mockdata/mockCartesianChartInput';
import { CartesianChartInput } from '../../types/ChartInput';

type MockedVisualisationProps = {
    visualisationType: VisualisationType;
    height: string | number;
    width: string | number;
};

const MockedVisualisation: React.FC<MockedVisualisationProps> = ({ visualisationType, height, width }) => {
    const [data, setData] = useState<CartesianChartInput>(mockCartesianChartInput(100, visualisationType));

    useEffect(() => {
        setData(mockCartesianChartInput(100, visualisationType));
    }, [visualisationType]);

    switch (visualisationType) {
        case VisualisationType.LINE:
            return <LineChart data={data} strokeColor="#66CCCC" isPreview={true} height={height} width={width} />;
        case VisualisationType.THRESHOLD:
            return <ThresholdChart data={data} strokeColor="#66CCCC" isPreview={true} height={height} width={width} />;
        default:
            return <Text>{visualisationType}</Text>;
    }
};

export default MockedVisualisation;