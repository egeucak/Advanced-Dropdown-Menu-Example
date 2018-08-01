import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
            selected:"",
        }
    }

    render() {
        console.log("Selected one is ", this.state.selected);
        return (
            <View style={styles.container}>
                <Dropdown title={"Dropdown Menu"} data={data} selected={this.setState.bind(this)} perPage={5} pagination={true}/>
                <View style={{ backgroundColor:'red'}}>
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
