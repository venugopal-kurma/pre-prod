import React from 'react';
import { useDrop } from 'react-dnd';

const WorkflowCanvas = () => {
    const [{ isOver }, drop] = useDrop({
        accept: ['TEXT_TILE', 'IMAGE_TILE'], // Specify accepted tile types
        drop: (item, monitor) => {
            // Handle drop logic here
            console.log('Dropped item:', item);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div ref={drop} style={{ border: '2px dashed #ccc', padding: '20px' }}>
            <h3>Workflow Canvas</h3>
            {isOver && <div>Drop Here</div>}
        </div>
    );
};

export default WorkflowCanvas;
