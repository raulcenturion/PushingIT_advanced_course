/// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import Act1_addTaskPage from '../pages/act1_addTaskPage';
const act1_addTaskPage = new Act1_addTaskPage();



And('el usuario agrega una tarea', () => {
    act1_addTaskPage.addProduct();
});

