import { CrudService } from "@/services/crud.service";

export class AddressResource extends CrudService {
  constructor() {
    super("addresses");
  }

  getAddresses() {
    return this.get();
  }

  addAddress(address) {
    return this.post(address);
  }

  updateAddress(address) {
    return this.put(address);
  }

  removeAddress(addressId) {
    return this.delete(addressId);
  }
}
