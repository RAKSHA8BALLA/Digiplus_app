javascript
// index.js

// Function to add a node
function addNode() {
    const nodeType = document.getElementById('nodeType').value;
    const name = document.getElementById('name').value;

    if (nodeType === 'Select option' || name === '') {
        alert('Please select a node type and enter a name');
        return;
    }

    const node = document.createElement('div');
    node.innerHTML = `
        <p>Node Type: ${nodeType}</p>
        <p>Name: ${name}</p>
    `;

    document.getElementById('nodes').appendChild(node);
}

// Function to update a node
function updateNode() {
    const nodeType = document.getElementById('nodeType').value;
    const name = document.getElementById('name').value;

    if (nodeType === 'Select option' || name === '') {
        alert('Please select a node type and enter a name');
        return;
    }

    const node = document.createElement('div');
    node.innerHTML = `
        <p>Node Type: ${nodeType}</p>
        <p>Name: ${name}</p>
    `;

    const nodes = document.getElementById('nodes');
    nodes.innerHTML = '';
    nodes.appendChild(node);
}

// Function to delete a node
function deleteNode() {
    const nodes = document.getElementById('nodes');
    nodes.innerHTML = '';
}