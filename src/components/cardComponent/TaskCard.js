import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class TaskCard extends React.Component { 

    constructor(props) {
        super(props);
        this.state = { description: '', responsible: { name: '', email: '' }, status: '', dueDate: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return(
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {this.state.description}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {this.state.status}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {this.state.dueDate}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {this.state.responsible.name}
                    </Typography>
                </CardContent>
            </Card>
      );
    }

}
