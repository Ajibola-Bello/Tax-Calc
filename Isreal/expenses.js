const receiptInput = document.getElementById('receipt');
const imagePreview = document.getElementById('image-preview');
const previewContainer = document.getElementById('preview-container');
const uploadLabel = document.getElementById('upload-label');
const removeBtn = document.getElementById('remove-img');
const expenseForm = document.getElementById('expenseForm');

// Handle Image Selection and Preview
receiptInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.classList.remove('hidden');
            uploadLabel.classList.add('hidden');
        }

        reader.readAsDataURL(file);
    }
});

// Handle Removing the Image
removeBtn.addEventListener('click', () => {
    receiptInput.value = ""; // Clear file input
    previewContainer.classList.add('hidden');
    uploadLabel.classList.remove('hidden');
});

// Handle Form Submission
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value,
        date: document.getElementById('date').value,
        vatIncluded: document.getElementById('vat').checked,
        hasImage: receiptInput.files.length > 0
    };

    console.log("Saving Expense:", formData);
    alert("Expense Saved Successfully!");
});