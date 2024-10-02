const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint
const dataContainer = document.getElementById('dataContainer');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentPage = 1;
const itemsPerPage = 5;
let isLoading = false;

// Debouncing function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Fetch data from the server
async function fetchData(page = 1, searchTerm = '', filter = '') {
    if (isLoading) return; // Prevent duplicate requests
    isLoading = true;

    const response = await fetch(`${apiUrl}?_page=${page}&_limit=${itemsPerPage}`);
    const data = await response.json();
    const filteredData = applyFilter(data, filter);
    const searchedData = applySearch(filteredData, searchTerm);

    if (searchedData.length > 0) {
        renderData(searchedData);
    } else {
        renderNoData();
    }

    isLoading = false;
}

// Render data items
function renderData(data) {
    dataContainer.innerHTML = ''; // Clear previous data
    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.className = 'data-item';
        dataItem.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        dataContainer.appendChild(dataItem);
    });
}

// Render no data message
function renderNoData() {
    dataContainer.innerHTML = '<p>No data found.</p>';
}

// Apply search filter
function applySearch(data, searchTerm) {
    return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Apply custom filter
function applyFilter(data, filter) {
    // Implement filtering logic based on your data structure
    // For example: return data.filter(item => item.category === filter);
    return data; // For demonstration purposes, return all data
}

// Throttled load more functionality
function loadMore() {
    currentPage++;
    fetchData(currentPage, searchInput.value, filterSelect.value);
}

// Debounced search functionality
const debouncedSearch = debounce(() => {
    currentPage = 1; // Reset page to 1 on new search
    fetchData(currentPage, searchInput.value, filterSelect.value);
}, 300);

// Event listeners
searchInput.addEventListener('input', debouncedSearch);
filterSelect.addEventListener('change', () => {
    currentPage = 1; // Reset page on filter change
    fetchData(currentPage, searchInput.value, filterSelect.value);
});
loadMoreBtn.addEventListener('click', loadMore);

// Initial fetch
fetchData(currentPage);
