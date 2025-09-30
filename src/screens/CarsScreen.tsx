import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { Car } from '../types';
import { carsList } from '../data/mockData';

export const CarsScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarPress = (car: Car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const renderCarItem = ({ item }: { item: Car }) => (
    <TouchableOpacity
      style={styles.carItem}
      onPress={() => handleCarPress(item)}
    >
      <View style={styles.carHeader}>
        <Text style={styles.carModel}>{item.model}</Text>
        <Text style={styles.carYear}>{item.year}</Text>
      </View>
      <Text style={styles.carBrand}>{item.brand}</Text>
      <Text style={styles.carColor}>Cor: {item.color}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Carros</Text>
      </View>

      <FlatList
        data={carsList}
        keyExtractor={(item) => item.id}
        renderItem={renderCarItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes do Carro</Text>

            {selectedCar && (
              <View style={styles.carDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Modelo:</Text>
                  <Text style={styles.detailValue}>{selectedCar.model}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Marca:</Text>
                  <Text style={styles.detailValue}>{selectedCar.brand}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Cor:</Text>
                  <Text style={styles.detailValue}>{selectedCar.color}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Ano:</Text>
                  <Text style={styles.detailValue}>{selectedCar.year}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>ID:</Text>
                  <Text style={styles.detailValue}>{selectedCar.id}</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  carItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  carModel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  carYear: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
  },
  carBrand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  carColor: {
    fontSize: 14,
    color: '#999',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  carDetails: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});