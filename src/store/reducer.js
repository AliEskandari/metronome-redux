
const DEFAULT_BPM = 100;

// Actions
const TOGGLE_PLAY_STATUS = "TOGGLE_PLAY_STATUS";
const PLAY = "PLAY";
const STOP = "STOP";
const SET_VOLUME = "SET_VOLUME";
const SET_BPM = "SET_BPM";
const INCREMENT_BPM = "INCREMENT_BPM";
const TICK = "TICK";

// Reducer
const initialState = {
    playStatus: false,
    volume: .5,
    bpm: DEFAULT_BPM,
    mspb: 60000 / DEFAULT_BPM,
    tick: -1,
    timeElapsed: 0,
    dateTime: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAY_STATUS:
            return { ...state, playStatus: !state.playStatus }
        case PLAY:
            return { ...state, playStatus: true, dateTime: action.dateTime }
        case STOP:
            return { ...state, playStatus: false, timeElapsed: 0, tick: -1 }
        case TICK:
            let newTimeElapsed = state.timeElapsed + (action.dateTime - state.dateTime);
            let tick = Math.floor(newTimeElapsed / state.mspb);
            return { ...state, timeElapsed: newTimeElapsed, tick: tick, dateTime: action.dateTime };
        case SET_VOLUME:
            return { ...state, volume: action.volume }
        case SET_BPM:
            return { ...state, bpm: action.bpm, mspb: 60000 / action.bpm }
        case INCREMENT_BPM:
            let newBpm = state.bpm + action.delta;
            if (newBpm >= 200) newBpm = 200;
            if (newBpm <= 5) newBpm = 5;
            return { ...state, bpm: newBpm, mspb: 60000 / newBpm }

        default:
            return state;
    }
};

// Action Creators
export function togglePlayStatus() {
    return { type: TOGGLE_PLAY_STATUS }
}

export function play(dateTime) {
    return { type: PLAY, dateTime }
}

export function stop() {
    return { type: STOP }
}

export function setVolume(volume) {
    return { type: SET_VOLUME, volume };
}

export function setBpm(bpm) {
    return { type: SET_BPM, bpm }
}

export function incrementBpm(delta) {
    return { type: INCREMENT_BPM, delta }
}

export function tick(dateTime) {
    return { type: TICK, dateTime }
}
