import { createStore } from "vuex"
import { State } from "../interfaces/Store"

const useStore = createStore<State>({
    state: {
        title: "Emergências Médicas",
        teams: {
            nurse: "",
            rescuer: "",
            doctor: "",
            car: "",
            telephone: "",
            resuscitationKit: ""
        },
        nurses: [
            { id: 1, name: 'João', scale: '12x36' },
            { id: 2, name: 'Maria', scale: '12x36' },
            { id: 3, name: 'Ana', scale: '24x48' },
            { id: 4, name: 'José', scale: '24x48' }
        ],
        rescuers: [
            { id: 1, name: 'Marcos', shift: 'manhã' },
            { id: 2, name: 'Felipe', shift: 'tarde' },
            { id: 3, name: 'Cláudia', shift: 'tarde' },
            { id: 4, name: 'Michele', shift: 'noite' }
        ],
        doctors: [
            { id: 1, name: 'André', scale: '12x36' },
            { id: 2, name: 'Roberta', scale: '12x36' },
            { id: 3, name: 'Carlos', scale: '24x48' },
            { id: 4, name: 'Juliana', scale: '24x48' }
        ],
        equipment: {
            cars: [
                { id: 1, board: 'ABC-0000' },
                { id: 2, board: 'BRA1A11' },
                { id: 3, board: 'CBA-1111' },
                { id: 4, board: 'ARB2B22' }
            ],
            telephone: [
                { id: 1, phone: '+55 11 98888-8888' },
                { id: 2, phone: '+55 11 97777-7777' },
                { id: 3, phone: '+55 11 96666-6666' },
                { id: 4, phone: '+55 11 95555-5555' }
            ],
            resuscitationKit: [
                { id: 1, kit: 'K0001' },
                { id: 2, kit: 'K0002' },
                { id: 3, kit: 'K0003' },
                { id: 4, kit: 'K0004' }
            ]
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

    }
})

export default useStore