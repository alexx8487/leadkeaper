import { createServer, Response } from "miragejs";

import { REST_API_URL } from "../api";
import {
  createFakeMember,
  getFakeMemberByCode,
  getFakeMemberById,
  getFakeMemberList,
  updateFakeMember,
} from "./members";
// import { getFakeSubscriptionById } from "./subscriptions";

if ((window as any).server) {
  (window as any).server.shutdown();
}

(window as any).server = createServer({
  routes() {
    this.urlPrefix = REST_API_URL;

    this.get("/members", () => new Response(200, {}, getFakeMemberList()));

    this.get("/members/:id", (schema, request) => {
      const member = getFakeMemberById(request.params.id);

      if (member) {
        return new Response(200, {}, member);
      } else {
        return new Response(404);
      }
    });

    this.post("/members", (schema, request) => {
      const id = createFakeMember(JSON.parse(request.requestBody));

      return new Response(201, {}, id);
    });

    this.patch("/members/:id", (schema, request) => {
      updateFakeMember({
        id: request.params.id,
        ...JSON.parse(request.requestBody),
      });

      return new Response(200);
    });

    this.get("/members/byCode/:code", (schema, request) => {
      const member = getFakeMemberByCode(request.params.code);

      if (member) {
        return new Response(200, {}, member);
      } else {
        return new Response(401);
      }
    });

    // this.get("/subscriptions/:id", (schema, request) => {
    //   const subscription = getFakeSubscriptionById(request.params.id);

    //   if (subscription) {
    //     return new Response(200, {}, subscription);
    //   } else {
    //     return new Response(404);
    //   }
    // });

    this.passthrough();
  },
});
