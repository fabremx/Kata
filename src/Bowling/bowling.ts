

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
    if (isLastFrame(i)) {
      score += computeLastFrameScore(rollPoints, i);
      break;
    }

    if (!isFrameSpecialPoints(rollPoints, i)) {
      score += rollPoints[i];
      continue;
    }

    score += computeScore(rollPoints, i)
    i++;
  }

  return score;
}

const isFrameSpecialPoints = (points: number[], index: number): boolean => {
  return isDoubleStrike(points, index) || isStrike(points, index) || isSpare(points, index)
}

const computeScore = (points: number[], index: number): number => {
  if (isDoubleStrike(points, index)) {
    return getDoubleStrikeBonus(points, index)
  }
  if (isStrike(points, index)) {
    return getStrikeBonus(points, index);
  }
  if (isSpare(points, index)) {
    return getSpareBonus(points, index);
  }
}

const computeLastFrameScore = (points: number[], index: number): number => {
  if (isDoubleStrike(points, index)) {
    return getLastFrameDoubleStrikeBonus(points, index);
  }
  if (isStrike(points, index)) {
    return getLastFrameStrikeBonus(points, index);
  }
  if (isSpare(points, index)) {
    return getSpareBonus(points, index);
  }

  return getLastPoints(points, index);
}

const isLastFrame = (index: number): boolean => index === 18

const isFirstRollOfFrame = (index: number): boolean => {
  return index % 2 === 0
}

const isStrike = (points: number[], index: number): boolean => {
  const STRIKE_SCORE = 10;
  const frameFirstRoll = points[index];

  return isFirstRollOfFrame(index) && frameFirstRoll === STRIKE_SCORE;
}

const isDoubleStrike = (points: number[], index: number): boolean => {
  const STRIKE_SCORE = 10;
  const frameFirstRoll = points[index];
  const nextFrameFirstRoll = points[index + 2];

  return isFirstRollOfFrame(index) && frameFirstRoll === STRIKE_SCORE && nextFrameFirstRoll === STRIKE_SCORE;
}

const getStrikeBonus = (points: number[], index: number): number => {
  const nextFrameFirstRoll = points[index + 2];
  const nextFrameSecondRoll = points[index + 3];

  return (10 + nextFrameFirstRoll + nextFrameSecondRoll);
}

const getDoubleStrikeBonus = (points: number[], index: number): number => {
  const twoNextFrameFirstRoll = points[index + 4];

  return (20 + twoNextFrameFirstRoll);
}

const getLastFrameDoubleStrikeBonus = (points: number[], index: number): number => {
  const thirddRoll = points[index + 2];

  return (20 + thirddRoll);
}

const getLastFrameStrikeBonus = (points: number[], index: number): number => {
  const secondRoll = points[index + 1];
  const thirddRoll = points[index + 2];

  return (10 + secondRoll + thirddRoll);
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

const getLastPoints = (points: number[], index: number): number => {
  const lastFrameFirstRoll = points[index];
  const lastFrameSecondRoll = points[index + 1];

  return lastFrameFirstRoll + lastFrameSecondRoll;
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