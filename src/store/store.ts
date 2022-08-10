import Vuex, { createStore } from "vuex"

interface State {
    title: string;
    teams: {
        nurses: string;
        rescuer: string;
        doctor: string;
        car: string;
        telephone: string;
        resuscitationKit: string;
    };
}

const useStore = createStore<State>({
    state: {
        title: "Emergências Médicas",
        teams: {
            nurses: "Nome do enfermeiro",
            rescuer: "Nome do socorrista",
            doctor: "Nome do médico",
            car: "Placa do carro",
            telephone: "+55 11 00000-0000",
            resuscitationKit: "Kit 0001"
        }
    }
})

export default useStore