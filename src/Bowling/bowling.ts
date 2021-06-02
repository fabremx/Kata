

export type Roll = number | '-' | '/' | 'X' | '';

export class Player {
  rolls: Roll[] = [];

  score(roll: Roll) {
    this.rolls.push(roll)
  }
}

export const calculPoints = (rolls: Roll[]): number => {
  if (!rolls.length) return 0;

  const rollPoints: number[] = transformRollToPoints(rolls);
  let score = 0;
  
  for (let i = 0; i < rollPoints.length; i++) {
    if (isStrike(rollPoints, i)) {
      score = score + getStrikeBonus(rollPoints, i);
      i = getNextFrame(i);
    }
    else if (isSpare(rollPoints, i)) {
      score = score + getSpareBonus(rollPoints, i);
      i = getNextFrame(i);
    }  else {
      score += rollPoints[i];
    }
  }

  return score;
}

const getNextFrame = (index: number): number => {
  return index + 1;
}

const isFirstRollOfFrame = (index: number): boolean => {
  return index % 2 === 0
}

const isStrike = (points: number[], index: number): boolean => {
  const STRIKE_SCORE = 10;
  const frameFirstRoll = points[index];

  return isFirstRollOfFrame(index) && frameFirstRoll === STRIKE_SCORE;
}

const getStrikeBonus = (points: number[], index: number): number => {
  const nextFrameFirstRoll = points[index + 2];
  const nextFrameSecondRoll = points[index + 3];

  return (10 + nextFrameFirstRoll + nextFrameSecondRoll);
}

const isSpare = (points: number[], index: number): boolean => {
  const SPARE_SCORE = 10;

  const frameFirstRoll = points[index]; 
  const frameSecondRoll = points[index + 1];

  return isFirstRollOfFrame(index) && (frameFirstRoll + frameSecondRoll) === SPARE_SCORE;
}

const getSpareBonus = (points: number[], index: number): number => {
  const nextFrameFirstRoll = points[index + 2];

  return (10 + nextFrameFirstRoll);
}

export const transformRollToPoints = (rolls: Roll[]): number[] => {
  const points: number[] = []

  rolls.forEach((roll, index) => {
    if (roll === '-') points.push(0)
    if (roll === '/') points.push(10 - points[index - 1])
    if (roll === 'X') points.push(10)
    if (roll === '') points.push(0)
    if (typeof roll === 'number') points.push(roll)
  })

  return points;
}