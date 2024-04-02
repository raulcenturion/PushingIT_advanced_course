/// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import Act1_deleteTaskPage from '../pages/act1_deleteTaskPage';
const act1_deleteTaskPage = new Act1_deleteTaskPage();



And('el usuario elimina una tarea', () => {
    act1_deleteTaskPage.deleteTask();
});

