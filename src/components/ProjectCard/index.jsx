    // src/components/ProjectCard/index.js
    import React from 'react';
    import { Card, CardContent, Typography } from '@mui/material';
    import './ProjectCard.css';

    const ProjectCard = ({ title, description }) => {
    return (
        <Card className="project-card">
        <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography>{description}</Typography>
        </CardContent>
        </Card>
    );
    };

    export default ProjectCard;