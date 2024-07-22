//Número de Vitórias
let winCount = 50;

// Número de Derrotas
let lostCount = 12;

// Calcula o Rank baseado no saldo Vitória - Derrota
let rank = getRank(winCount, lostCount);

// Saldo de Vitórias - Derrotas
let winlooseRate = winCount - lostCount;

console.log(`O herói tem o saldo de ${winlooseRate} está no nível de ${rank}`);



function getRank(winCount = 0, lostCount = 0) {
  let rank = "";
  let winLoose = winCount - lostCount;
  rank = calculateRank(winLoose);
  return rank;
}

function calculateRank(wlRate) {
  let rank = "";
  if (wlRate < 10) {
    rank = "Ferro";
  }
  if (wlRate > 10 && wlRate <= 20) {
    rank = "Bronze";
  }
  if (wlRate > 20 && wlRate <= 50) {
    rank = "Prata";
  }
  if (wlRate > 50 && wlRate <= 80) {
    rank = "Ouro";
  }
  if (wlRate > 80 && wlRate <= 90) {
    rank = "Diamante";
  }
  if (wlRate > 90 && wlRate <= 100) {
    rank = "Lendário";
  }
  if (wlRate > 100) {
    rank = "Imortal";
  }

  return rank;
}
