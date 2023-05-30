import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Tree from './components/Tree';

function App() {
    const [lastNodes, setlastNodes] = useState([]);
    const [tree, setTree] = useState( {});
    const parents = (element, _array) => {
        if (_array === undefined) _array = [];
        else _array.push(element);

        if (element.tagName !== 'MAIN')
            return parents(element.parentNode, _array);
        else return _array;
    };
    const childClickHandler = (e) => {
        const nodesArr = parents(e.target);
        lastNodes.forEach((node) => {
            if (
                node.classList.contains('child') ||
                node.classList.contains('parent')
            ) {
                node.children[0].classList.remove('clicked');
            }
        });
        setlastNodes(nodesArr);
        nodesArr.forEach((node) => {
            if (
                node.classList.contains('child') ||
                node.classList.contains('parent')
            ) {
                node.children[0].classList.add('clicked');
            }
        });
    };
    console.log(tree)
    return (
        <div className='App'>
            <Input setTree={setTree} />
            {Object.keys(tree).length > 0 ? (
                <main onClick={childClickHandler}>
                    <Tree tree={tree} cl='parent' />
                </main>
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
