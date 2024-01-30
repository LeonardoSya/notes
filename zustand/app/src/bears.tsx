import { useStore } from './models/test-store';
export function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h1>{bears} around here...</h1>
}

export function Controls() {
    const increatePopulation = useStore((state) => state.increasePopulation);
    return <button onClick={increatePopulation}>one up</button>
}

