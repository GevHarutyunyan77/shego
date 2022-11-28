import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import {getTopDrivers} from "../../store/actions/app";
import Driver from '../../components/Driver';

function useContainer() {
    const dispatch = useDispatch();
    const {topDriversData} = useSelector((state: any) => state.app);

    useEffect(() => {
        dispatch(getTopDrivers());
    }, []);

    const renderItem = ({item}: any) => {
        const {position, points} = item
        const {givenName, familyName, nationality} = item.Driver
        return (
            <Driver
                name={`${givenName} ${familyName}`}
                position={position}
                country={nationality}
                team={item.Constructors[0].name}
                points={points}
            />
        )
    };

    return {
        renderItem,
        topDriversData
    }
}

export default useContainer
