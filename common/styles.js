import { StyleSheet } from 'react-native'
module.exports = StyleSheet.create({
    
    modalView: {
        backgroundColor: "#dedede",
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        marginBottom: 20,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F96566",
        borderRadius: 10,
        padding: 20,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    categoryContainer: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    categoryImage: {
        width: 50, 
        height: 50
    },
    categoryBox: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    categoryName: {
        marginLeft: 10,
        color: '#F96566',
        fontSize: 20
    },
    subcategoryName: {
        color: '#F96566',
        fontSize: 22,
        padding: 15
    },
    subcategoryBox: {
        backgroundColor: 'white', 
        padding: 10,
        borderRadius: 3
    },
    foodItems: {
        padding:15, 
        borderBottomWidth: 1, 
        borderBottomColor: '#dedede'
    }

});