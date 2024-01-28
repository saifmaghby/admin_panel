function openAddItemModal() {
    document.getElementById('addItemModal').style.display = 'flex';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('addItemModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function updateItem() {
    // Add your update logic here
    console.log("Update button clicked");
}

function deleteItem() {
    // Add your delete logic here
    console.log("Delete button clicked");
}