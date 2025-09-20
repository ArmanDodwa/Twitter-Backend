import Like from "../model/liks";
import crudRepository from "./crud-repository.js";

class likeRepository extends crudRepository {
    constructor() {
        super(Like);
    }
}

export default new likeRepository();