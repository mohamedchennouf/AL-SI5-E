import {Type} from "../../entity/Type";
import {Contract} from "../../entity/contract/Contract";

export interface HandleContract {
    addContract(type: Type,description: string, mail: string) : Contract
    updateContractDescription(id: number, description: string) : Contract

}