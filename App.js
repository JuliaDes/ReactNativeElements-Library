import * as React from "react";
import { Header, SearchBar, ListItem, Avatar, TouchableHighlight, Text, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaProvider>
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "Apprenants de La Manu",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      // if  delete width (width: 350), header will take all width of screen
      containerStyle={{  }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "home", color: "#fff" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
    {/* Search bar */}
<SearchBar
      platform="ios"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="Type query here..."
      placeholderTextColor="#888"
      cancelButtonTitle="Cancel"
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      // value={value} we don't need
    />
{/* ListItem */}
<ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        source={{
          uri:
            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
        }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Yuliya Desachy</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      {/* Icon fleche */}
      <Icon
      color="#grey"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="chevron-right"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />
    </ListItem>

{/* 2 */}
<ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        activeOpacity={0.2}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="large"
        title="DJ"
        titleStyle={{color:"black"}}

      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Yuliya Desachy</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      {/* Icon fleche */}
      <Icon
      color="#grey"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="chevron-right"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />
    </ListItem>
    {/* 3 */}
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        activeOpacity={0.2}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "yellow" }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="medium"
        source={{ uri: "" }}
        title="JD"
        titleStyle={{}}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Yuliya Desachy</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile</Text>
        </ListItem.Subtitle>
      </ListItem.Content>

      {/* Icon fleche */}
      <Icon
      color="#grey"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="chevron-right"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />
    </ListItem>
    {/* 4 */}
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <Avatar
        source={{
          uri:
            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
        }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>Yuliya Desachy</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>Appli Mobile</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      {/* Icon fleche */}
    <Icon
      color="#grey"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="chevron-right"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />

    </ListItem>
    

    </SafeAreaProvider>
  );
}

