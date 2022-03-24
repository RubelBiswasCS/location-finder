// A mock function to mimic making an async request for data
export function fetchPlace(keyword = '') {
    let url = "https://api.bmapsbd.com/search/autocomplete/web?search=" + keyword;
    return new Promise((resolve) => {
        return setTimeout(() => resolve({ 
            data: fetch(url)
                        .then(response => response.json())
                        .then(response => response.places) 
        }), 1000)
    }

    );
}
