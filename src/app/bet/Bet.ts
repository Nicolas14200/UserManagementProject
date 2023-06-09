import { PlaceBet, bet } from "../entities/PlaceBet";
import { Team } from "../entities/Team";

export class ResultBet {
  oddTeamA: number = 1; // 1
  oddTeamB: number = 1; // 2
  oddAny: number = 1; // 1/2
  oddEven: number = 1; // null
  teamA: any;
  teamB: any;

  constructor(teamA: Team, teamB: Team) {
    this.teamA = teamA;
    this.teamB = teamB;
    this.oddAny = 1.2;
    this.oddCalculationEven();
    this.oddCalculationteamA();
    this.oddCalculationteamB();
  }
  changeTeam(teamA: Team, teamB: Team): void {
    this.teamA = teamA;
    this.teamB = teamB;
  }
  oddCalculationEven(): number {
    return (this.oddEven = (this.teamA.odd + this.teamB.odd) / 2);
  }
  oddCalculationteamA(): number {
    return (this.oddTeamA = this.teamA.odd);
  }
  oddCalculationteamB(): number {
    return (this.oddTeamB = this.teamB.odd);
  }
  loadGainVictory(odd: number, amount: number): number {
    return odd * amount;
  }
  result(placeBet: PlaceBet, winType: string): number {
    if (placeBet.betType === bet.teamA && winType == "teamA") {
      return this.loadGainVictory(this.oddTeamA, placeBet.amountOn);
    }
    if (placeBet.betType === bet.teamB && winType == "teamB") {
      return this.loadGainVictory(this.oddTeamB, placeBet.amountOn);
    }
    if (placeBet.betType === bet.any && winType == "any") {
      return this.loadGainVictory(this.oddAny, placeBet.amountOn);
    }
    if (placeBet.betType === bet.even && winType == "even") {
      return this.loadGainVictory(this.oddEven, placeBet.amountOn);
    }
    return 0;
  }
}
