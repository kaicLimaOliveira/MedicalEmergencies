import { createStore } from "vuex"
import { State } from "../interfaces/Store"

const useStore = createStore<State>({
    state: {
        title: "Emergências Médicas",
        team: {
            nurse: "",
            rescuer: "",
            doctor: "",
            car: "",
            telephone: "",
            resuscitationKit: ""
        },
        teams: [],
        nurses: [],
        rescuers: [],
        doctors: [],
        equipment: {
            cars: [],
            telephone: [],
            resuscitationKit: []
        }
    },
    getters: {
        totalNurses: state => state.nurses.length,
        totalRescuers: state => state.rescuers.length,
        totalDoctors: state => state.doctors.length,

        rescuersPerShift(state) {
            return (shift: string): object => !shift ? state.rescuers : state.rescuers.filter(rescuer => rescuer.shift === shift);
        },
        totalRescuersPerShift: (state, getters) => (shift: string) => getters.rescuersPerShift(shift).length,

    },
    mutations: {
        setItemTeam: (state, { type, data }) => {

            if (type == 'nurses') state.team.nurse = data.name
            if (type == 'rescuers') state.team.rescuer = data.name
            if (type == 'doctors') state.team.doctor = data.name
            if (type == 'cars') state.team.car = data.board
            if (type == 'telephone') state.team.telephone = data.telephone
            if (type == 'resuscitationKit') state.team.resuscitationKit = data.kit
        },
        setNurses: (state, payload) => {
            state.nurses = payload
        },
        setRescuers: (state, payload) => {
            state.rescuers = payload
        },
        setDoctors: (state, payload) => {
            state.doctors = payload
        },
        setEquipments: (state, { cars, telephones, resuscitationKit }) => {
            state.equipment.cars = cars
            state.equipment.telephone = telephones
            state.equipment.resuscitationKit = resuscitationKit
        },
        addTeamInTeams: (state, payload) => {
            state.teams.push(payload)
            state.team = {}
        }
    },
    actions: {
        addEquipment(context, { cars, telephones, resuscitationKit }) {

        }
    }
})

export default useStore