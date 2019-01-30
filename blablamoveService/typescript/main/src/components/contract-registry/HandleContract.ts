import {Type} from "../../entity/Type";
import {Contract} from "../../entity/contract/Contract";

export interface HandleContract {
    addContract(type: Type,description: string, mail: string) : Promise<Contract>
    updateContractDescription(id: number, description: string) : Promise<Contract>

}