import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const DirectorList = () => {
    const { directors } = useOutletContext()

    const displayDirectors = directors.map(d => (
        <Link to={`${d.id}`} key={d.id}><li>{d.name}</li></Link>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
