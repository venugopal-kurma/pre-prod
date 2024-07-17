import React from 'react';
import { useDrag } from 'react-dnd';
import './DraggableTile.css'; // Import CSS file for styling

const DraggableTile = ({ type, text }) => {
    const [{ isDragging }, drag] = useDrag({
        type,
        item: { type, text },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={`draggable-tile ${type}`} // Use CSS classes for different shapes
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            {text}
        </div>
    );
};

export default DraggableTile;
