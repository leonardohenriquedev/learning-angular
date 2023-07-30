import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  readonly apiUrl = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.apiUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  async getHousesFromCity(city: string): Promise<HousingLocation[] | []> {
    const data: HousingLocation[] = await fetch(this.apiUrl).then(
      async (response) => await response.json()
    );

    return data.filter((housingLocation) =>
      housingLocation.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }

  constructor() {}
}
