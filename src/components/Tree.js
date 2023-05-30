import React from 'react';

const Tree = ({ tree, cl }) => {
    return (
        <div className={cl}>
            <span className={tree?.children?.length > 0 ?'has-nodes':''}>{tree.name}</span>
            <div className='parent-child'>
                {tree?.children?.map((child) => {
                    return <Tree key={child.name} tree={child} cl={'child'} />;
                })}
            </div>
        </div>
    );
};

export default Tree;
