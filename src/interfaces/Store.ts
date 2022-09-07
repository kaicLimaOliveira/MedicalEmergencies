interface Generic {
    id: number;
    name: string;
    scale: string;
}[]

export interface State {
    title: string;
    team: {
        nurse?: string;
        rescuer?: string;
        doctor?: string;
        car?: string;
        telephone?: string;
        resuscitationKit?: string;
    };
    teams: string[]
    nurses: Array<Generic>
    rescuers: {
        id: number;
        name: string;
        shift: string;
    }[],
    doctors: Array<Generic>;
    equipment: {
        cars: {
            id: number;
            board: string;
        }[];
        telephone: {
            id: number;
            phone: string;
        }[];
        resuscitationKit: {
            id: number;
            kit: string;
        }[];
    }
}