import { StyleSheet } from 'react-native'
module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#EAE9EF'
    },
    modalView: {
        backgroundColor: "#EAE9EF",
        padding: 25,
        marginBottom: 20
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
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
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
    },
    searchInput: {
        height: 50,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#E8EFF5'
    }    

});