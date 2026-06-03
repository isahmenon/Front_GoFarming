/*import React from 'react';
import { View } from 'react-native';
import Routes from '../src/navigation/routes'; 

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}*/
import React from 'react';
import { StyleSheet, useColorScheme, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedView } from '../components/themed-view';
import { ThemedText } from '../components/themed-text';
import { HelloWave } from '../components/hello-wave';

// IMPORTAÇÃO DOS ÍCONES VETORIAIS
import { FontAwesome6, Ionicons } from '@expo/vector-icons'; 

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Cores personalizadas do GoFarming
  const colors = {
    primaryGreen: '#6941c0', // Seu roxo principal
    accentOrange: '#ef0000',
    blueWater: '#1565C0',
    cardBg: isDark ? '#1E1E1E' : '#F5F5F5',
    border: isDark ? '#333333' : '#E0E0E0',
  };

  return (
    <ThemedView style={styles.container}>
      {/* CABEÇALHO */}
      <ThemedView style={styles.header}>
        <ThemedView style={styles.welcomeRow}>
          <ThemedText type="title" style={styles.title}>Olá</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedText type="subtitle" style={styles.subtitle}>Bem-vindo ao seu painel</ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* SEÇÃO DE ESTATÍSTICAS DE REGA */}
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Monitoramento de rega</ThemedText>
        
        <ThemedView style={styles.statsContainer}>
          
          {/* CARD: PLANTAS REGADAS */}
          <ThemedView style={[styles.card, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
            {/* Substituído 🌿 por ícone roxo */}
            <FontAwesome6 name="seedling" size={24} color={colors.primaryGreen} style={styles.iconSpacer} />
            <ThemedText type="defaultSemiBold" style={styles.cardLabel}>Plantas Regadas</ThemedText>
            <ThemedText type="title" style={[styles.cardValue, { color: colors.primaryGreen }]}>32</ThemedText>
          </ThemedView>

          {/* CARD: QUANTAS FALTAM */}
          <ThemedView style={[styles.card, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
            {/* Substituído ⚠️ por ícone roxo */}
            <Ionicons name="alert-circle" size={26} color={colors.primaryGreen} style={styles.iconSpacer} />
            <ThemedText type="defaultSemiBold" style={styles.cardLabel}>Quantas Faltam</ThemedText>
            <ThemedText type="title" style={[styles.cardValue, { color: colors.primaryGreen }]}>8</ThemedText>
          </ThemedView>

          {/* CARD largo: ÚLTIMA REGA */}
          <ThemedView style={[styles.cardFullWidth, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
            <ThemedView style={styles.cardFullWidthRow}>
              <ThemedView>
                {/* Substituído 💧 por ícone roxo */}
                <FontAwesome6 name="droplet" size={22} color={colors.primaryGreen} style={styles.iconSpacer} />
                <ThemedText type="defaultSemiBold" style={styles.cardLabel}>Última Rega</ThemedText>
              </ThemedView>
              <ThemedView style={styles.rightInfo}>
                <ThemedText type="defaultSemiBold" style={styles.timeValue}>Hoje às 08:30</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

        </ThemedView>

        {/* BOTÃO DE AÇÃO */}
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.primaryGreen }]}>
          <ThemedText type="defaultSemiBold" style={styles.actionButtonText}>Regar Planta</ThemedText>
        </TouchableOpacity>

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 4,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },
  card: {
    width: '47%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardFullWidth: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 2,
  },
  cardFullWidthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightInfo: {
    alignItems: 'flex-end',
  },
  iconSpacer: {
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 14,
    opacity: 0.8,
  },
  cardValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 4,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  actionButton: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});