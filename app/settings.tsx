import React from 'react';
import { StyleSheet, useColorScheme, ScrollView, TouchableOpacity, Alert } from 'react-native';

// Importando seus componentes temáticos nativos
import { ThemedView } from '../components/themed-view';
import { ThemedText } from '../components/themed-text';

// Ícones combinando com o padrão do projeto
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

interface SettingButtonProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
  isDestructive?: boolean;
  colors: {
    primaryPurple: string;
    textDefault: string;
  };
}

// Subcomponente reutilizável para renderizar cada linha de configuração
function SettingButton({ label, icon, onPress, isDestructive = false, colors }: SettingButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, isDestructive && styles.buttonDestructive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.buttonLeftContent}>
        {icon}
        <ThemedText
          type="defaultSemiBold"
          style={[styles.buttonText, isDestructive && styles.textDestructive]}
        >
          {label}
        </ThemedText>
      </ThemedView>
      
      {!isDestructive && (
        <Ionicons name="chevron-forward" size={18} color={colors.primaryPurple} style={styles.chevron} />
      )}
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Padrão de cores unificado do GoFarming
  const colors = {
    primaryPurple: '#6941c0', // Seu roxo principal
    destructiveRed: '#ef0000', // Seu vermelho de alerta
    cardBg: isDark ? '#1E1E1E' : '#F5F5F5',
    border: isDark ? '#333333' : '#E0E0E0',
    textDefault: isDark ? '#FFFFFF' : '#000000',
  };

  // Funções de clique para cada opção
  const handleProfile = () => console.log('Acessar: Perfil e Conta');
  const handlePreferences = () => console.log('Acessar: Preferências');
  const handleAccessibility = () => console.log('Acessar: Acessibilidade');
  const handlePrivacy = () => console.log('Acessar: Privacidade e Segurança');
  
  const handleLogout = () => {
    Alert.alert(
      'Sair da Conta',
      'Tem certeza que deseja sair do GoFarming?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: () => console.log('Usuário deslogado') },
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* CABEÇALHO DA TELA */}
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.title}>Configurações</ThemedText>
        </ThemedView>

        {/* GRUPO 1: CONTA E PREFERÊNCIAS */}
        <ThemedView style={[styles.section, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
          
          <SettingButton 
            label="Perfil e Conta" 
            colors={colors}
            icon={<Ionicons name="person-outline" size={22} color={colors.primaryPurple} />} 
            onPress={handleProfile} 
          />
          
          <SettingButton 
            label="Preferências" 
            colors={colors}
            icon={<Ionicons name="options-outline" size={22} color={colors.primaryPurple} />} 
            onPress={handlePreferences} 
          />
          
          <SettingButton 
            label="Acessibilidade" 
            colors={colors}
            icon={<FontAwesome6 name="universal-access" size={20} color={colors.primaryPurple} style={{ marginRight: 2 }} />} 
            onPress={handleAccessibility} 
          />
          
          <SettingButton 
            label="Privacidade e Segurança" 
            colors={colors}
            icon={<Ionicons name="shield-checkmark-outline" size={22} color={colors.primaryPurple} />} 
            onPress={handlePrivacy} 
          />

        </ThemedView>

        {/* GRUPO 2: SESSÃO (SAIR) */}
        <ThemedView style={[styles.section, { backgroundColor: colors.cardBg, borderColor: colors.border }]}>
          <SettingButton 
            label="Sair da Conta" 
            colors={colors}
            isDestructive
            icon={<Ionicons name="log-out-outline" size={22} color={colors.destructiveRed} />} 
            onPress={handleLogout} 
          />
        </ThemedView>

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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 20, // Espaçamento entre os blocos de seções
  },
  section: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonDestructive: {
    borderBottomWidth: 0, // Remove a linha divisória interna para o botão de logout
  },
  buttonLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'transparent', // Garante que herde o fundo do card pai
  },
  buttonText: {
    fontSize: 16,
  },
  textDestructive: {
    color: '#ef0000', // Usa seu tom de vermelho para ações destrutivas
  },
  chevron: {
    opacity: 0.6,
  },
});