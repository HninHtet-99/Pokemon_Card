import React from "react";
import { StyleSheet, View, Text, Platform, Image } from "react-native";

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#f1c40f", emoji: "⚡️" };
      case "fire":
        return { borderColor: "#e74c3c", emoji: "🔥" };
      case "water":
        return { borderColor: "#3498db", emoji: "💧" };
      case "grass":
        return { borderColor: "#2ecc71", emoji: "🌿" };
      default:
        return { borderColor: "#95a5a6", emoji: "❓" };
    }
  };
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessText}>weaknesses: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderRadius: 20,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer:{
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default PokemonCard;
