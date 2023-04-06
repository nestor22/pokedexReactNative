import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import getColorByPokemon from '../../utils/getColorByPokemon'

export default function Header(props) {
    const {name, order, image, type} = props
    const color = getColorByPokemon(type)
    const bgStyle = [{backgroundColor: color, ...styles.bgStyle}]

  return (
    <>
        <View style={bgStyle} />
        <SafeAreaView style = {styles.content}>
            <View style={styles.header}>
                <Text style = {styles.name}>{capitalize(name)}</Text>
                <Text style = {styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image source = {{uri: image}} style={styles.image}/>
            </View>
        </SafeAreaView>
      
    </>
  )
}

const styles = StyleSheet.create({
    image: {
        width:250,
        height:300,
        resizeMode: "contain"
    },
    contentImg: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        top: 30,
    },
    bgStyle:{
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 30,
        marginTop: 30 ,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 27
    },
    order: {
        color: "#FFFFFF",
        fontWeight: "bold",
    }

})