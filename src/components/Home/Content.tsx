import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { useState, useEffect } from 'react';



const Content = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(data)

    // FETCHING API DATA
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                setLoading(true)
                const resData = await axios.get('https://api.spacexdata.com/v3/launches')
                setData(resData.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    // SEARCH QUERY FETCHED DATA
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = data?.filter((item: {
        rocket: { rocket_name: string },
        mission_name: string,
    }) =>
        (item.rocket.rocket_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.mission_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.mission_name.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    // FILTERING DATA BY LAUNCH STATUS

    const [status, setStatus] = useState('all'); // Initialize with 'all' as the default value

    const filteredStatus = filteredData?.filter((item: { launch_success: boolean, all: string }) => {
        if (status === 'all') {
            return true;
        }
        return (
            item.launch_success?.toString().toLowerCase().includes(status.toLowerCase()) ||
            item.all?.toString().toLowerCase().includes(status.toLowerCase())
        );
    });

    // FILTERING ONLY UPCOMING DATA
    const [upcomingData, setUpcomingData] = useState(false);
    const filteredDataUpcoming = filteredStatus?.filter((item: { upcoming: boolean }) => {
        if (upcomingData) {
            return item.upcoming;
        }
        return true;
    });

    console.log('filteredDataUpComing', filteredDataUpcoming)

    // FILTERING DATA BY LAUNCH DATE
    // const filteredDataLaunch = filteredData?.filter((item: { launch_success: boolean, upcoming: string }) =>
    //     (item?.launch_success?.toString().toLowerCase().includes(status.toLowerCase()))
    // );

    return (
        <section>
            <Container>
                <div className="my-5 d-flex justify-content-center align-items-center text-center flex-column">
                    <h1>Spaceflight details</h1>
                    <p className="text-secondary">Find out the elaborate features of all the past big spaceflights.</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <Form.Group className="mb-3 text-secondary" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Show upcoming only" onClick={() => setUpcomingData((prev) => !prev)} />
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-between align-items-center w-100 h-100">
                    <div className="">
                        <InputGroup className="border-1 border-secondary shadow-sm rounded" size="sm">
                            <Form.Control
                                placeholder="search..."
                                aria-label="Username"
                                className=" text-secondary"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon1" className="bg-primary text-white border-light shadow-sm"
                                style={{ cursor: 'pointer' }}>
                                <SearchIcon />
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                    <div className="d-flex  justify-content-between align-items-center">
                        <Form.Select aria-label="Default select example" size="sm" onChange={(e) => setStatus(e.target.value)}
                            className="border-1 shadow-sm rounded text-secondary">
                            <option>By Launch Status</option>
                            <option value="false">Failure</option>
                            <option value="true">Success</option>
                            <option value="all">All</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example" size="sm" className="border-1 text-secondary shadow-sm rounded ms-2">
                            <option>By Launch Date</option>
                            <option value="Last Week">Last Week</option>
                            <option value="Last Month">Last Month</option>
                            <option value="Last Year">Last Year</option>
                            <option value="upcoming">All upcoming</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="py-4">
                    <Row className="gy-3">
                        {
                            loading ? <div className="d-flex justify-content-center align-items-center">
                                <Spinner animation="grow" />
                            </div>
                                :
                                <>
                                    {
                                        filteredDataUpcoming?.map((item: {
                                            links: { mission_patch: string, mission_patch_small: string },
                                            launch_date_utc: string,
                                            launch_year: string,
                                            launch_success: boolean,
                                            mission_name: string,
                                            rocket: { rocket_name: string, rocket_type: string },
                                            upcoming: boolean,
                                        }, index: number) => (
                                            <Col md={4} key={index}>
                                                <Card className="border-1 shadow-sm">
                                                    <Card.Img variant="top" src={item?.links?.mission_patch} loading="lazy"
                                                        alt={item?.rocket?.rocket_name}
                                                        style={{ width: '100%', height: '250px', objectFit: 'contain' }} />
                                                    <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                                                        <small className="text-secondary">
                                                            Launch Date: {item.launch_date_utc.slice(0, 10)}
                                                        </small>
                                                        <Card.Title>{item.mission_name}</Card.Title>
                                                        <Card.Text className="d-flex flex-column text-center text-secondary">
                                                            <span>  {item?.rocket?.rocket_name}</span>
                                                            <span>{item?.rocket?.rocket_type}</span>
                                                        </Card.Text>
                                                        <Button variant={item.launch_success === false ? 'danger' : 'success'} size="sm" className="fw-bold">
                                                            {item.launch_success === false ? 'Failed' : 'Success'}
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </>


                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Content