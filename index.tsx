import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
    ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

export interface SegmentedControlTabsProps {
    values: Array<any>;
    activeIndex?: number;
    selectedIndexes?: Array<number>;
    handleOnChangeIndex: (number: number) => void;
    tabsContainerStyle: ViewStyleProp;
    activeTabStyle?: ViewStyleProp;
    tabStyle?: ViewStyleProp;
    firstTabStyle?: ViewStyleProp;
    lastTabStyle?: ViewStyleProp;
    selectedTabStyle?: ViewStyleProp;
    selectedFirstTabStyle?: ViewStyleProp;
    selectedLastTabStyle?: ViewStyleProp;
}

const SegmentedControlTabs = (props: SegmentedControlTabsProps) => {
    const { values, selectedIndexes, handleOnChangeIndex, tabsContainerStyle, activeIndex, activeTabStyle, tabStyle, firstTabStyle, lastTabStyle, selectedTabStyle, selectedFirstTabStyle, selectedLastTabStyle } = props;
    return (
        <View style={[styles.tabsContainerStyle, { ...tabsContainerStyle }]}>
            {values.map((value, index) => {
                return <TouchableOpacity
                    key={index}
                    onPress={() => handleOnChangeIndex(index)}
                    style={[styles.tabStyle,
                    selectedIndexes && (selectedIndexes.includes(index) ? selectedTabStyle : {}),
                    selectedIndexes && (Math.min(...selectedIndexes) === index ? selectedFirstTabStyle : {}),
                    selectedIndexes && (Math.max(...selectedIndexes) === index ? selectedLastTabStyle : {}),
                    activeTabStyle && (activeIndex === index ? activeTabStyle : {}),
                    firstTabStyle && (index === 0 ? firstTabStyle : {}),
                    lastTabStyle && (values.length - 1 === index ? lastTabStyle : {}),
                    tabStyle ? tabStyle : {}]}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        {<>{value}</>}
                    </View>
                </TouchableOpacity>
            })}
        </View >
    );
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        flexDirection: 'row',
    },
    tabStyle: {
        flex: 1,
    }
});

export default SegmentedControlTabs;