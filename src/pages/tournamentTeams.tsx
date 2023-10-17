import React from "react";
import { useLocation } from "react-router-dom";
import TeamCards from "../components/teamCards";

interface props { }

interface Team {
    id: number;
    name: string;
    player1: Player;
    player2: Player;
    player3: Player;
    isActive: boolean;
}

interface Player {
    name: string;
    platform: string;
    discordID: number;
    discordName: string;
}

interface TournamentData {
    teams: Team[];
}

const TournamentTeams: React.FC<props> = (props) => {
    const location = useLocation();
    const tournamentData: TournamentData = location.state.tournamentData;
    const inactiveTeams = tournamentData.teams.filter((team) => !team.isActive);
    return (
        <><div className="tCreator">
            <h2 className="text-center">Teams</h2>
            <TeamCards teams={inactiveTeams} toAccept={true} />
        </div></>
    )
};

export default TournamentTeams;