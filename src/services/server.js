import { createServer } from "miragejs";
import { dataEducation } from "../components/dataComponents";

export default function server() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.get("/educations", () => {
        return dataEducation;
      });
      this.get("/skills", () => {
        let keys = Object.keys(localStorage);
        let localStorageData = [];
        for (let key of keys) {
          localStorageData.push({
            skill: key,
            range: localStorage.getItem(key),
          });
        }
        return localStorageData;
      });
      this.post("/skills", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return attrs;
      });
    },
  });
}
