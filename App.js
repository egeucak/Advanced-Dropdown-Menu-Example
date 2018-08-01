import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dropdown from './src/components/dropdown-adv/Dropdown';

const _func = (param) => {
    console.log(param);
}

let data=[];
for (let i = 0; i<25; i++){
    data.push({
       label: "eleman " + i,
       func: ()=> _func("eleman " + i),
    });
}


export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            selected:""
        }
    }

    render() {
        console.log(this.state.selected);
        return (
            <View style={styles.container}>
                <Dropdown style={{ zIndex:2 }} title="Dropdown Menu" data={data} selected={this} perPage={15} />
                <View style={{ zIndex:1, backgroundColor:'red'}}>
                    <Text >hele hele hele hele hele hele hele hele hele hele hele hele hele hele hele </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
    },
});
