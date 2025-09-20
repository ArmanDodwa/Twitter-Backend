import Comment from "../model/comment.js";
import crudRepository from "./crud-repository.js";

class commentRepository extends crudRepository {

  constructor() {
    super(Comment);
  }

}

export default new commentRepository();