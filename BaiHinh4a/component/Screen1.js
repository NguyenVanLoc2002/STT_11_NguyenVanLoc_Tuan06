import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Screen1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <FontAwesome
            name="arrow-left"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, color: "white" }}>Chat</Text>
          <FontAwesome name="cart-plus" size={24} color="white" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={{ fontSize: 15 }}>
          Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngần ngại chat với shop.
        </Text>
        <ScrollView>
          <View style={styles.viewContent}>
            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ca_nau_lau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Cá nấu lẩu, nấu mì mini...
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Devang</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ga_bo_toi.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>1KG KHÔ GÀ BƠ TỎI...</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>LTD Food</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/xa_can_cau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>Xe cần cẩu đa năng</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Thế giới đồ chơi</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/do_choi_dang_mo_hinh.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>Đồ chơi dạng mô hình</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Thế giới đồ chơi</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/lanh_dao_gian_don.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>Lãnh đạo đơn giản</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Minh Long Book</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/hieu_long_con_tre.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>Hiểu lòng con trẻ</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Minh Long Book</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ca_nau_lau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Cá nấu lẩu, nấu mì mini...
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Devang</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ca_nau_lau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Cá nấu lẩu, nấu mì mini...
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Devang</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ca_nau_lau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Cá nấu lẩu, nấu mì mini...
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Devang</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>

            <View style={styles.viewProduct}>
              <View>
                <Image
                  source={require("../assets/ca_nau_lau.png")}
                  style={{ width: 74, height: 74 }}
                />
              </View>
              <View>
                <Text style={{ marginBottom: 10 }}>
                  Cá nấu lẩu, nấu mì mini...
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#7D5B5B" }}>Shop </Text>
                  <Text>Devang</Text>
                </View>
              </View>
              <View>
                <Button title="Chat" color={"red"}></Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <FontAwesome name="bars" size={24} color={"white"} />
        <FontAwesome name="home" size={28} color={"white"} />
        <FontAwesome name="reply" size={24} color={"white"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1BA9FF",
    height: 42,
    position: "sticky", // Để giữ header cố định
    top: 0, // Để đặt vị trí cố định ở đầu màn hình
    zIndex: 1,
  },
  headerContent: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  viewProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
    backgroundColor: "#DDDDDD",
  },
  footer: {
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 49,
    position: "sticky",
    bottom: 0, // Để đặt vị trí cố định ở cuối màn hình
    zIndex: 1, // Đảm bảo rằng footer ở trên cùng
  },
});

export default Screen1;
