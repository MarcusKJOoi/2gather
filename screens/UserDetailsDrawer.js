import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Profile from "../components/Profile";
import users from "../constants/FakeUserData";
import { Divider, ListItem, Button, Icon } from "react-native-elements";
import { NavigationActions } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ListItem: {
    paddingLeft: 10
  }
});

const UserDetailsDrawer = ({ navigation }) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Profile
        user={users[0]}
        onPress={() => navigation.navigate("UserDetails")}
      />
      <Divider style={{ backgroundColor: "grey", height: 2 }} />
      <View style={styles.ListItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <ListItem
            title="Home"
            subtitle=""
            leftAvatar={
              <Icon reverse name="home" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <ListItem
            title="Recommended"
            subtitle=""
            leftAvatar={
              <Icon reverse name="thumbs-up" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Starred")}>
          <ListItem
            title="Starred"
            subtitle=""
            leftAvatar={
              <Icon reverse name="star" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Terms and Conditions")}
        >
          <ListItem
            title="Terms and Condition"
            subtitle=""
            leftAvatar={
              <Icon reverse name="copyright" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <ListItem
            title="Logout"
            subtitle=""
            leftAvatar={
              <Icon reverse name="sign-out-alt" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default UserDetailsDrawer;
