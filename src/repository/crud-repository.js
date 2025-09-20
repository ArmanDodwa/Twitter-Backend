

class crudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        try {
            const record = await this.model.create(data);
            return record;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const record = await this.model.findByIdAndDelete(data);
            return record;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(id) {
        try {
            const record = await this.model.findById(id);
            return record;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAll() {
        try {
            const records = await this.model.find({});
            return records;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const record = await this.model.findByIdAndUpdate(id, data, { new: true });
            return record;
        } catch (error) {
            console.log(error);
            throw error;
        }   
    }
}
export default crudRepository;