type Person2 = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person2 = {
  code: 'H',
  name: 'Kevin',
};

type ServiceResponse = string | null | number | undefined;

type UserCharges = 'admin' | 'normal' | 'superUser';

let response234: ServiceResponse;
const myUserTyoe: UserCharges = 'superUser';
