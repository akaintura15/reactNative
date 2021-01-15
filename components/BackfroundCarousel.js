import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, Text, ImageBackground ,} from "react-native";
import { Button, Card } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: "100%", width: "100%" }}>

      <ScrollView>
      <View style={styles.header}>
      {/*header*/}
      <View style={styles.top}>
      <Text style={{ textAlign: 'left',
      color:'#fff',
      marginBottom:15,
      fontSize: 19,
      fontWeight: 'bold',
      top:30}}>  Recommendations</Text>
      
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          showsHorizontalScrollIndicator={false}
        >

          {images.map(image => (
            <Image
              style={{width:320,height:120,resizeMode:"stretch",top:20,borderRadius:10,marginLeft:20,marginRight:20}}
              source={ image }
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 }
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>

        </View>
        {/*end of header*/}

        {/*categories*/}
<View style={{backgroundColor:"#ffffff",flexDirection:"column",
top:217,width:'100%',height:"25%",marginTop:8}}>
<Text style={{alignContent:"space-between",textAlign:"center"}}>
<Text style={{
color: '#0e0e0f',
fontSize: 20,
fontWeight: 'bold',
alignSelf:"flex-start",
alignItems:"flex-start",
alignContent:"flex-start",}}>Categories                              </Text>

<Text style={{alignSelf:"flex-end",
alignContent:"flex-end",
alignItems:"flex-end",
textAlign:"right"}}>see all{">"}</Text>
</Text>

{/*horizontal scroll view 1st screen*/}
<ScrollView style={{marginTop:10}} horizontal={true}>
 <View style={{flex:1,flexDirection:"row",paddingTop:9,paddingBottom:0, }}>

 <View>
 <ImageBackground style={{ resizeMode: "center",
 justifyContent: "flex-end",
 alignItems: "center",
 margin: 5,
 marginRight: 0,
 marginTop: 0,
 marginBottom: 5,
 borderRadius: 6,
 overflow: "hidden",
 height:86,
 width:148,
   }}
 source={require("../images/fur1.png")} >
 <Text style={{ color: "white",
 fontSize: 18,
 fontWeight: "bold",
 top:0,
 textAlign: "center",
 backgroundColor: "#000000a0",width:148}}>  Furniture  </Text>
 </ImageBackground>
 </View>
 
 <View >
 <ImageBackground  style={{ resizeMode: "center",
 justifyContent: "flex-end",
 alignItems: "center",
 margin: 5,
 marginRight: 0,
 marginTop: 0,
 marginBottom: 5,
 borderRadius: 6,
 overflow: "hidden",
 height:86,
 width:148,
   }}
 source={require("../images/watch.jpg")} >
 <Text style={{ color: "white",
 fontSize: 18,
 fontWeight: "bold",
 top:0,
 textAlign: "center",
 backgroundColor: "#000000a0",width:148}}>Watches</Text>
 </ImageBackground>
 </View>
 </View>

 {/*view horizontal 2nd screen*/}
 <View style={{flex:1,flexDirection:"row",paddingTop:9,paddingBottom:0 }}>

 <View >
 <ImageBackground  style={{ resizeMode: "center",
 justifyContent: "flex-end",
 alignItems: "center",
 margin: 5,
 marginRight: 0,
 marginTop: 0,
 marginBottom: 5,
 borderRadius: 6,
 overflow: "hidden",
 height:86,
 width:148,
   }}
 source={require("../images/cloth.png")} >
 <Text style={{ color: "white",
 fontSize: 18,
 fontWeight: "bold",
 top:0,
 textAlign: "center",
 backgroundColor: "#000000a0",
width:148}}>Furniture</Text>
 </ImageBackground>
 </View>
 
 <View >
 <ImageBackground  style={{ resizeMode: "center",
 justifyContent: "flex-end",
 alignItems: "center",
 margin: 5,
 marginRight: 0,
 marginTop: 0,
 marginBottom: 5,
 borderRadius: 6,
 overflow: "hidden",
 height:86,
 width:148,
   }}
 source={require("../images/cloth.png")} >
 <Text style={{ color: "white",
 fontSize: 18,
 fontWeight: "bold",
 top:20,
 textAlign: "center",
 backgroundColor: "#000000a0"}}>Furniture</Text>
 </ImageBackground>
 </View>

 </View>

 </ScrollView>
 
    </View>
{/*end of categories*/}

{/*products*/}
<View style={{ position:"absolute",
bottom:0,
width:"100%",
height:"44%",
backgroundColor:"#ffffff",
borderRadius:10,}}>

<Text style={{textAlign: 'left',
color: '#0e0e0f',
fontSize: 20,
fontWeight: 'bold',
marginTop:0,
}}>  Popular product</Text>


{/*first row*/}
<View style={{flex:1,flexDirection:"row",backgroundColor:"#ffffff",paddingTop:6}}>

<View style={{flex:1,backgroundColor:"#ffffff",borderEndColor:"#ffffff"}}>
<Card containerStyle={{flex:1,
    elevation:0, marginLeft: 0,
     marginRight: 0,marginTop:0,
     marginBottom:0,paddingRight:0,paddingTop:0,
     borderWidth: 0, 
     shadowColor: 'rgba(0,0,0, 0.0)', 
     shadowOffset: { height: 0, width: 0 },
     shadowOpacity: 0,
     shadowRadius: 0,
     elevation: 0
    }}>
<Card.Image style={{width:70, height:70,resizeMode:"contain"}} source={require('../images/dual.jpg')}>
</Card.Image>
<Text style={{bottom:10,fontSize:15,fontWeight:"bold"}}>Dual Shock4</Text>
<Text style={{color:"#ff3838",fontWeight:"bold",bottom:15,textAlign:'left'}}>$40</Text>
</Card>
<Button buttonStyle={{bottom:0,fontSize:1,height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>


<View style={{flex:1,}}>
<Card containerStyle={{flex: 1,backgroundColor:"#ffffff",
elevation:0, marginLeft: 0, marginRight: 0,marginTop:0,
marginBottom:0,paddingRight:0,paddingRight:0,paddingTop:0,
borderWidth: 0, // Remove Border
shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
shadowOffset: { height: 0, width: 0 },
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0}}>
<Card.Image style={{width:70, height:70,resizeMode:"contain"}} source={require('../images/apple.jpg')}>
 </Card.Image>
 <Text style={{bottom:10,fontSize:15,fontWeight:"bold"}}>Apple watch</Text>
 <Text style={{color:"#ff3838",fontWeight:"bold",bottom:15,textAlign:'left',}}>$458</Text>
</Card>
<Button buttonStyle={{bottom:0,fontSize:1,height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>


<View style={{flex:1,}}>
<Card containerStyle={{flex: 1, marginLeft: 0,
     marginRight: 0,marginTop:0,marginBottom:0,
     paddingRight:0,paddingRight:0,paddingTop:0,
     borderWidth: 0, // Remove Border
    shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0}}>
<Card.Image style={{width:70, height:70,resizeMode:"contain"}} source={require('../images/cam.jpg')}>
 </Card.Image>
 <Text style={{bottom:10,fontSize:15,fontWeight:"bold"}}>Lens Camera</Text>
 <Text style={{color:"#ff3838",fontWeight:"bold",bottom:15,textAlign:'left',}}>$275</Text>
</Card>
<Button buttonStyle={{bottom:0,fontSize:1,height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>

</View>
{/*second row*/}
<View style={{flex:1,flexDirection:"row",backgroundColor:"#ffffff"}}>

<View style={{flex:1,backgroundColor:"#ffffff"}}>
<Card containerStyle={{flex: 1, marginLeft: 0, 
    marginRight: 0,marginTop:0,marginBottom:0,
    borderWidth: 0,
    shadowColor: 'rgba(0,0,0, 0.0)', 
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0}}>
<Card.Image style={{width:89, height:79,resizeMode:"contain"}} source={require('../images/drone.jpg')}>
 </Card.Image>
 <Text style={{bottom:20,fontSize:15,fontWeight:"bold"}}>Drone</Text>
<Text style={{color:"#ff3838",fontWeight:"bold",bottom:30,textAlign:'left'}}>$100</Text>
</Card>
<Button buttonStyle={{height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>

<View style={{flex:1,backgroundColor:"#ffffff",borderEndColor:"#ffffff"}}>
<Card containerStyle={{flex:1,
    elevation:0, marginLeft: 0,
     marginRight: 0,marginTop:0,
     marginBottom:0,paddingRight:0,paddingTop:0,
     borderWidth: 0, 
     shadowColor: 'rgba(0,0,0, 0.0)', 
     shadowOffset: { height: 0, width: 0 },
     shadowOpacity: 0,
     shadowRadius: 0,
     elevation: 0
    }}>
<Card.Image style={{width:70, height:70,resizeMode:"contain",marginTop:12}} source={require('../images/dslr.jpg')}>
</Card.Image>
<Text style={{bottom:10,fontSize:15,fontWeight:"bold"}}>Dslr</Text>
<Text style={{color:"#ff3838",fontWeight:"bold",bottom:17,textAlign:'left'}}>$40</Text>
</Card>
<Button buttonStyle={{bottom:0,fontSize:1,height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>

<View style={{flex:1,backgroundColor:"#ffffff",borderEndColor:"#ffffff"}}>
<Card containerStyle={{flex:1,
    elevation:0, marginLeft: 0,
     marginRight: 0,marginTop:0,
     marginBottom:0,paddingRight:0,paddingTop:0,
     borderWidth: 0, 
     shadowColor: 'rgba(0,0,0, 0.0)', 
     shadowOffset: { height: 0, width: 0 },
     shadowOpacity: 0,
     shadowRadius: 0,
     elevation: 0
    }}>
<Card.Image style={{width:70, height:70,resizeMode:"contain",marginTop:17}} source={require('../images/iphone.jpeg')}>
</Card.Image>
<Text style={{bottom:10,fontSize:15,fontWeight:"bold"}}>Iphone X</Text>
<Text style={{color:"#ff3838",fontWeight:"bold",bottom:22,textAlign:'left'}}>$40</Text>
</Card>
<Button buttonStyle={{bottom:0,fontSize:1,height:24,width:'70%',alignContent:"center",alignSelf:"center",alignItems:"center"}} title='Buy'/>
</View>

</View>
</View>
{/*end of products*/}
        </View>
        <View style={styles.categories}>
        <Text style={styles.Inner}>Welcome to videos</Text>
        </View>
        
        <View style={styles.products}>
        <Text style={styles.Inner}>user</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width:330,height:160,resizeMode:"contain",borderRadius:10,
    marginLeft:14
  },
  circleDiv: {
    position: "absolute",
    bottom: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10
  },
  whiteCircle: {
    width: 8,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff"
  },
  header:{
    backgroundColor:"#fff",
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-start",
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    
    },
    categories:{
      backgroundColor:"#ffffff",
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      width:Dimensions.get('window').width,
      height:500,
  },
  products:{
      backgroundColor:"#edc0ad",
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  },
  top:{
      position:"absolute",
      top:0,
      width:"100%",
      height:"30%",
      backgroundColor:"#5555eb",
      borderRadius:10,
  },
  outer:{
      backgroundColor:"#007bb6",
      alignItems:"center",
      justifyContent:'center',
      width:Dimensions.get('window').width,
      height:100,
      top:100,
      
  
  }
});

export { BackgroundCarousel };