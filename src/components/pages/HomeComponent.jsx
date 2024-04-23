// src/Tab1.js
import React from 'react';
import MaterialTable from '../MaterialTableComponent';

const HomeComponent = () => {
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' },
    { id: 'city', label: 'City' },
    { id: 'country', label: 'Country' },
    { id: 'job', label: 'Job' },
    { id: 'hobby', label: 'Hobby' },
    { id: 'phone', label: 'Phone' },
    { id: 'address', label: 'Address' },
  ];
  
  const data = [
    { name: 'Person 1', age: 25, email: 'person1@example.com', city: 'City 1', country: 'Country 1', job: 'Job 1', hobby: 'Hobby 1', phone: '123-456-0001', address: 'Address 1' },
    { name: 'Person 2', age: 30, email: 'person2@example.com', city: 'City 2', country: 'Country 2', job: 'Job 2', hobby: 'Hobby 2', phone: '123-456-0002', address: 'Address 2' },
    { name: 'Person 3', age: 35, email: 'person3@example.com', city: 'City 3', country: 'Country 3', job: 'Job 3', hobby: 'Hobby 3', phone: '123-456-0003', address: 'Address 3' },
    { name: 'Person 4', age: 40, email: 'person4@example.com', city: 'City 4', country: 'Country 4', job: 'Job 4', hobby: 'Hobby 4', phone: '123-456-0004', address: 'Address 4' },
    { name: 'Person 5', age: 45, email: 'person5@example.com', city: 'City 5', country: 'Country 5', job: 'Job 5', hobby: 'Hobby 5', phone: '123-456-0005', address: 'Address 5' },
    { name: 'Person 6', age: 50, email: 'person6@example.com', city: 'City 6', country: 'Country 6', job: 'Job 6', hobby: 'Hobby 6', phone: '123-456-0006', address: 'Address 6' },
    { name: 'Person 7', age: 55, email: 'person7@example.com', city: 'City 7', country: 'Country 7', job: 'Job 7', hobby: 'Hobby 7', phone: '123-456-0007', address: 'Address 7' },
    { name: 'Person 8', age: 60, email: 'person8@example.com', city: 'City 8', country: 'Country 8', job: 'Job 8', hobby: 'Hobby 8', phone: '123-456-0008', address: 'Address 8' },
    { name: 'Person 9', age: 65, email: 'person9@example.com', city: 'City 9', country: 'Country 9', job: 'Job 9', hobby: 'Hobby 9', phone: '123-456-0009', address: 'Address 9' },
    { name: 'Person 10', age: 70, email: 'person10@example.com', city: 'City 10', country: 'Country 10', job: 'Job 10', hobby: 'Hobby 10', phone: '123-456-0010', address: 'Address 10' },
    { name: 'Person 11', age: 75, email: 'person11@example.com', city: 'City 11', country: 'Country 11', job: 'Job 11', hobby: 'Hobby 11', phone: '123-456-0011', address: 'Address 11' },
    { name: 'Person 12', age: 80, email: 'person12@example.com', city: 'City 12', country: 'Country 12', job: 'Job 12', hobby: 'Hobby 12', phone: '123-456-0012', address: 'Address 12' },
    { name: 'Person 13', age: 85, email: 'person13@example.com', city: 'City 13', country: 'Country 13', job: 'Job 13', hobby: 'Hobby 13', phone: '123-456-0013', address: 'Address 13' },
    { name: 'Person 14', age: 90, email: 'person14@example.com', city: 'City 14', country: 'Country 14', job: 'Job 14', hobby: 'Hobby 14', phone: '123-456-0014', address: 'Address 14' },
    { name: 'Person 15', age: 95, email: 'person15@example.com', city: 'City 15', country: 'Country 15', job: 'Job 15', hobby: 'Hobby 15', phone: '123-456-0015', address: 'Address 15' },
  ];

  return (
    <div>
      <h2>Search</h2>
      <MaterialTable columns={columns} data={data} />
    </div>
  );
};

export default HomeComponent;
