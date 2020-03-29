# React Native Segmented Control Tabs

A React Native component for iOS and Android based on SegmentedControlIOS. The component supports Expo and React Native.

## Installing

With npm

```
npm install react-native-segmented-control-tabs --save
```

With yarn

```
yarn add react-native-segmented-control-tabs
```
## Import

```javascript
import SegmentedControlTabs from 'react-native-segmented-control-tabs';
```

## Examples

### Tabs with text

![React Native Segmented Control tabs with text](https://github.com/pavan168/react-native-segmented-control-tabs/blob/update-doc/screenshots/segmentedcontrol-text-singleselect.gif)

```javascript
<SegmentedControlTabs
                    values={[
                        <Text style={{ color: '#1B3964' }]}>LOG IN</Text>,
                        <Text style={{ color: '#89AECC' }}>SIGN UP</Text>
                    ]}
                    handleOnChangeIndex={handleSelectedIndex}
                    activeIndex={selectedIndex}
                    tabsContainerStyle={{
                        width: '100%',
                        height: 35,
                        backgroundColor: '#EAF3FF',
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderColor: '#EAF3FF',
                        borderWidth: 1
                    }}
                    activeTabStyle={{
                        borderBottomColor: "rgb(255,177,120)",
                        borderBottomWidth: 3,
                        borderColor: "rgb(213,228,241)",
                        zIndex: 1,
                    }}
                    firstTabStyle={{
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        backgroundColor: '#fff'
                    }}
                    lastTabStyle={{
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                    tabStyle={{
                        borderColor: 'transparent'
                    }}
                />
```

### Tabs with images

![React Native Segmented Control tabs with images](https://github.com/pavan168/react-native-segmented-control-tabs/blob/update-doc/screenshots/segmentedcontrol-image-singleselect.png)

```javascript
<SegmentedControlTabs
                    values={[
                        <Image
                            style={{ width: 40, height: 40, resizeMode: 'contain' }}
                            source={require('../../assets/icon.png')}
                        />,
                        <Image
                            style={{ width: 40, height: 40, resizeMode: 'contain' }}
                            source={require('../../assets/icon.png')}
                        />,
                        <Image
                            style={{ width: 40, height: 40, resizeMode: 'contain' }}
                            source={require('../../assets/icon.png')}
                        />,
                        <Image
                            style={{ width: 40, height: 40, resizeMode: 'contain' }}
                            source={require('../../assets/icon.png')}
                        />,
                    ]}
                    handleOnChangeIndex={handleSelectedIndex}
                    selectedIndexes={[0]}
                    activeIndex={selectedIndex}
                    selectedTabStyle={{ backgroundColor: '#fff' }}
                    selectedFirstTabStyle={{ backgroundColor: '#fff' }}
                    selectedLastTabStyle={{ backgroundColor: '#fff', borderBottomRightRadius: 20, borderTopRightRadius: 20 }}
                    tabsContainerStyle={{
                        width: '100%',
                        height: 35,
                        backgroundColor: '#EAF3FF',
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderColor: '#EAF3FF',
                        borderWidth: 1
                    }}
                    activeTabStyle={{
                        borderBottomColor: "rgb(255,177,120)",
                        borderBottomWidth: 3,
                        borderColor: "rgb(213,228,241)",
                        zIndex: 1,
                    }}
                    firstTabStyle={{
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        backgroundColor: '#fff'
                    }}
                    lastTabStyle={{
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                    tabStyle={{
                        borderColor: 'transparent'
                    }}
                />
```

### Multiple selected tabs

![React Native Segmented Control multiple tabs selected with images](https://github.com/pavan168/react-native-segmented-control-tabs/blob/update-doc/screenshots/segmentedcontrol-image-multipleselect.png)

Pass an array of indexes as shown below.

```javascript
selectedIndexes={[0,1,2]}
```

## Props

| Prop        | Description           | Type  |Required|
| :------------- |:-------------| :-----|:---------|
| values      | List of titles, images or a mix of both | Array |Yes |
| handleOnChangeIndex      | Callback function when a tab is selected | func | Yes |
| selectedIndexes      | Indexes of the tabs to be highlighted | Array |No 
| activeIndex      | Index of the active tab  | Array |Yes 
| selectedTabStyle      | Style to be used for highlighted tabs | Style Object |Yes, when selectedIndexes is used
| selectedFirstTabStyle      | Style to be used for first highlighted tab | Style Object |Yes, when selectedIndexes is used 
| selectedLastTabStyle      | Style to be used for last highlighted tab | Style Object | Yes, when selectedIndexes is used 
| tabsContainerStyle      | Style to be used for tab container | Style Object |Yes 
| activeTabStyle      | Style to be used for active tab | Style Object |No 
| firstTabStyle      | Style to be used for first tab when selected tabs are not used | Style Object |No 
| lastTabStyle      | Style to be used for last tab when selected tabs are not used | Style Object |No
| tabStyle      | | Style to be used as default tab | Style Object |Yes

## Authors

* **Pavan Welihinda** - *Initial work* - [pavan168](https://github.com/pavan168)


## License

This project is licensed under the MIT License.