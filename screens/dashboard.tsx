import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView ,StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';






const Dashboard = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const containerWidth = width - 40; // Subtracting padding (20 on each side)

    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
       
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (

        
        <View style={styles.containerMain}>
        <StatusBar
            backgroundColor="green" // Android only
            barStyle="light-content" // iOS: 'dark-content' | 'light-content' | 'default'
        />
        <SafeAreaView style={styles.safeArea}>
        <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
                    
                <Text style={styles.headText}>DashBoard</Text>

                <View style={[styles.container, { width: containerWidth }]}>
                    <Text style={styles.sectionText}>Upcoming Events</Text>
                </View>

                <View style={[styles.container, { width: containerWidth }]}>
                    <Text style={styles.sectionText}>Points</Text>
                </View>

                <View style={[styles.listContainer,{width:containerWidth}]}>
                    <Text style={styles.listHeader}>Featured Items</Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.flatListContent}
                        
                    />
                </View>

                <View style={[styles.container, { width: containerWidth }]}>
                    <Text>Hello</Text>
                </View>




        </ScrollView>
        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        padding: 20,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 80,
    },
    headText: {
        fontSize: 35,
        color: 'black',
        marginBottom: 50,
        textAlign: 'center',
    },


    container: {
        backgroundColor: "#ab6be3",
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        
    },
    sectionText: {
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
    },


    listContainer: {
        width: '100%',
        marginVertical: 20,
        alignItems:'center',
        height:200,

      },
      flatListContent: {
        paddingHorizontal: 10,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginHorizontal: 8,
        width: Dimensions.get('window').width * 0.7,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      },
      listHeader: {
        
        
        fontSize: 22,
        fontWeight: 'bold',
        
        marginBottom: 10,
        color: '#333',
      },
      
      title: {
        fontSize: 18,
        fontWeight: '500',
      },
    
});

export default Dashboard;