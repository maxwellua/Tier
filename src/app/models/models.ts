interface Company {
  companyName: string,
  contactFirstName: string,
  contactLastName: string
}

interface Cargo {
  description: string,
  pickupLocation: string,
  deliveryLocation: string,
  pickupDate: string,
  deliveryDate: string,
  companies: Company[]
}

export { Company, Cargo };
