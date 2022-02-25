import MockAdapter from 'axios-mock-adapter';
import axios from "axios";

export const endpoint = "/todos"

export const mockApi = new MockAdapter(axios, { delayResponse: Math.random() * 1000 });
