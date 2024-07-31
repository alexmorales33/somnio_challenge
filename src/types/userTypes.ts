export interface Geo {
    lat: string;
    lng: string;
  }
  
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
  
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface LoginResponse {
    username: string;
    email: string;
    full_name: null,
    disabled: boolean
}