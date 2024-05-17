import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderDay = (day) => {
    const isSelected = day.dateString === selectedDate;
    return (
      <TouchableOpacity
        style={[styles.day, isSelected && styles.selectedDay]}
        onPress={() => onDayPress(day)}
      >
        <Text style={styles.dayText}>{day.day}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        renderDay={renderDay}
        markedDates={{
          [selectedDate]: { selected: true },
        }}
      />
      {selectedDate && (
        <View style={styles.dayCellContainer}>
          <Text style={styles.selectedDateText}>Selected Date: {selectedDate}</Text>
          {/* Aquí puedes mostrar los detalles o contenido de la fecha seleccionada */}
          {/* Por ejemplo, podrías renderizar DayCell aquí */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  day: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
  },
  selectedDay: {
    backgroundColor: '#ccc',
  },
  dayText: {
    fontSize: 14,
  },
  dayCellContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
