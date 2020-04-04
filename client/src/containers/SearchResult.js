import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import EventsCard from '../components/EventsCard';
import { useHistory } from 'react-router-dom';

const SearchResult = (props) => {
    const [name, setName] = useState(props.match.params.Name)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            axios.get(`http://localhost:8000/event/name/${name}`)
                .then(res => setData([...res.data]))
                .catch(err => console.log(err))
        }
        fetchData()
    }, [])

    const next = () => {
        setData([])
        setPage(page + 1)
        axios.get(`http://localhost:8000/event/name/${name}/${page}`)
            .then(res => {
                setData([...res.data])
            })
            .catch(err => {
                alert("Reached the end")
                history.push("/")
            })
    }

    const prev = () => {
        if (page === 1) { return }
        setData([])
        setPage(page - 1)
        axios.get(`http://localhost:8000/event/name/${name}/${page}`)
            .then(res => {
                setData([...res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <h1 className="display-4 text-center">Search results of Game {name}</h1>
            <div className="container mt-5">
                <h5 className="mt-3">Page: <span className="badge badge-dark">{page}</span></h5>
                <hr />
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row mt-5">
                    {
                        data.length > 0
                            ?
                            <EventsCard data={data} />
                            :
                            <div className="spinner-border m-5" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }
                </div>
            </div>
            <div className="container">
                <div className="btn-group btn-group-lg  justify-content-center">
                    <button type="button" className="btn btn-dark" onClick={prev}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={next}>Next</button>
                </div>
                <h5 className="mt-3">Page: <span className="badge badge-dark">{page}</span></h5>
            </div>
        </Fragment>
    );
}

export default SearchResult;