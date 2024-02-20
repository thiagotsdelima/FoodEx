    .container {
  width: 687px;
  height: 300px;
  display: grid;
  grid-template-columns: auto; /* Define uma única coluna que ocupa todo o espaço disponível */
  grid-template-rows: repeat(4, 1fr); /* Divide igualmente em 4 linhas */
  grid-template-areas:
    "strong"
    "p"
    "seasoningWrapper"
    "buttonInclude";
}

.strong {
  grid-area: strong;
}

.p {
  grid-area: p;
}

.seasoningWrapper {
  grid-area: seasoningWrapper;
  display: flex; /* Usa flexbox para alinhar os temperos horizontalmente */
  overflow-x: auto; /* Permite rolagem horizontal se os temperos excederem a largura disponível */
}

.buttonInclude {
  grid-area: buttonInclude;
}
