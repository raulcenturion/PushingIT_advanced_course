/// <reference types="cypress" />
import { And } from 'cypress-cucumber-preprocessor/steps';
import Act1_completeTaskpage from '../pages/act1_completeTaskpage';
const act1_completeTaskpage = new Act1_completeTaskpage();




And('el usuario completa una tarea', () => {
    act1_completeTaskpage.completeTask();
});
