import { faker } from '@faker-js/faker';

export interface TestUser {
    userName: string;
    userEmail: string;
    password: string;
    userFirstName:string;
    userLastName:string;
    userCompanyName:string;
    userAddressStreet:string;
    userState:string;
    userZipCode:string;
    userMobileNumber:string;
}

export function createRandomUser(): TestUser {
  return {
    userName: faker.person.fullName(),
    userEmail: faker.internet.email(),
    password: faker.internet.password(),
    userFirstName:faker.person.firstName(),
    userLastName:faker.person.lastName(),
    userCompanyName:faker.company.name(),
    userAddressStreet:faker.location.streetAddress(),
    userState:faker.location.state(),
    userZipCode:faker.location.zipCode(),
    userMobileNumber:faker.phone.number()
  };
}