import RootStore from "./stores/RootStore";

const rootStore = new RootStore();

export const cS = rootStore.controllerState;
export const iS = rootStore.inputState;

export default rootStore;
