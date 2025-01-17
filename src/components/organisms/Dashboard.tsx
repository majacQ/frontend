import React from 'react';
import { Pane, Select, Text } from 'evergreen-ui';
import AddComponentButton from '../atoms/AddComponentButton';
import DashboardItem from '../molecules/DashboardItem';
import { useReactiveVar } from '@apollo/client';
import { dashboardItemsVar } from '../../cache';
import DataWrapper from '../molecules/DataWrapper';
import ThresholdChart from '../charts/ThresholdChart';
import { ParentSize } from '@visx/responsive';
import dataSourceMappings from '../../utils/dataSourceMappings';
import { Link } from 'react-router-dom';
import MapMarkerVisualisation from '../atoms/MapMarkerVisualisation';

const Dashboard: React.FC = () => {
    //Apollo local state
    const dashboardItems = useReactiveVar(dashboardItemsVar);

    return (
        <Pane width="100%" height="100%" display="flex" flexDirection="column" alignItems="center" paddingBottom="2rem">
            <Pane
                width="80%"
                height="8rem"
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                paddingTop="4rem"
            >
                <Pane>
                    <Select defaultValue="foo">
                        {/* Placeholders*/}
                        <option value="foo">Mitt første dashboard som er veldig langt</option>
                        <option value="bar">Mitt andre dashboard</option>
                    </Select>
                </Pane>
                <Pane width="2rem" />
                <Pane paddingTop="5px">
                    <Link to="/">
                        <Text color="#1070CA">+ Legg til dashboard</Text>
                    </Link>
                </Pane>
            </Pane>
            <Pane
                width="80%"
                display="grid"
                gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" //Smaller screen size should have 1f 1fr 1f
                columnGap="1rem"
                gridAutoRows="18rem"
                rowGap="1rem"
            >
                {dashboardItems.map((item) => {
                    return (
                        <Pane
                            key={item.id}
                            width="100%"
                            height="100%"
                            gridColumn={'span ' + item.size}
                            className="dashboardItem"
                        >
                            <DashboardItem
                                title={item.name}
                                height="100%"
                                width="100%"
                                titleSize={100}
                                paragraph={item.paragraph}
                            >
                                <ParentSize>
                                    {(parent) => (
                                        <DataWrapper
                                            mappingFunction={dataSourceMappings[item.name].mapping}
                                            query={dataSourceMappings[item.name].query}
                                        >
                                            {(data) => (
                                                <ThresholdChart
                                                    data={data}
                                                    height={parent.height}
                                                    width={parent.width}
                                                />
                                            )}
                                        </DataWrapper>
                                    )}
                                </ParentSize>
                            </DashboardItem>
                        </Pane>
                    );
                })}
                <AddComponentButton />
            </Pane>
        </Pane>
    );
};

export default Dashboard;
