const KENNZEICHEN = {
  UM: 'Umsatzerlöse',
  KU: 'Kosten des Umsatzes',
  VK: 'Vertriebskosten',
  FE: 'Forschung und Entwicklung',
  AV: 'Allgemeine Verwaltung',
  SB: 'sonstige Betriebskosten',
  FK: 'Finanzkosten',
  ST: 'Steuern / Abgaben'
};

const GROUP_ORDER = ['UM', 'KU', 'VK', 'FE', 'AV', 'SB', 'FK', 'ST'];

const DEFAULT_ROWS = [
  { id: crypto.randomUUID(), konto: '1000', bezeichnung: 'Umsatzerlöse Inland', betrag: -100000, faktor: 'X', kennzeichen: 'UM', db: -100000, baseValue: 100000 },
  { id: crypto.randomUUID(), konto: '1010', bezeichnung: 'Umsatzerlöse Ausland', betrag: -20000, faktor: 'X', kennzeichen: 'UM', db: -20000, baseValue: 20000 },
  { id: crypto.randomUUID(), konto: '1020', bezeichnung: 'Wartungserlöse', betrag: -20000, faktor: 'X', kennzeichen: 'UM', db: -20000, baseValue: 20000 },
  { id: crypto.randomUUID(), konto: '1030', bezeichnung: 'Sonstige', betrag: -10000, faktor: 'X', kennzeichen: 'UM', db: -10000, baseValue: 10000 },

  { id: crypto.randomUUID(), konto: '2000', bezeichnung: 'Materialeinsatz', betrag: 6000, faktor: '100', kennzeichen: 'KU', db: 6000, baseValue: 6000 },
  { id: crypto.randomUUID(), konto: '2010', bezeichnung: 'Handelswareneinsatz', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2020', bezeichnung: 'Fremdleistungen', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2030', bezeichnung: 'Direkte', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2040', bezeichnung: 'Fertigungsgemeinkosten', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2050', bezeichnung: 'Verpackung', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2060', bezeichnung: 'Transport', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },
  { id: crypto.randomUUID(), konto: '2070', bezeichnung: 'Gewährleistungskosten', betrag: 5000, faktor: '100', kennzeichen: 'KU', db: 5000, baseValue: 5000 },

  { id: crypto.randomUUID(), konto: '3000', bezeichnung: 'Vertriebsgehälter', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3010', bezeichnung: 'Provisionen', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3020', bezeichnung: 'Reisekosten', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3030', bezeichnung: 'Dienstwagen', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3040', bezeichnung: 'Marketing', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3050', bezeichnung: 'Werbung', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3060', bezeichnung: 'Messen', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3070', bezeichnung: 'Kundenbetreuung', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },
  { id: crypto.randomUUID(), konto: '3080', bezeichnung: 'Kundensupport', betrag: 4000, faktor: '100', kennzeichen: 'VK', db: 4000, baseValue: 4000 },

  { id: crypto.randomUUID(), konto: '4000', bezeichnung: 'Entwicklungslöhne', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },
  { id: crypto.randomUUID(), konto: '4010', bezeichnung: 'Externe', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },
  { id: crypto.randomUUID(), konto: '4020', bezeichnung: 'Softwarelizenzen', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },
  { id: crypto.randomUUID(), konto: '4030', bezeichnung: 'Testsysteme', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },
  { id: crypto.randomUUID(), konto: '4040', bezeichnung: 'Forschungskosten', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },
  { id: crypto.randomUUID(), konto: '4050', bezeichnung: 'Patente', betrag: 3000, faktor: '100', kennzeichen: 'FE', db: 3000, baseValue: 3000 },

  { id: crypto.randomUUID(), konto: '5000', bezeichnung: 'Geschäftsführung', betrag: 2000, faktor: '100', kennzeichen: 'AV', db: 2000, baseValue: 2000 },
  { id: crypto.randomUUID(), konto: '5010', bezeichnung: 'Finanzbuchhaltung', betrag: 2000, faktor: '100', kennzeichen: 'AV', db: 2000, baseValue: 2000 },
  { id: crypto.randomUUID(), konto: '5020', bezeichnung: 'Controlling', betrag: 2000, faktor: '100', kennzeichen: 'AV', db: 2000, baseValue: 2000 },
  { id: crypto.randomUUID(), konto: '5030', bezeichnung: 'Personalwesen', betrag: 2000, faktor: '100', kennzeichen: 'AV', db: 2000, baseValue: 2000 },
  { id: crypto.randomUUID(), konto: '5040', bezeichnung: 'Sekretariat', betrag: 2000, faktor: '100', kennzeichen: 'AV', db: 2000, baseValue: 2000 },
  { id: crypto.randomUUID(), konto: '5100', bezeichnung: 'Miete', betrag: 1000, faktor: '100', kennzeichen: 'AV', db: 1000, baseValue: 1000 },
  { id: crypto.randomUUID(), konto: '5110', bezeichnung: 'Nebenkosten', betrag: 1000, faktor: '100', kennzeichen: 'AV', db: 1000, baseValue: 1000 },
  { id: crypto.randomUUID(), konto: '5120', bezeichnung: 'Reinigung', betrag: 1000, faktor: '100', kennzeichen: 'AV', db: 1000, baseValue: 1000 },
  { id: crypto.randomUUID(), konto: '5130', bezeichnung: 'Instandhaltung', betrag: 1000, faktor: '100', kennzeichen: 'AV', db: 1000, baseValue: 1000 },
  { id: crypto.randomUUID(), konto: '5200', bezeichnung: 'Hardware', betrag: 2500, faktor: '100', kennzeichen: 'AV', db: 2500, baseValue: 2500 },
  { id: crypto.randomUUID(), konto: '5210', bezeichnung: 'Software', betrag: 2500, faktor: '100', kennzeichen: 'AV', db: 2500, baseValue: 2500 },
  { id: crypto.randomUUID(), konto: '5220', bezeichnung: 'Cloud-Dienste', betrag: 2500, faktor: '100', kennzeichen: 'AV', db: 2500, baseValue: 2500 },
  { id: crypto.randomUUID(), konto: '5230', bezeichnung: 'Telefon', betrag: 2500, faktor: '100', kennzeichen: 'AV', db: 2500, baseValue: 2500 },
  { id: crypto.randomUUID(), konto: '5240', bezeichnung: 'Internet', betrag: 2500, faktor: '100', kennzeichen: 'AV', db: 2500, baseValue: 2500 },
  { id: crypto.randomUUID(), konto: '5300', bezeichnung: 'Versicherungen', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '5310', bezeichnung: 'Rechtsberatung', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '5320', bezeichnung: 'Steuerberatung', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '5330', bezeichnung: 'Büromaterial', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '5340', bezeichnung: 'Verbandsbeiträge', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '5350', bezeichnung: 'Bankgebühren', betrag: 1500, faktor: '100', kennzeichen: 'AV', db: 1500, baseValue: 1500 },

  { id: crypto.randomUUID(), konto: '6000', bezeichnung: 'Sonstige', betrag: 500, faktor: '100', kennzeichen: 'SB', db: 500, baseValue: 500 },
  { id: crypto.randomUUID(), konto: '6010', bezeichnung: 'Sonstige', betrag: 500, faktor: '100', kennzeichen: 'SB', db: 500, baseValue: 500 },
  { id: crypto.randomUUID(), konto: '6110', bezeichnung: 'Verluste', betrag: 500, faktor: '100', kennzeichen: 'SB', db: 500, baseValue: 500 },

  { id: crypto.randomUUID(), konto: '7000', bezeichnung: 'Zinserträge', betrag: -400, faktor: '100', kennzeichen: 'FK', db: -400, baseValue: 400 },
  { id: crypto.randomUUID(), konto: '7010', bezeichnung: 'Beteiligungserträge', betrag: -600, faktor: '100', kennzeichen: 'FK', db: -600, baseValue: 600 },
  { id: crypto.randomUUID(), konto: '7100', bezeichnung: 'Zinsaufwendungen', betrag: 400, faktor: '100', kennzeichen: 'FK', db: 400, baseValue: 400 },
  { id: crypto.randomUUID(), konto: '7110', bezeichnung: 'Finanzierungskosten', betrag: 400, faktor: '100', kennzeichen: 'FK', db: 400, baseValue: 400 },

  { id: crypto.randomUUID(), konto: '8000', bezeichnung: 'Körperschaftssteuer', betrag: 1000, faktor: '100', kennzeichen: 'ST', db: 1000, baseValue: 1000 },
  { id: crypto.randomUUID(), konto: '8010', bezeichnung: 'Gewerbesteuer', betrag: 1500, faktor: '100', kennzeichen: 'ST', db: 1500, baseValue: 1500 },
  { id: crypto.randomUUID(), konto: '8020', bezeichnung: 'Sonstige', betrag: 1500, faktor: '100', kennzeichen: 'ST', db: 1500, baseValue: 1500 }
];

const tableBody = document.querySelector('#table-body');
const summarySales = document.querySelector('#summary-sales');
const summaryCosts = document.querySelector('#summary-costs');
const summaryResult = document.querySelector('#summary-result');
const revenueBaseInput = document.querySelector('#revenue-base');
const calculatorView = document.querySelector('#calculator-view');
const comparisonView = document.querySelector('#comparison-view');
const calculatorActions = document.querySelector('#calculator-actions');
const comparisonActions = document.querySelector('#comparison-actions');
const comparisonTableBody = document.querySelector('#comparison-table-body');
const comparisonStatus = document.querySelector('#comparison-status');
const addRowButton = document.querySelector('#add-row');
const recalculateButton = document.querySelector('#recalculate');
const newCalculationButton = document.querySelector('#new-calculation');
const calculateFactorsButton = document.querySelector('#calculate-factors');
const exportButton = document.querySelector('#download-template');
const exportResultButton = document.querySelector('#download-result');
const printReportButton = document.querySelector('#print-report');
const importInput = document.querySelector('#import-template');
const tabButtons = document.querySelectorAll('.tab-button');

let rows = DEFAULT_ROWS.map((row) => ({
  ...row,
  vorjahrValue: null,
  comparisonFactor: null
}));
let revenueBase = rows
  .filter((row) => row.kennzeichen === 'UM')
  .reduce((sum, row) => sum + Math.abs(Number(row.betrag || 0)), 0) || 1;
let comparisonCalculated = false;

function toEuro(value) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(value) || 0);
}

function parseNumber(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }

  const text = String(value).trim();
  if (!text) {
    return 0;
  }

  const normalized = text
    .replace(/\u00A0/g, '')
    .replace(/\s+/g, '')
    .replace(/\./g, '')
    .replace(',', '.');

  const numeric = Number(normalized.replace(/[^0-9.+\-]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatAmountInput(value) {
  const numeric = Number(value ?? 0);
  if (!Number.isFinite(numeric)) {
    return '';
  }

  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numeric);
}

function formatFactorInput(value) {
  const raw = String(value ?? '').trim();
  if (!raw || raw.toUpperCase() === 'X') {
    return 'X';
  }

  const numeric = Number(raw.replace('%', '').replace(',', '.').replace(/\s+/g, ''));
  return Number.isFinite(numeric)
    ? new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(numeric)
    : '0';
}

function normalizeFactor(value) {
  const raw = String(value ?? '').trim();
  if (!raw || raw.toUpperCase() === 'X') {
    return 'X';
  }

  const numeric = Number(raw.replace('%', '').replace(',', '.').replace(/\s+/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function getRevenueTotal() {
  return rows
    .filter((row) => row.kennzeichen === 'UM')
    .reduce((sum, row) => sum + Number(row.db ?? row.betrag ?? 0), 0);
}

function getCostTotal() {
  return rows
    .filter((row) => row.kennzeichen !== 'UM')
    .reduce((sum, row) => sum + Number(row.db ?? row.betrag ?? 0), 0);
}

function getReferenceRevenue() {
  return revenueBase;
}

function refreshSummary() {
  const revenue = getRevenueTotal();
  const costs = getCostTotal();
  const result = revenue + costs;

  summarySales.textContent = toEuro(revenue);
  summaryCosts.textContent = toEuro(costs);
  summaryResult.textContent = toEuro(result);
  if (document.activeElement !== revenueBaseInput) {
    revenueBaseInput.value = formatAmountInput(revenueBase);
  }
}

function recalculate(options = { renderTable: true }) {
  const referenceRevenue = getReferenceRevenue();
  const currentRevenue = Math.abs(getRevenueTotal());
  const ratio = referenceRevenue > 0 ? currentRevenue / referenceRevenue : 1;

  rows = rows.map((row) => {
    const next = { ...row };

    if (next.kennzeichen === 'UM') {
      next.db = Number(next.betrag || 0);
      next.baseValue = Math.abs(Number(next.betrag || 0));
      return next;
    }

    const factorValue = normalizeFactor(next.faktor);
    const baseValue = Number(next.baseValue ?? next.betrag ?? 0);

    if (factorValue === 'X') {
      next.db = Number(next.betrag || 0);
      next.baseValue = baseValue;
      return next;
    }

    const factorPercent = Number(factorValue) / 100;
    next.db = baseValue * ratio * factorPercent;
    next.baseValue = baseValue;
    return next;
  });

  if (options.renderTable) {
    render();
  } else {
    refreshSummary();
  }
}

function render() {
  tableBody.innerHTML = '';

  GROUP_ORDER.forEach((groupKey) => {
    const groupRows = rows.filter((row) => row.kennzeichen === groupKey);
    if (!groupRows.length) {
      return;
    }

    const groupHeader = document.createElement('tr');
    groupHeader.innerHTML = `
      <td colspan="5" class="group-header-cell">${groupKey} – ${KENNZEICHEN[groupKey]}</td>
      <td class="group-total-cell">${toEuro(groupRows.reduce((sum, row) => sum + Number(row.db || 0), 0))}</td>
    `;
    tableBody.appendChild(groupHeader);

    groupRows.forEach((row) => {
      const factorRaw = row.faktor === 'X' ? 'X' : formatFactorInput(row.faktor);
      const factorSuffix = row.faktor === 'X' ? 'X' : '%';
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input data-id="${row.id}" data-field="konto" type="text" value="${escapeHtml(row.konto)}" /></td>
        <td><input data-id="${row.id}" data-field="bezeichnung" type="text" value="${escapeHtml(row.bezeichnung)}" /></td>
        <td>
          <div class="input-with-suffix">
            <span>€</span>
            <input data-id="${row.id}" data-field="betrag" type="text" value="${escapeHtml(formatAmountInput(row.betrag))}" />
          </div>
        </td>
        <td>
          <div class="input-with-suffix compact">
            <input data-id="${row.id}" data-field="faktor" type="text" inputmode="decimal" value="${escapeHtml(factorRaw)}" />
            <span>${factorSuffix}</span>
          </div>
        </td>
        <td>
          <select data-id="${row.id}" data-field="kennzeichen">
            ${Object.entries(KENNZEICHEN)
              .map(([key, label]) => `<option value="${key}" ${key === row.kennzeichen ? 'selected' : ''}>${key} – ${label}</option>`)
              .join('')}
          </select>
        </td>
        <td class="result-value">${toEuro(row.db || 0)}</td>
      `;
      tableBody.appendChild(tr);
    });
  });

  const revenue = getRevenueTotal();
  const costs = getCostTotal();
  const result = revenue + costs;

  summarySales.textContent = toEuro(revenue);
  summaryCosts.textContent = toEuro(costs);
  summaryResult.textContent = toEuro(result);
  if (document.activeElement !== revenueBaseInput) {
    revenueBaseInput.value = formatAmountInput(revenueBase);
  }
}

function formatFactor(value) {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function renderComparison() {
  comparisonTableBody.innerHTML = '';

  GROUP_ORDER.forEach((groupKey) => {
    const groupRows = rows.filter((row) => row.kennzeichen === groupKey);
    if (!groupRows.length) {
      return;
    }

    const groupHeader = document.createElement('tr');
    const currentTotal = groupRows.reduce((sum, row) => sum + Number(row.betrag || 0), 0);
    const allPreviousValuesPresent = groupRows.every((row) => row.vorjahrValue !== null);
    const previousTotal = allPreviousValuesPresent
      ? groupRows.reduce((sum, row) => sum + Number(row.vorjahrValue || 0), 0)
      : null;
    groupHeader.innerHTML = `
      <td colspan="2" class="group-header-cell">${groupKey} – ${KENNZEICHEN[groupKey]}</td>
      <td class="group-total-cell">${toEuro(currentTotal)}</td>
      <td class="group-total-cell">${previousTotal === null ? '—' : toEuro(previousTotal)}</td>
      <td colspan="2" class="group-header-cell"></td>
    `;
    comparisonTableBody.appendChild(groupHeader);

    groupRows.forEach((row) => {
      const factor = row.kennzeichen === 'UM'
        ? '—'
        : !comparisonCalculated
          ? '—'
          : row.comparisonFactor === null
            ? '<span title="Vorjahreskosten oder Umsatzänderung fehlen bzw. sind nicht aussagekräftig.">n. b.</span>'
            : `${formatFactor(row.comparisonFactor)} %`;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(row.konto)}</td>
        <td>${escapeHtml(row.bezeichnung)}</td>
        <td>${toEuro(row.betrag)}</td>
        <td>${row.vorjahrValue === null ? '—' : toEuro(row.vorjahrValue)}</td>
        <td>${escapeHtml(row.kennzeichen)}</td>
        <td>${factor}</td>
      `;
      comparisonTableBody.appendChild(tr);
    });
  });
}

function calculateFactors() {
  const revenueRows = rows.filter((row) => row.kennzeichen === 'UM');
  if (!revenueRows.length || revenueRows.some((row) => row.vorjahrValue === null)) {
    comparisonCalculated = true;
    rows = rows.map((row) => ({ ...row, comparisonFactor: null }));
    comparisonStatus.textContent = 'Faktoren können nicht berechnet werden: Für alle Umsatzerlös-Zeilen muss ein Vorjahreswert vorhanden sein.';
    renderComparison();
    return;
  }

  const currentRevenue = Math.abs(revenueRows.reduce((sum, row) => sum + Number(row.betrag || 0), 0));
  const previousRevenue = Math.abs(revenueRows.reduce((sum, row) => sum + Number(row.vorjahrValue || 0), 0));
  if (currentRevenue === 0 || previousRevenue === 0 || currentRevenue === previousRevenue) {
    comparisonCalculated = true;
    rows = rows.map((row) => ({ ...row, comparisonFactor: null }));
    comparisonStatus.textContent = 'Faktoren können nicht eindeutig berechnet werden: Der Umsatz muss in beiden Jahren größer als 0 sein und sich verändert haben.';
    renderComparison();
    return;
  }

  const revenueRatio = currentRevenue / previousRevenue;
  let hasUncalculableCosts = false;
  revenueBase = previousRevenue;
  rows = rows.map((row) => {
    if (row.kennzeichen === 'UM') {
      return { ...row, comparisonFactor: null };
    }

    if (row.vorjahrValue === null || Math.abs(row.vorjahrValue) === 0) {
      hasUncalculableCosts = true;
      return { ...row, comparisonFactor: null };
    }

    const expectedCostsAt100Percent = Math.abs(row.vorjahrValue) * revenueRatio;
    const factor = Math.abs(row.betrag) / expectedCostsAt100Percent * 100;
    return {
      ...row,
      faktor: String(factor),
      baseValue: Math.abs(row.vorjahrValue),
      comparisonFactor: factor
    };
  });

  comparisonCalculated = true;
  recalculate({ renderTable: false });
  comparisonStatus.textContent = hasUncalculableCosts
    ? 'Faktoren berechnet. „n. b.“ bedeutet: Für diese Zeile fehlt ein Vorjahreswert oder die Vorjahreskosten waren 0.'
    : 'Die Faktoren wurden berechnet und in den Rechner übernommen.';
  renderComparison();
}

function selectTab(tabName) {
  const showComparison = tabName === 'comparison';
  calculatorView.hidden = showComparison;
  comparisonView.hidden = !showComparison;
  calculatorActions.hidden = showComparison;
  comparisonActions.hidden = !showComparison;
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  if (showComparison) {
    renderComparison();
  } else {
    recalculate({ renderTable: true });
  }
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addRow() {
  rows.push({
    id: crypto.randomUUID(),
    konto: String(Date.now()).slice(-6),
    bezeichnung: 'Neue Kostenart',
    betrag: 0,
    faktor: '100',
    kennzeichen: 'KU',
    db: 0,
    baseValue: 0,
    vorjahrValue: null,
    comparisonFactor: null
  });
  recalculate();
}

function setRevenueBase() {
  revenueBase = rows
    .filter((row) => row.kennzeichen === 'UM')
    .reduce((sum, row) => sum + Math.abs(Number(row.betrag || 0)), 0);
}

function startNewCalculation() {
  revenueBase = Math.abs(getRevenueTotal());
  recalculate({ renderTable: true });
}

function handleInputChange(event) {
  const target = event.target;
  if (target === revenueBaseInput) {
    revenueBase = Math.abs(parseNumber(target.value));
    recalculate({ renderTable: false });
    return;
  }

  const id = target.dataset.id;
  const field = target.dataset.field;

  if (!id || !field) {
    return;
  }

  const row = rows.find((item) => item.id === id);
  if (!row) {
    return;
  }

  const raw = target.value;

  if (field === 'konto') {
    row.konto = raw;
    recalculate({ renderTable: false });
    return;
  }

  if (field === 'bezeichnung') {
    row.bezeichnung = raw;
    recalculate({ renderTable: false });
    return;
  }

  if (field === 'betrag') {
    const numeric = parseNumber(raw);
    row.betrag = row.kennzeichen === 'UM' ? numeric : Math.abs(numeric);
    row.baseValue = Math.abs(numeric);
    recalculate({ renderTable: false });
    return;
  }

  if (field === 'faktor') {
    const normalized = String(raw).trim();
    row.faktor = normalized === '' ? 'X' : normalized;
    recalculate({ renderTable: false });
    return;
  }

  if (field === 'kennzeichen') {
    row.kennzeichen = raw;
    const signed = Number(row.betrag || 0);
    row.betrag = row.kennzeichen === 'UM' ? Math.abs(signed) * -1 : Math.abs(signed);
    row.baseValue = Math.abs(signed);
    recalculate({ renderTable: true });
    return;
  }
}

addRowButton.addEventListener('click', addRow);
recalculateButton.addEventListener('click', () => recalculate({ renderTable: true }));
newCalculationButton.addEventListener('click', startNewCalculation);
revenueBaseInput.addEventListener('input', handleInputChange);
revenueBaseInput.addEventListener('change', () => {
  revenueBaseInput.value = formatAmountInput(revenueBase);
  recalculate({ renderTable: true });
});
tableBody.addEventListener('input', handleInputChange);
tableBody.addEventListener('change', (event) => {
  const target = event.target;
  if (target.dataset.field === 'betrag' || target.dataset.field === 'faktor') {
    render();
  }
});

exportButton.addEventListener('click', () => {
  const exportRows = rows.map((row) => ({
    Konto: row.konto,
    Bezeichnung: row.bezeichnung,
    Betrag: row.betrag,
    Vorjahreswert: row.vorjahrValue ?? '',
    Faktor: row.faktor,
    Kennzeichen: row.kennzeichen,
    DB: row.db
  }));

  const ws = XLSX.utils.json_to_sheet(exportRows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'GuV');
  XLSX.writeFile(wb, 'GuV_Struktur.xlsx');
});

exportResultButton.addEventListener('click', () => {
  const workbook = XLSX.utils.book_new();
  const calculatorData = [
    ['GuV Rechner – Ergebnis'],
    ['Erstellt am', new Date().toLocaleDateString('de-DE')],
    ['Umsatzbasis', revenueBase],
    ['Umsatz', getRevenueTotal()],
    ['Gesamtkosten', getCostTotal()],
    ['Ergebnis', getRevenueTotal() + getCostTotal()],
    [],
    ['Konto', 'Bezeichnung', 'Betrag', 'Faktor', 'Kennzeichen', 'DB']
  ];

  rows.forEach((row) => {
    calculatorData.push([
      row.konto,
      row.bezeichnung,
      Number(row.betrag || 0),
      row.faktor,
      row.kennzeichen,
      Number(row.db || 0)
    ]);
  });

  const calculatorSheet = XLSX.utils.aoa_to_sheet(calculatorData);
  calculatorSheet['!cols'] = [
    { wch: 14 },
    { wch: 32 },
    { wch: 18 },
    { wch: 14 },
    { wch: 16 },
    { wch: 18 }
  ];
  const currencyFormat = '#,##0.00 "€";[Red]-#,##0.00 "€"';
  [2, 3, 4, 5].forEach((rowIndex) => {
    const cell = calculatorSheet[XLSX.utils.encode_cell({ r: rowIndex, c: 1 })];
    if (cell) {
      cell.z = currencyFormat;
    }
  });
  rows.forEach((row, index) => {
    const rowIndex = index + 8;
    [2, 5].forEach((columnIndex) => {
      const cell = calculatorSheet[XLSX.utils.encode_cell({ r: rowIndex, c: columnIndex })];
      if (cell) {
        cell.z = currencyFormat;
      }
    });
  });
  calculatorSheet['!autofilter'] = { ref: `A8:F${rows.length + 8}` };
  XLSX.utils.book_append_sheet(workbook, calculatorSheet, 'Rechner');

  const comparisonData = [
    ['GuV Rechner – Vorjahresvergleich'],
    ['Erstellt am', new Date().toLocaleDateString('de-DE')],
    [],
    ['Konto', 'Bezeichnung', 'Aktueller Betrag', 'Vorjahreswert', 'Kennzeichen', 'Rückgerechneter Faktor']
  ];
  rows.forEach((row) => {
    comparisonData.push([
      row.konto,
      row.bezeichnung,
      Number(row.betrag || 0),
      row.vorjahrValue ?? '',
      row.kennzeichen,
      row.comparisonFactor ?? ''
    ]);
  });

  const comparisonSheet = XLSX.utils.aoa_to_sheet(comparisonData);
  comparisonSheet['!cols'] = [
    { wch: 14 },
    { wch: 32 },
    { wch: 20 },
    { wch: 18 },
    { wch: 16 },
    { wch: 28 }
  ];
  rows.forEach((row, index) => {
    const rowIndex = index + 4;
    [2, 3].forEach((columnIndex) => {
      const cell = comparisonSheet[XLSX.utils.encode_cell({ r: rowIndex, c: columnIndex })];
      if (cell) {
        cell.z = currencyFormat;
      }
    });
    const factorCell = comparisonSheet[XLSX.utils.encode_cell({ r: rowIndex, c: 5 })];
    if (factorCell) {
      factorCell.z = '0.00" %"';
    }
  });
  comparisonSheet['!autofilter'] = { ref: `A4:F${rows.length + 4}` };
  XLSX.utils.book_append_sheet(workbook, comparisonSheet, 'Vorjahresvergleich');

  const date = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `GuV-Ergebnis-${date}.xlsx`);
});

printReportButton.addEventListener('click', () => window.print());

importInput.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const workbook = XLSX.read(event.target.result, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const imported = XLSX.utils.sheet_to_json(sheet, { defval: '' });

      rows = imported
        .filter((item) => item.Konto || item.Bezeichnung || item.Betrag || item.Faktor || item.Kennzeichen)
        .map((item) => {
          const betragValue = parseNumber(item.Betrag ?? 0);
          const kennzeichen = String(item.Kennzeichen ?? 'KU').toUpperCase();
          const previousValueKey = Object.keys(item).find((key) =>
            ['vorjahreswert', 'vorjahreswerte', 'vorjahresbetrag', 'vorjahr'].includes(key.trim().toLowerCase())
          );
          const previousValueRaw = previousValueKey ? item[previousValueKey] : '';
          return {
            id: crypto.randomUUID(),
            konto: String(item.Konto ?? ''),
            bezeichnung: String(item.Bezeichnung ?? ''),
            betrag: kennzeichen === 'UM' ? betragValue : Math.abs(betragValue),
            faktor: String(item.Faktor ?? '100').trim() || '100',
            kennzeichen,
            db: parseNumber(item.DB ?? 0),
            baseValue: Math.abs(betragValue),
            vorjahrValue: previousValueRaw === '' || previousValueRaw === null || previousValueRaw === undefined
              ? null
              : parseNumber(previousValueRaw),
            comparisonFactor: null
          };
        });

      comparisonCalculated = false;
      setRevenueBase();
      recalculate();
      comparisonStatus.textContent = 'Datei importiert. Wechseln Sie zum Vorjahresvergleich und rechnen Sie die Faktoren zurück.';
      renderComparison();
    } catch (error) {
      console.error('Import fehlgeschlagen', error);
      alert('Die Datei konnte nicht importiert werden. Bitte prüfen Sie das Format.');
    }
  };

  reader.readAsArrayBuffer(file);
});

calculateFactorsButton.addEventListener('click', calculateFactors);
tabButtons.forEach((button) => {
  button.addEventListener('click', () => selectTab(button.dataset.tab));
});

recalculate();
renderComparison();
