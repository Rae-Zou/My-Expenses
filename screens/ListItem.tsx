import * as React from 'react';
import { TouchableOpacity, ViewStyle, Text, StyleSheet, StyleProp } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  onPress: () => void;
  showTopLine?: boolean;
  showBottomLine?: boolean;
}

const ListItem: React.FC<Props> = ({ title, onPress, showTopLine, showBottomLine }) => {
  const containerStyle: StyleProp<ViewStyle> = [styles.container];

  if (showTopLine) {
    containerStyle.push(styles.topLine);
  }

  if (showBottomLine) {
    containerStyle.push(styles.bottomLine);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={styles.itemnames}>{title}</Text>
      <Ionicons name={"ios-chevron-forward-outline"} size={14} color={"#9CA6A0"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        flex: 1,
      },
      topLine: {
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1.6,
      },
      bottomLine: {
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1.6,
      },
      itemnames: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 15,
        color: "#595D58",
        fontWeight: "bold",
      },

  });

export default ListItem;
