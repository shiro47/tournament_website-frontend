import React from "react";
import TournamentsCards from "../components/tournamentsCards";
import { Button } from "react-bootstrap";

interface props {}

const Tournaments: React.FC<props> = (props) => {
    const tournamentsData = [
        { title: 'Tournament 1', date: '2023-08-16' },
        { title: 'Tournament 2', date: '2023-08-17' },
        { title: 'Tournament 3', date: '2023-08-16' },
        { title: 'Tournament 4', date: '2023-08-17' },
        { title: 'Tournament 5', date: '2023-08-16' },
        { title: 'Tournament 6', date: '2023-08-17' },
        { title: 'Tournament 7', date: '2023-08-16' },
        { title: 'Tournament 8', date: '2023-08-17' },
        { title: 'Tournament 9', date: '2023-08-16' },
        { title: 'Tournament 10', date: '2023-08-17' }]

    return(
        <>
        <div>
        <TournamentsCards tournaments={tournamentsData}/>
        </div>
        </>
    );
    }

export default Tournaments;