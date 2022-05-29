import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../store/gists/actions";
import { selectorGistsError, selectorGistsLoading, selectorGists } from "../store/gists/selectors";

const Gists = () => {
const dispatch = useDispatch();
const gists = useSelector(selectorGists);
const loading = useSelector(selectorGistsLoading);
const error = useSelector(selectorGistsError);


const requestGists = useCallback(  async () => {
    dispatch(getAllGists());
    }, []);

useEffect(() => {
    requestGists();
}, []);

const renderGist = useCallback((gist) =>  <li key={gist.id}>
    {gist.description || 'No descr'}</li>,
    []
    );

    if (loading){
        return <CircularProgress/>
    };

    if (error) {
        return (
            <>
            <h3>Error</h3>
            <button onClick={requestGists}>Retry</button>
            </>
        )
    };

    return ( 
    <ul>
        {gists.map(renderGist)}
        </ul>
    );
};


export default Gists;