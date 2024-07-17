import React from 'react';
import DragAndDropContainer from './DragAndDropContainer';
import WorkflowCanvas from './WorkflowCanvas';
import DraggableTile from './DraggableTile';

const Dashboard = () => {
    const tiles = [
        { type: 'CONFIGURATION_TILE', text: 'Configurations' },
        { type: 'LOGGER_TILE', text: 'Loggers' },
        { type: 'ENVIRONMENT_TILE', text: 'Environments' },
        { type: 'AUTOMATION_TILE', text: 'Automations' },
        { type: 'GITHUB_REPO_TILE', text: 'GitHub Repos' },
        // Add more tile types as needed
    ];

    return (
        <div>
            <h2>Dashboard</h2>
            <DragAndDropContainer>
                {tiles.map(tile => (
                    <DraggableTile key={tile.type} type={`${tile.type} tile`} text={tile.text} />
                ))}
                <WorkflowCanvas />
            </DragAndDropContainer>
        </div>
    );
};

export default Dashboard;
