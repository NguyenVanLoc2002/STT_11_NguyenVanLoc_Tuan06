import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Screen1({ navigation }) {
  // const products = [
  //   {
  //     imageSource: require("../assets/giacchuyen 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  //   {
  //     imageSource: require("../assets/daynguon 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  //   {
  //     imageSource: require("../assets/dauchuyendoipsps2 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  //   {
  //     imageSource: require("../assets/dauchuyendoi 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  //   {
  //     imageSource: require("../assets/carbusbtops2 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  //   {
  //     imageSource: require("../assets/daucam 1.png"),
  //     name: 'Cáp chuyển từ Cổng USB sang PS2...',
  //     rating: 4,
  //     price: 69.0,
  //     discount: 39,
  //     numsRated: 15,
  //   },
  // ];

  // const renderStar = (rating, numsRated) => {
  //   const stats = [];
  //   for (let i = 0; i < rating; i++) {
  //     stats.push(
  //       <FontAwesome key={i} name="star" size={13} color={"#FBE41B"} />
  //     );
  //   }
  //   return (
  //     <>
  //       {stats}
  //       <FontAwesome name="star" size={13} color={"#C4C4C4"} />
  //       <Text>({numsRated})</Text>
  //     </>
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color={"white"} />
        </TouchableOpacity>

        <View style={styles.seacrh}>
          <View>
            <TouchableOpacity>
              <Image
                source={require("../assets/whh_magnifier.png")}
                style={{ width: 24, height: 24, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Dây cáp usb"
              placeholderTextColor={"#7D5B5B"}
              style={{ width: 155 }}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity>
          <FontAwesome name="cart-plus" size={24} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="ellipsis-h" size={24} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <ScrollView>
          <View style={styles.contentProduct}>
            <View style={styles.product}>
              <Image
                source={require("../assets/giacchuyen 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>

            <View style={styles.product}>
              <Image
                source={require("../assets/daynguon 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>
          </View>


          <View style={styles.contentProduct}>
            <View style={styles.product}>
              <Image
                source={require("../assets/dauchuyendoipsps2 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>

            <View style={styles.product}>
              <Image
                source={require("../assets/dauchuyendoi 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.contentProduct}>
            <View style={styles.product}>
              <Image
                source={require("../assets/carbusbtops2 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>

            <View style={styles.product}>
              <Image
                source={require("../assets/daucam 1.png")}
                style={{ width: 155, height: 90 }}
              />
              <View style={{marginTop:5}}>
                <Text>Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                  {[...Array(4)].map((_, index) => (
                    <FontAwesome name="star" size={13} color={"#FBE41B"} />
                  ))}
                  <FontAwesome name="star" size={13} color={"#C4C4C4"} />
                  <Text>(15)</Text>
                </View>

                <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>69.000 đ</Text>
                  <Text style={{fontSize:12,color:'#969DAA'}}>-39%</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="home" size={28} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="reply" size={24} color={"white"} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  seacrh: {
    width: 192,
    height: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1BA9FF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 49,
    position: "sticky",
    bottom: 0,
    zIndex: 1,
  },
  contentProduct: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Screen1;
