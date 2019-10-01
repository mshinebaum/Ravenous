const apiKey = 'YfJIfNt6IN-5R0tnXQRRgU2iMBp6ApJSVex6crPWnFnWkxvAdeQ7IHuIMRoB4HWriTzG6BtZEHJG1buIeIRLmt3b6miG-1pQjHvOLXi10hXtJBCk4_O6kXR36TmTXXYx'

export const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business =>{
                    console.log(business);
                    return {
                        id: business.id,
                        url: business.url,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
    }
};


