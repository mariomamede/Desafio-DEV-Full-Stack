import api from "./api";
import { VehicleResponse, VehicleParams } from "../types/vehicle";

class VehicleService {
  async getVehiclesWithPaginate(
    params: VehicleParams
  ): Promise<VehicleResponse> {
    try {
      const response = await api.get<VehicleResponse>(
        "/recruitment/vehicles/list-with-paginate",
        { params }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      throw error;
    }
  }
}

export default new VehicleService();
