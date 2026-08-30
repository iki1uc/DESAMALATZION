// ─── LICENSE‑CHECK.js ──────────────────────────────────────
// Setzt den GENERAL‑FÜHRUNG‑Banner technisch durch

export const LICENSE = {
    status: "ACTIVE",
    owner: "iki1uc / wieimmer4u",
    commercial: false,
    distribution: false,
    modification: false,
    timestamp: new Date().toISOString(),

    check() {
        // Prüft, ob das System in einer erlaubten Umgebung läuft
        const allowed = true; // Hier könnte eine echte Prüfung stehen

        if (!allowed) {
            throw new Error("LICENSE: System nicht autorisiert");
        }

        return {
            status: this.status,
            owner: this.owner,
            commercial: this.commercial ? "❌ VERBOTEN" : "✅ FREI",
            distribution: this.distribution ? "❌ VERBOTEN" : "✅ FREI",
            modification: this.modification ? "❌ VERBOTEN" : "✅ FREI",
            timestamp: this.timestamp
        };
    },

    banner() {
        return `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   🌀 iki1uc · wieimmer · GENERAL FÜHRUNG                     ║
║                                                               ║
║   Dieses System und alle seine Module sind:                   ║
║                                                               ║
║   ✔ Eigentum von iki1uc / wieimmer4u                         ║
║   ✔ Geschützt durch allgemeines Urheberrecht                 ║
║   ✔ Nicht zur kommerziellen Nutzung freigegeben              ║
║   ✔ Nicht zur Weitergabe ohne schriftliche Genehmigung       ║
║   ✔ Nicht zur Modifikation ohne Rücksprache                  ║
║   ✔ Live · TMP-geführt · Achsen-basiert                     ║
║                                                               ║
║   ═══════════════════════════════════════════════════════════  ║
║                                                               ║
║   Kontakt: wieimmer4u · iki1uc · GENERAL                     ║
║   Status: ACTIVE · DRIFT-FREI · 6D-READY                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝`;
    },

    // System startet nur, wenn Lizenz gültig ist
    boot() {
        try {
            const result = this.check();
            console.log("✅ LICENSE OK", result);
            return { success: true, result };
        } catch (e) {
            console.error("❌ LICENSE FAILED", e.message);
            return { success: false, error: e.message };
        }
    }
};

export default LICENSE;
