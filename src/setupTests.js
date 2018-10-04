import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JestFetchMock from "jest-fetch-mock";

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;
global.fetch = JestFetchMock;
