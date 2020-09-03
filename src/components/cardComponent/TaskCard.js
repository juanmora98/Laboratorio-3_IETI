import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class TaskCard extends React.Component { 

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card className="card">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.description}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {this.props.status}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {this.props.dueDate}
                    </Typography>
                    <br />
                    <Typography variant="h5" component="h2">
                        {this.props.responsible.name}
                    </Typography>
                </CardContent>
            </Card>
      );
    }

}
