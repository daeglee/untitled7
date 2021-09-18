import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ChartEditDialog from "./ChartEditDialog";

class EditChartLists extends Component {

    constructor(props) {
        super(props);
        this.state = {charts: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/chart/list')
            .then(response => response.json())
            .then(data => this.setState({charts: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/chart/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGroups = [...this.state.charts].filter(i => i.id !== id);
            this.setState({charts: updatedGroups});
        });
    }

    render() {
        const {charts, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        console.log(charts)
        console.log(this.state.charts)

        return (
            <>
                <ChartEditDialog/>
                <div>
                    <Container fluid>
                        <div className="float-right">
                            <Button color="success" tag={Link} to="/groups/new">Add Group</Button>
                        </div>
                        <h3>My JUG Tour</h3>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Location</th>
                                <th>Events</th>
                                <th width="10%">Actions</th>
                            </tr>
                            </thead>
                        </Table>
                    </Container>
                </div>
            </>
        );
    }
}

export default EditChartLists;
