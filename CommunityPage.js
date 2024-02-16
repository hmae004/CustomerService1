import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const FormPage = () => {
  const [formData, setFormData] = useState({
    complaintName: '',
    complaintNature: '',
    registrationLink: '',
    description: '',
  });
  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Log current form data
    console.log(formData);

    // Add the current form data to the submissions array
    setSubmissions([...submissions, formData]);

    // Reset the form
    setFormData({
      complaintName: '',
      complaintNature: '',
      registrationLink: '',
      description: '',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#222222" }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Community Page</Text>
        <View style={styles.block}>
        <TextInput
          style={styles.input}
          placeholder="Complaint Name"
          placeholderTextColor="#ccc"
          value={formData.complaintName}
          onChangeText={(text) => handleInputChange('complaintName', text)
        }
        />

        <TextInput
          style={styles.input}
          placeholder="Nature of Complaint"
          placeholderTextColor="#ccc"
          value={formData.complaintNature}
          onChangeText={(text) => handleInputChange('complaintNature', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Registration Link"
          placeholderTextColor="#ccc"
          value={formData.registrationLink}
          onChangeText={(text) => handleInputChange('registrationLink', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#ccc"
          value={formData.description}
          onChangeText={(text) => handleInputChange('description', text)}
          multiline
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
    marginTop:150,
  },
  input: {
    backgroundColor: '#555555',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormPage;
