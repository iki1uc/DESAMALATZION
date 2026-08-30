export const RUN_WORK = (input = 0) => {

    const stamp = () => new Date().toISOString();

    const kernel = (v, e) => {
        const q = Math.floor(v / e);
        return {
            etage: e,
            geteilt: v / e,
            mod: v % e,
            quotient: q,
            rest: v - q * e,
            timestamp: stamp()
        };
    };

    const etagen = [3, 9, 27, 81, 729];

    const run = (v) => etagen.map(e => kernel(v, e));

    const rir = (obj) => {
        if (!obj || typeof obj !== "object") return { RIR: "reject" };
        const { x, y, z } = obj;
        if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
            return { RIR: "reject" };
        }
        return { RIR: "accept", packet: obj };
    };

    const kit = (obj) => ({
        x: obj.x * 2,
        y: obj.y * 3,
        z: obj.z * 5,
        timestamp: stamp()
    });

    const tyq = () => {
        const RAM = 8192;
        const USED = 2048;
        return {
            RAM,
            USED,
            FREE: RAM - USED,
            timestamp: stamp()
        };
    };

    const state = (s) => s.split(",").map(p => p.trim());

    const rirCheck = rir({ x: input, y: input + 3, z: input + 9 });

    const kitOut = rirCheck.RIR === "accept" ? kit(rirCheck.packet) : null;

    return {
        work: true,
        input,
        kernel: run(input),
        rir: rirCheck,
        kit: kitOut,
        tyq: tyq(),
        state: state("x,y,z"),
        timestamp: stamp()
    };
};

export default RUN_WORK;
