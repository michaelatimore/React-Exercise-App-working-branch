
export const exerciseOptions = {//returns an array of all the exercises at the API
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {limit: '1500'},//optional limit parameter
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '64aeddd226msh56e48575f77f07ep1a92acjsnc4afd99e43c0'
  }
};
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 
  headers: {
    'X-RapidAPI-Key': '64aeddd226msh56e48575f77f07ep1a92acjsnc4afd99e43c0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



/*
This modification uses the URLSearchParams class to handle the query parameters and appends them to the URL when making the fetch request.
*/
export const fetchData = async (url, options) => {
  const queryParams = new URLSearchParams(options.params); // Create a new instance of URLSearchParams, a built-in JavaScript class that helps in handling URL query parameters, passing in options.param
  const response = await fetch(`${url}?${queryParams}`, {// Make a request to the specified URL with the query parameters. The fetch function returns a promise that resolves to a response object representing the response to the request. Uses string interpolation to concatenate the url with the query parameters string. This creates the final URL with the query parameters appended
    method: options.method,
    headers: options.headers,
  });
  const data = await response.json();//returns another promise that resolves to the parsed JSON data.
  return data; // Return the parsed JSON data
};

/* ***This modification uses the URLSearchParams class to handle the query parameters and appends them to the URL when making the fetch request. ***
export const fetchData = async (url, options) => {
  const response = await fetch(`${url}?${new URLSearchParams(options.params)}`, {
    method: options.method,
    headers: options.headers,
  });
  const data = await response.json();
  return data;
};
*/


/* ***code from the tutorial***
export const fetchData = async (url, options) => {
  const response = await fetch (url, options);
  const data = await response.json();

  return data;
};*/ 