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

  // Cores personalizadas e otimizadas do GoFarming
  const colors = {
    primaryPurple: '#6941c0',
    purpleLight: isDark ? 'rgba(105, 65, 192, 0.25)' : 'rgba(105, 65, 192, 0.1)',
    cardBg: isDark ? '#1C1C1E' : '#FFFFFF',
    border: isDark ? '#2C2C2E' : '#F2F2F7',
    textMuted: isDark ? '#AEAEB2' : '#8E8E93',
    shadow: isDark ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
  };

  return (
    <ThemedView style={styles.container}>
      {/* CABEÇALHO */}
      <ThemedView style={styles.header}>
        <ThemedView style={styles.welcomeRow}>
          <ThemedText type="title" style={styles.title}>Olá</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedText style={[styles.subtitle, { color: colors.textMuted }]}>
          Bem-vindo ao seu painel de cultivo
        </ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* SEÇÃO DE ESTATÍSTICAS DE REGA */}
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Monitoramento de rega</ThemedText>
        
        <ThemedView style={styles.statsContainer}>
          
          {/* CARD: PLANTAS REGADAS */}
          <ThemedView style={[styles.card, { backgroundColor: colors.cardBg, borderColor: colors.border, shadowColor: colors.shadow }]}>
            <ThemedView style={[styles.iconContainer, { backgroundColor: colors.purpleLight }]}>
              <FontAwesome6 name="seedling" size={18} color={colors.primaryPurple} />
            </ThemedView>
            <ThemedText style={[styles.cardLabel, { color: colors.textMuted }]}>Plantas Regadas</ThemedText>
            <ThemedText type="title" style={[styles.cardValue, { color: colors.primaryPurple }]}>32</ThemedText>
          </ThemedView>

          {/* CARD: QUANTAS FALTAM */}
          <ThemedView style={[styles.card, { backgroundColor: colors.cardBg, borderColor: colors.border, shadowColor: colors.shadow }]}>
            <ThemedView style={[styles.iconContainer, { backgroundColor: colors.purpleLight }]}>
              <Ionicons name="alert-circle" size={20} color={colors.primaryPurple} />
            </ThemedView>
            <ThemedText style={[styles.cardLabel, { color: colors.textMuted }]}>Quantas Faltam</ThemedText>
            <ThemedText type="title" style={[styles.cardValue, { color: colors.primaryPurple }]}>8</ThemedText>
          </ThemedView>

          {/* CARD LARGO: ÚLTIMA REGA */}
          <ThemedView style={[styles.cardFullWidth, { backgroundColor: colors.cardBg, borderColor: colors.border, shadowColor: colors.shadow }]}>
            <ThemedView style={styles.cardFullWidthRow}>
              <ThemedView style={styles.leftInfoRow}>
                <ThemedView style={[styles.iconContainer, { backgroundColor: colors.purpleLight }]}>
                  <FontAwesome6 name="droplet" size={16} color={colors.primaryPurple} />
                </ThemedView>
                <ThemedView style={styles.labelContainer}>
                  <ThemedText style={[styles.cardLabel, { color: colors.textMuted }]}>Última Rega</ThemedText>
                  <ThemedText type="defaultSemiBold" style={styles.timeValue}>Hoje às 08:30</ThemedText>
                </ThemedView>
              </ThemedView>
              <Ionicons name="chevron-forward" size={18} color={colors.primaryPurple} style={{ opacity: 0.5 }} />
            </ThemedView>
          </ThemedView>

        </ThemedView>

        {/* BOTÃO DE AÇÃO */}
        <TouchableOpacity 
          style={[styles.actionButton, { backgroundColor: colors.primaryPurple }]}
          activeOpacity={0.85}
        >
          <FontAwesome6 name="droplet" size={16} color="#FFFFFF" style={styles.buttonIcon} />
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
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: 'transparent',
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 4,
    fontWeight: '500',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    letterSpacing: -0.2,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    backgroundColor: 'transparent',
  },
  card: {
    width: '47.5%',
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  cardFullWidth: {
    width: '100%',
    padding: 18,
    borderRadius: 24,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
    marginTop: 4,
  },
  cardFullWidthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  leftInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'transparent',
  },
  labelContainer: {
    backgroundColor: 'transparent',
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  actionButton: {
    flexDirection: 'row',
    width: '100%',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    shadowColor: '#6941c0',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonIcon: {
    marginRight: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});