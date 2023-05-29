// imagina a un chico disfrutando mientras colorea su tablero de ajedrez.
//  Planea llenar cada cuadro con matices rojos o azules.
//   Con el objetivo de añadir un toque único, desea mantener un balance entre los espacios rojos y azules,
//    evitando al mismo tiempo que dos filas o columnas tengan la misma cantidad de espacios rojos.
//     ¿Sería posible colorear el tablero de ajedrez siguiendo estos parámetros? 
//     ¿Qué ocurriría si, en lugar de un tablero de ajedrez estándar de 8x8, poseyera uno colosal de 1000x1000?


const chess = document.getElementById('chess');
const size = 8;

// Crea una matriz para almacenar los colores de las celdas
var board = [];

for (let i = 0; i < size; i++) {
  board[i] = [];

  for (let j = 0; j < size; j++) {
    // Determina el color de la celda en función de la posición
    var cellColor = (i + j) % 2 === 0 ? 'red' : 'blue';
    board[i][j] = cellColor;
  }
}

// Verifica y ajusta el balance de colores en cada fila y columna
for (let i = 0; i < size; i++) {
  var redCount = 0;
  var blueCount = 0;

  for (let j = 0; j < size; j++) {
    if (board[i][j] === 'red') {
      redCount++;
    } else {
      blueCount++;
    }
  }

  if (redCount === blueCount) {
    // Si hay un balance igual en la fila, cambia el color de una celda
    var randomIndex = Math.floor(Math.random() * size);
    board[i][randomIndex] = board[i][randomIndex] === 'red' ? 'blue' : 'red';
  }
}

// Genera el tablero de ajedrez con los colores actualizados
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.classList.add(board[i][j]);
    chess.appendChild(cell);
  }
}