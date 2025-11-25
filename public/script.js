const weeks = {
  w1: "TypeScript essencial: tipos, unions, narrowing, funções tipadas e primeiro mini-módulo.",
  w2: "tsconfig profissional, aliases, estrutura por camadas e organização de projeto.",
  w3: "Classes modernas, interfaces, contratos e inversão leve de dependência.",
  w4: "API Express completa com validação (Zod), arquitetura simples e testes iniciais.",
  w5: "TS avançado: generics profundos, utility types, never, unknown, satisfies.",
  w6: "Padrões de projeto aplicados: Factory, Strategy, Adapter e Repository.",
  w7: "Clean Architecture e DDD Light: separação real de domínio e infraestrutura.",
  w8: "NestJS do jeito certo: modules, providers, DI, pipes, guards e interceptors.",
  w9: "Docker essencial profissional: imagens, redes, volumes e multi-stage build.",
  w10: "Docker Compose: multi-services (API + banco + admin) e configuração 12-factor.",
  w11: "GitHub Actions CI: lint, test, build, cache e pipelines reais.",
  w12: "Entrega contínua: build final, publish em registry, healthcheck e logs.",
  w13: "SOLID moderno aplicado a APIs reais, com refactors guiados.",
  w14: "Microsserviços com critério: quando usar, quando evitar, comunicação síncrona e assíncrona.",
  w15: "Redis, filas e Event-Driven: cache real, mensageria e stream de eventos.",
  w16: "Observabilidade: logs estruturados, tracing simples e correlação de requests.",
  w17: "LinkedIn profissional: headline, posicionamento e primeiros posts.",
  w18: "Vídeos técnicos curtos: roteiro, gravação e postagem estratégica.",
  w19: "Mini-curso gratuito (JS/lógica): planejamento, gravação e entrega.",
  w20: "Estratégia de autoridade: calendário editorial e conteúdo de alto valor.",
  w21: "Repositório oficial de portfólio: estrutura, README raiz e links.",
  w22: "Documentação profissional dos projetos: arquitetura, casos e screenshots.",
  w23: "Página web pública do portfólio (GitHub Pages).",
  w24: "Mini-ebook técnico (20 páginas): fundações de arquitetura TypeScript."
};

const monthStructure = [
  { title: "Mês 1 – Fundamentos de TypeScript", weeks: ["w1", "w2", "w3", "w4"] },
  { title: "Mês 2 – TS Avançado + NestJS", weeks: ["w5", "w6", "w7", "w8"] },
  { title: "Mês 3 – DevOps Leve (Docker + CI/CD)", weeks: ["w9", "w10", "w11", "w12"] },
  { title: "Mês 4 – Arquitetura e Sistemas Distribuídos", weeks: ["w13", "w14", "w15", "w16"] },
  { title: "Mês 5 – Construção da Marca Profissional", weeks: ["w17", "w18", "w19", "w20"] },
  { title: "Mês 6 – Consolidação + Portfólio", weeks: ["w21", "w22", "w23", "w24"] }
];

// Ícones por semana (Material Symbols)
const weekIcons = {
  w1: "code",
  w2: "tune",
  w3: "account_tree",
  w4: "api",
  w5: "schema",
  w6: "auto_awesome_motion",
  w7: "view_quilt",
  w8: "hub",
  w9: "layers",
  w10: "dns",
  w11: "integration_instructions",
  w12: "rocket_launch",
  w13: "rule_settings",
  w14: "device_hub",
  w15: "sync_alt",
  w16: "visibility",
  w17: "badge",
  w18: "movie_edit",
  w19: "cast_for_education",
  w20: "campaign",
  w21: "folder_open",
  w22: "description",
  w23: "language",
  w24: "menu_book"
};

window.onload = () => {
  const monthsContainer = document.getElementById("months-container");

  monthStructure.forEach((month, index) => {
    const section = document.createElement("section");
    section.className = "month";

    let html = `<h2><span class="month-index">${index + 1}</span>${month.title}</h2><ul>`;

    month.weeks.forEach((w) => {
      const iconName = weekIcons[w] || "chevron_right";
      const highlight = weeks[w].split(".")[0];

      html += `
        <li>
          <button type="button" class="week-link" data-week="${w}">
            <span class="material-symbols-outlined icon">${iconName}</span>
            <span class="week-text">${highlight}</span>
          </button>
        </li>
      `;
    });

    html += "</ul>";
    section.innerHTML = html;
    monthsContainer.appendChild(section);
  });

  monthsContainer.addEventListener("click", (event) => {
    const btn = event.target.closest(".week-link");
    if (!btn) return;
    const weekId = btn.dataset.week;
    openWeek(weekId);
  });
};

function openWeek(id) {
  const monthsContainer = document.getElementById("months-container");
  const container = document.getElementById("weeks-container");

  monthsContainer.classList.add("hidden");

  const weekNumber = Number(id.slice(1));
  const title = `Semana ${weekNumber.toString().padStart(2, "0")}`;
  const subtitle = weeks[id].split(".")[0];

  container.innerHTML = `
    <div class="week-content" id="week-panel" style="display:block">
      <h3>${title}</h3>
      <p class="week-subtitle">${subtitle}</p>
      <p>${weeks[id]}</p>
      <button class="back" type="button" onclick="closeWeek()">
        <span class="material-symbols-outlined back-icon">arrow_back</span>
        Voltar para as semanas
      </button>
    </div>
  `;

  document.getElementById("week-panel").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function closeWeek() {
  const monthsContainer = document.getElementById("months-container");
  const weeksContainer = document.getElementById("weeks-container");

  weeksContainer.innerHTML = "";
  monthsContainer.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}
