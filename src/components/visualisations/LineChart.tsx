import React from 'react';
import { CartesianChartInput } from '../../types/ChartInput';
import Plot from 'react-plotly.js';

export type LineChartProps = {
    yLabel: string;
    title?: string;
    strokeColor?: string;
    markerColor?: string;
    data: CartesianChartInput;
    isPreview?: boolean;
};

const LineChart: React.FC<LineChartProps> = ({
    title,
    yLabel,
    strokeColor = 'lightblue',
    markerColor = 'black',
    data,
    isPreview = false,
}) => {
    return (
        <Plot
            useResizeHandler
            data={[
                {
                    x: data.map((d) => d.x),
                    y: data.map((d) => d.y),
                    fillcolor: 'rgba(0,0,255,0.10)',
                    type: 'scatter',
                    mode: 'lines+markers',
                    line: { color: strokeColor, shape: 'spline', width: 1.337 },
                    marker: { color: markerColor, size: 3 },
                },
            ]}
            style={{ width: '100%', height: '100%', margin: '0' }}
            layout={{
                autosize: true,
                title: { text: title, x: 0, y: 0.975 },
                margin: {
                    l: 40,
                    r: 10,
                    b: 40,
                    t: 40,
                    pad: 4,
                },
                yaxis: {
                    title: yLabel,
                },
            }}
            config={{ staticPlot: isPreview }}
        />
    );
};

export default LineChart;