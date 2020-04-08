import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import EventsCard from '../components/EventsCard';

const EventContainer = () => {
    const [events, setEvents] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`/event`)
            setEvents([...result.data])
        }
        fetchData()
    }, [])

    const next = () => {
        setEvents([])
        setPage(page + 1)
        axios.get(`/event/page/${page}`)
            .then(res => {
                setEvents([...res.data])
            })
            .catch(err => console.log(err))
    }

    const prev = () => {
        if (page === 1) { return }
        setEvents([])
        setPage(page - 1)
        axios.get(`/event/page/${page}`)
            .then(res => {
                setEvents([...res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <div className="container">
                <h5 className="mt-3">Page: <span className="badge badge-dark">{page}</span></h5>
                <hr />
            </div>
            <div className="conainer  d-flex justify-content-center">
                <div className="row mt-5">
                    {
                        events.length > 0 ?
                            <EventsCard data={events} />
                            : <div>
                                <div className="spinner-border m-5" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }

                </div>
            </div>
            <div className="container mb-5">
                <div className="btn-group btn-group-lg justify-content-center">
                    <button type="button" className="btn btn-dark" onClick={prev}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={next}>Next</button>
                </div>
            </div>
        </Fragment>
    );
}

export default EventContainer;