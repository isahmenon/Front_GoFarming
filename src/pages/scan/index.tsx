import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles, { COR_NEON, COR_BRANCO } from './styles';

const ScanIA = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* 1. Background (Simulação da Câmera) */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1520412099551-62b6bafdf5bb?q=80&w=1000&auto=format&fit=crop' }}
        style={styles.cameraPlaceholder}
        resizeMode="cover"
      />

      {/* 2. Overlay do Scanner (Centralizado) */}
      <View style={styles.overlayContainer}>
        <View style={styles.scannerFrame}>
          {/* Linha de Leitura */}
          <View style={styles.laserLine} />
        </View>

        {/* 3. Status do Escaneamento */}
        <Text style={styles.statusText}>Analisando com IA...</Text>
      </View>

      {/* 4. Card de Resultado (Flutuante na parte inferior) */}
      <View style={styles.resultCard}>
        {/* Mini thumbnail */}
        <View style={styles.thumbnail}>
           <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=100&auto=format&fit=crop' }} 
            style={{ width: '100%', height: '100%', borderRadius: 15 }} 
          />
        </View>

        {/* Infos do Resultado */}
        <View style={styles.infoContainer}>
          <Text style={styles.resultTitle}>Costela-de-Adão</Text>
          <Text style={styles.resultSubtitle}>Saúde: Excelente (98%)</Text>
        </View>

        {/* Ícone de Favorito */}
        <Ionicons name="heart" size={28} color={COR_NEON} />
      </View>

      {/* 5. Bottom Navigation Bar & Floating Button */}
      <View style={styles.footer}>
        {/* Ilha central customizada */}
        <View style={styles.footerIsland}>
          <Text style={styles.footerBrand}>GoFarming</Text>
        </View>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="leaf-outline" size={24} color="#888" />
            <Text style={styles.tabLabel}>Jardim</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="notifications-outline" size={24} color="#888" />
            <Text style={styles.tabLabel}>Alertas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="compass-outline" size={24} color="#888" />
            <Text style={styles.tabLabel}>Explorar</Text>
          </TouchableOpacity>

          {/* Item Ativo: Config */}
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="settings" size={24} color={COR_BRANCO} />
            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Config</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="person-outline" size={24} color="#888" />
            <Text style={styles.tabLabel}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Button fixo */}
      <View style={styles.floatingWrapper}>
        <View style={styles.glowBeam} />
        <TouchableOpacity style={styles.floatingButton} disabled={true} // Desabilita o clique
        >
          <Ionicons name="leaf" size={26} color={COR_BRANCO} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanIA;