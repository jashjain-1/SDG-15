function calculateTrees() {
    const amount = document.getElementById("amount").value;
    const costPerTree = 50;

    if (amount && amount > 0) {
        const trees = Math.floor(amount / costPerTree);
        document.getElementById("treeCount").value = trees;
    } else {
        document.getElementById("treeCount").value = "";
    }
}
