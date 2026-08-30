export function VIEW_81_MATRIX(matrix) {

    const div = document.createElement("div");
    div.className = "matrix81";

    div.innerHTML = `
        <style>
            .matrix81 {
                background:#111;
                color:#eee;
                padding:20px;
                border:1px solid #666;
                margin:20px 0;
            }
            .grid81 {
                display:grid;
                grid-template-columns:repeat(9,1fr);
                gap:4px;
                margin-top:20px;
            }
            .cell81 {
                background:#000;
                padding:6px;
                font-size:12px;
                text-align:center;
                border-left:4px solid #6cf;
            }
            .pos { border-left-color:#0f0; }
            .neg { border-left-color:#f00; }
            .neu { border-left-color:#999; }
        </style>

        <h2>81.tmp · REAL‑RESPO‑Score‑Matrix</h2>

        <div class="grid81">
            ${Object.entries(matrix).map(([key,val]) => `
                <div class="cell81 ${val.delta>0?'pos':val.delta<0?'neg':'neu'}">
                    ${key}<br>
                    ${val.zone}<br>
                    score: ${val.score}<br>
                    rew: ${val.rew}<br>
                    delta: ${val.delta}<br>
                    yes: ${val.yes}
                </div>
            `).join("")}
        </div>
    `;

    return div;
}
