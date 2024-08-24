const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("get", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())  // Correctly closing the arrow function
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .catch((error => {  // Correctly closing the arrow function
          reject(error);
        }))
    })
  },

  post: async function (url: string, data: any): Promise<any> {
    console.log("post", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: JSON.stringify(data), // Assuming data should be stringified
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Response:", json);
          resolve(json);
        })
        .catch((error => {  // Correctly closing the arrow function
          reject(error);
        }))
    })
  }
};

export default apiService;